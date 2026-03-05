import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { Transfer, TransferStatus } from '../../core/models';

const STATUS_FLOW: Record<TransferStatus, TransferStatus | null> = {
  DRAFT:       'CREATED',
  CREATED:     'IN_PROGRESS',
  IN_PROGRESS: 'COMPLETED',
  COMPLETED:   'PAID_OUT',
  PAID_OUT:    null,
  CANCELLED:   null,
};

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'transfers.component.css',
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().transfers }}</h1>
        <p class="page-subtitle">{{ total() }} Transfers insgesamt</p>
      </div>
      <button class="btn btn-primary" (click)="openNew()">＋ {{ t().newTransfer }}</button>
    </div>

    <!-- Filters -->
    <div class="filters-bar">
      <input class="form-control" type="search" [(ngModel)]="search"
             [placeholder]="t().search" (input)="load()" />
      <select class="form-control" [(ngModel)]="filterStatus" (change)="load()">
        <option value="">Alle Status</option>
        <option *ngFor="let s of statuses" [value]="s">{{ s }}</option>
      </select>
      <select class="form-control" [(ngModel)]="filterBranch" (change)="load()">
        <option value="">Alle Filialen</option>
        <option *ngFor="let b of branches" [value]="b">{{ b }}</option>
      </select>
    </div>

    <!-- Table -->
    <div class="card" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ref</th><th>{{ t().sender }}</th><th>{{ t().receiver }}</th>
              <th>{{ t().amount }}</th><th>{{ t().fee }}</th><th>{{ t().status }}</th>
              <th>Filiale</th><th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            @for (tr of transfers(); track tr.id) {
              <tr>
                <td><code class="ref">{{ tr.ref }}</code></td>
                <td>{{ tr.senderName }}</td>
                <td>{{ tr.receiverName }}</td>
                <td class="fw-600">{{ tr.amount | number:'1.2-2' }} {{ tr.currency }}</td>
                <td class="text-muted">€ {{ tr.fee | number:'1.2-2' }}</td>
                <td><span class="badge" [class]="'badge-' + tr.status.toLowerCase()">{{ tr.status }}</span></td>
                <td>{{ tr.branch }}</td>
                <td>
                  <div class="actions">
                    <button class="btn btn-ghost btn-sm" (click)="select(tr)">Details</button>
                    @if (nextStatus(tr.status)) {
                      <button class="btn btn-success btn-sm" (click)="advance(tr)">
                        → {{ nextStatus(tr.status) }}
                      </button>
                    }
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="8"><div class="empty-state"><div class="empty-icon">💳</div><h3>Keine Transfers</h3></div></td></tr>
            }
          </tbody>
        </table>
      </div>
      <!-- Pagination -->
      <div class="pagination">
        <button class="page-btn" [disabled]="page()===1" (click)="setPage(page()-1)">‹</button>
        <span class="text-muted" style="font-size:.85rem">Seite {{ page() }} von {{ totalPages() }}</span>
        <button class="page-btn" [disabled]="page()>=totalPages()" (click)="setPage(page()+1)">›</button>
      </div>
    </div>

    <!-- Detail Panel -->
    @if (selected()) {
      <div class="modal-backdrop" (click)="selected.set(null)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ selected()!.ref }}</span>
            <button class="btn btn-icon" (click)="selected.set(null)">✕</button>
          </div>
          <div class="modal-body">
            <div class="detail-grid">
              <div class="detail-row"><span class="detail-label">{{ t().sender }}</span><span>{{ selected()!.senderName }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().receiver }}</span><span>{{ selected()!.receiverName }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().amount }}</span><span class="fw-600">{{ selected()!.amount | number:'1.2-2' }} {{ selected()!.currency }}</span></div>
              <div class="detail-row"><span class="detail-label">Gebühr</span><span>€ {{ selected()!.fee | number:'1.2-2' }}</span></div>
              <div class="detail-row"><span class="detail-label">Gewinn</span><span class="text-ok">€ {{ selected()!.profit | number:'1.2-2' }}</span></div>
              <div class="detail-row"><span class="detail-label">Status</span><span class="badge" [class]="'badge-' + selected()!.status.toLowerCase()">{{ selected()!.status }}</span></div>
              <div class="detail-row"><span class="detail-label">Filiale</span><span>{{ selected()!.branch }}</span></div>
              <div class="detail-row"><span class="detail-label">Mitarbeiter</span><span>{{ selected()!.employee }}</span></div>
              <div class="detail-row"><span class="detail-label">Abholzeit</span><span>{{ selected()!.pickupTime }}</span></div>
              @if (selected()!.note) {
                <div class="detail-row"><span class="detail-label">Notiz</span><span>{{ selected()!.note }}</span></div>
              }
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="selected.set(null)">Schließen</button>
            @if (nextStatus(selected()!.status)) {
              <button class="btn btn-success" (click)="advance(selected()!); selected.set(null)">
                Status → {{ nextStatus(selected()!.status) }}
              </button>
            }
          </div>
        </div>
      </div>
    }

    <!-- New Transfer Modal -->
    @if (showNew()) {
      <div class="modal-backdrop" (click)="showNew.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">Neuer Transfer</span>
            <button class="btn btn-icon" (click)="showNew.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">{{ t().senderName }}</label>
                <input class="form-control" [(ngModel)]="newTr.senderName" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().senderPhone }}</label>
                <input class="form-control" [(ngModel)]="newTr.senderPhone" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().receiverName }}</label>
                <input class="form-control" [(ngModel)]="newTr.receiverName" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().receiverCountry }}</label>
                <input class="form-control" [(ngModel)]="newTr.receiverCountry" placeholder="Morocco" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().amount }}</label>
                <input class="form-control" type="number" [(ngModel)]="newTr.amount" />
              </div>
              <div class="form-group">
                <label class="form-label">Währung</label>
                <select class="form-control" [(ngModel)]="newTr.currency">
                  <option>MAD</option><option>TRY</option><option>USD</option><option>EUR</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNew.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="createTransfer()">Transfer anlegen</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class TransfersComponent implements OnInit {
  transfers   = signal<Transfer[]>([]);
  selected    = signal<Transfer | null>(null);
  showNew     = signal(false);
  total       = signal(0);
  page        = signal(1);
  limit       = 20;
  search      = '';
  filterStatus = '';
  filterBranch = '';
  totalPages  = computed(() => Math.max(1, Math.ceil(this.total() / this.limit)));

  statuses = ['CREATED','IN_PROGRESS','COMPLETED','PAID_OUT','CANCELLED'];
  branches: string[] = [];

  newTr: any = { senderName:'', senderPhone:'', receiverName:'', receiverCountry:'', amount:0, currency:'MAD' };

  constructor(
    private svc:   TransferService,
    public  auth:  AuthService,
    private toast: ToastService,
    public  i18n:  I18nService,
  ) {}

  t = this.i18n.t;

  ngOnInit() { this.load(); }

  load() {
    const p: any = { page: this.page(), limit: this.limit };
    if (this.search)       p['search'] = this.search;
    if (this.filterStatus) p['status'] = this.filterStatus;
    if (this.filterBranch) p['branch'] = this.filterBranch;

    this.svc.getAll(p).subscribe(r => {
      this.transfers.set(r.data);
      this.total.set(r.total);
      const bs = [...new Set(r.data.map((t: Transfer) => t.branch))];
      if (this.branches.length === 0) this.branches = bs;
    });
  }

  setPage(p: number) { this.page.set(p); this.load(); }

  select(t: Transfer) { this.selected.set(t); }
  openNew() { this.showNew.set(true); }

  nextStatus(s: TransferStatus): TransferStatus | null { return STATUS_FLOW[s]; }

  advance(tr: Transfer) {
    const next = this.nextStatus(tr.status);
    if (!next) return;
    this.svc.updateStatus(tr.id, next).subscribe({
      next: updated => {
        this.transfers.update(list => list.map(t => t.id === updated.id ? updated : t));
        this.toast.success(`Status -> ${next}`);
      },
      error: () => this.toast.error('Fehler beim Status-Update'),
    });
  }

  createTransfer() {
    // FIX 9: Eingabevalidierung
    if (!this.newTr.senderName?.trim()) { this.toast.error(this.t().senderName + ' ist Pflichtfeld'); return; }
    if (!this.newTr.receiverName?.trim()) { this.toast.error(this.t().receiverName + ' ist Pflichtfeld'); return; }
    if (!this.newTr.amount || this.newTr.amount <= 0) { this.toast.error(this.t().amount + ' muss positiv sein'); return; }
    this.svc.create(this.newTr).subscribe({
      next: () => { this.toast.success('Transfer angelegt'); this.showNew.set(false); this.load(); },
      error: (e) => this.toast.error(e.error?.message || 'Fehler beim Anlegen'),
    });
  }

  // FIX 5: Stornierung
  cancel(tr: Transfer) {
    if (!confirm('Transfer ' + tr.ref + ' wirklich stornieren?')) return;
    this.svc.cancel(tr.id).subscribe({
      next: updated => {
        this.transfers.update(list => list.map(t => t.id === updated.id ? updated : t));
        this.toast.success(tr.ref + ' storniert');
      },
      error: (e) => this.toast.error(e.error?.message || 'Stornierung fehlgeschlagen'),
    });
  }
}
