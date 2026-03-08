import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { CsvService } from '../../core/services/csv.service';
import { Transfer, TransferStatus } from '../../core/models';

const STATUS_FLOW: Record<TransferStatus, TransferStatus | null> = {
  DRAFT: 'CREATED', CREATED: 'IN_PROGRESS', IN_PROGRESS: 'COMPLETED',
  COMPLETED: 'PAID_OUT', PAID_OUT: null, CANCELLED: null,
};

const EXPORT_HEADERS = [
  { key: 'ref',             label: 'Reference'        },
  { key: 'senderName',      label: 'Sender Name'      },
  { key: 'senderPhone',     label: 'Sender Phone'     },
  { key: 'senderIdNumber',  label: 'Sender ID'        },
  { key: 'receiverName',    label: 'Receiver Name'    },
  { key: 'receiverPhone',   label: 'Receiver Phone'   },
  { key: 'receiverCountry', label: 'Receiver Country' },
  { key: 'amount',          label: 'Amount'           },
  { key: 'currency',        label: 'Currency'         },
  { key: 'fee',             label: 'Fee EUR'          },
  { key: 'profit',          label: 'Profit EUR'       },
  { key: 'status',          label: 'Status'           },
  { key: 'branch',          label: 'Branch'           },
  { key: 'employee',        label: 'Created By Employee' },
  { key: 'createdAt',       label: 'Created At'       },
  { key: 'updatedAt',       label: 'Last Updated'     },
] as const;

const IMPORT_TEMPLATE = [
  { key: 'Sender Name',      label: 'Sender Name'      },
  { key: 'Sender Phone',     label: 'Sender Phone'     },
  { key: 'Receiver Name',    label: 'Receiver Name'    },
  { key: 'Receiver Phone',   label: 'Receiver Phone'   },
  { key: 'Receiver Country', label: 'Receiver Country' },
  { key: 'Amount',           label: 'Amount'           },
  { key: 'Currency',         label: 'Currency'         },
];

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'transfers.component.css',
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().transfers }}</h1>
        <p class="page-subtitle">{{ total() }} {{ t().totalTransfers }}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-ghost btn-sm" (click)="showExportModal.set(true)">⬇ {{ t().exportWithFilters }}</button>
        <button class="btn btn-ghost btn-sm" (click)="exportCsv()">⬇ {{ t().exportAll }}</button>
        <button class="btn btn-ghost btn-sm" (click)="csvInput.click()">⬆ CSV Import</button>
        <input #csvInput type="file" accept=".csv" style="display:none" (change)="importCsv($event)" />
        <button class="btn btn-ghost btn-sm" (click)="downloadTemplate()">📋 {{ t().template }}</button>
        <button class="btn btn-primary" (click)="openNew()">＋ {{ t().newTransfer }}</button>
      </div>
    </div>

    @if (importPreview().length) {
      <div class="card import-preview">
        <div class="card-header">
          <span class="card-title">📥 {{ t().importPreview }} — {{ importPreview().length }} {{ t().rows }}</span>
          <div style="display:flex;gap:.5rem">
            <button class="btn btn-ghost btn-sm" (click)="importPreview.set([])">{{ t().cancel }}</button>
            <button class="btn btn-success btn-sm" (click)="confirmImport()">✓ {{ t().confirm }}</button>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>#</th><th>{{ t().sender }}</th><th>{{ t().receiver }}</th><th>{{ t().amount }}</th><th>{{ t().currency }}</th><th>{{ t().receiverCountry }}</th></tr></thead>
            <tbody>
              @for (row of importPreview().slice(0,8); track $index) {
                <tr>
                  <td class="text-muted">{{ $index + 1 }}</td>
                  <td>{{ row['Sender Name'] }}</td>
                  <td>{{ row['Receiver Name'] }}</td>
                  <td class="fw-600">{{ row['Amount'] }}</td>
                  <td>{{ row['Currency'] }}</td>
                  <td>{{ row['Receiver Country'] }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        @if (importPreview().length > 8) {
          <p class="text-muted" style="padding:.75rem 1rem;font-size:.8rem">… {{ importPreview().length - 8 }} {{ t().moreRows }}</p>
        }
      </div>
    }

    <!-- Filters -->
    <div class="filters-bar">
      <input class="form-control" type="search" [(ngModel)]="search" [placeholder]="t().search" (input)="load()" />
      <select class="form-control" [(ngModel)]="filterStatus" (change)="load()">
        <option value="">{{ t().allStatuses }}</option>
        <option *ngFor="let s of statuses" [value]="s">{{ s }}</option>
      </select>
      @if (auth.isAdminOrManager()) {
        <select class="form-control" [(ngModel)]="filterBranch" (change)="load()">
          <option value="">{{ t().allBranches }}</option>
          <option *ngFor="let b of branches" [value]="b">{{ b }}</option>
        </select>
      }
    </div>

    <div class="card" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead>
              <tr><th>Ref</th><th>{{ t().sender }}</th><th>{{ t().receiver }}</th><th>{{ t().amount }}</th><th>{{ t().fee }}</th><th>{{ t().status }}</th><th>{{ t().branch }}</th><th>{{ t().employee }}</th><th>{{ t().actions }}</th></tr>
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
                  <td class="text-muted" style="font-size:.8rem">{{ tr.employee }}</td>
                  <td>
                    <div class="actions">
                      <button class="btn btn-ghost btn-sm" (click)="select(tr)">Details</button>
                      @if (nextStatus(tr.status)) {
                        <button class="btn btn-success btn-sm" (click)="advance(tr)">→ {{ nextStatus(tr.status) }}</button>
                      }
                    </div>
                  </td>
                </tr>
              } @empty {
                <tr><td colspan="9"><div class="empty-state"><div class="empty-icon">💳</div><h3>{{ t().noTransfers }}</h3></div></td></tr>
              }
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <button class="page-btn" [disabled]="page()===1" (click)="setPage(page()-1)">‹</button>
        <span class="text-muted" style="font-size:.85rem">{{ t().page }} {{ page() }} {{ t().of }} {{ totalPages() }}</span>
        <button class="page-btn" [disabled]="page()>=totalPages()" (click)="setPage(page()+1)">›</button>
      </div>
    </div>

    <!-- ── SMART EXPORT MODAL ──────────────────────────────── -->
    @if (showExportModal()) {
      <div class="modal-backdrop" (click)="showExportModal.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">⬇ {{ t().exportOptions }}</span>
            <button class="btn btn-icon" (click)="showExportModal.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <!-- Status Filter -->
            <div class="form-group">
              <label class="form-label">{{ t().selectStatuses }}</label>
              <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.4rem">
                @for (s of statuses; track s) {
                  <label style="display:flex;align-items:center;gap:.35rem;font-size:.85rem;cursor:pointer">
                    <input type="checkbox" [checked]="exportOpts.statuses.includes(s)"
                           (change)="toggleExportStatus(s)" />
                    <span class="badge" [class]="'badge-' + s.toLowerCase()">{{ s }}</span>
                  </label>
                }
              </div>
              <button class="btn btn-ghost btn-sm" style="margin-top:.5rem;font-size:.75rem"
                (click)="selectAllStatuses()">{{ t().all }}</button>
            </div>
            <!-- Date Range -->
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">{{ t().dateFrom }}</label>
                <input class="form-control" type="date" [(ngModel)]="exportOpts.dateFrom" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().dateTo }}</label>
                <input class="form-control" type="date" [(ngModel)]="exportOpts.dateTo" />
              </div>
            </div>
            <!-- Branch (admin/manager only) -->
            @if (auth.isAdminOrManager()) {
              <div class="form-group">
                <label class="form-label">{{ t().branch }}</label>
                <select class="form-control" [(ngModel)]="exportOpts.branch">
                  <option value="">{{ t().allBranches }}</option>
                  @for (b of branches; track b) { <option [value]="b">{{ b }}</option> }
                </select>
              </div>
            }
            <p style="font-size:.78rem;color:var(--muted);margin-top:.35rem">
              {{ t().exportFilters }}: {{ exportOpts.statuses.length }} {{ t().selectStatuses }}
              @if (exportOpts.dateFrom) { · {{ exportOpts.dateFrom }} }
              @if (exportOpts.dateTo)   { → {{ exportOpts.dateTo }}     }
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showExportModal.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="runFilteredExport()">⬇ {{ t().exportSelected }}</button>
          </div>
        </div>
      </div>
    }

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
              <div class="detail-row"><span class="detail-label">{{ t().fee }}</span><span>€ {{ selected()!.fee | number:'1.2-2' }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().profit }}</span><span class="text-ok">€ {{ selected()!.profit | number:'1.2-2' }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().status }}</span><span class="badge" [class]="'badge-' + selected()!.status.toLowerCase()">{{ selected()!.status }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().branch }}</span><span>{{ selected()!.branch }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().employee }}</span><span>{{ selected()!.employee }}</span></div>
              @if (selected()!.note) {
                <div class="detail-row"><span class="detail-label">{{ t().note }}</span><span>{{ selected()!.note }}</span></div>
              }
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="selected.set(null)">{{ t().close }}</button>
            @if (nextStatus(selected()!.status)) {
              <button class="btn btn-success" (click)="advance(selected()!); selected.set(null)">Status → {{ nextStatus(selected()!.status) }}</button>
            }
          </div>
        </div>
      </div>
    }

    @if (showNew()) {
      <div class="modal-backdrop" (click)="showNew.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ t().newTransfer }}</span>
            <button class="btn btn-icon" (click)="showNew.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group"><label class="form-label">{{ t().senderName }}</label><input class="form-control" [(ngModel)]="newTr.senderName" /></div>
              <div class="form-group"><label class="form-label">{{ t().senderPhone }}</label><input class="form-control" [(ngModel)]="newTr.senderPhone" /></div>
              <div class="form-group"><label class="form-label">{{ t().receiverName }}</label><input class="form-control" [(ngModel)]="newTr.receiverName" /></div>
              <div class="form-group"><label class="form-label">{{ t().receiverCountry }}</label><input class="form-control" [(ngModel)]="newTr.receiverCountry" placeholder="Morocco" /></div>
              <div class="form-group"><label class="form-label">{{ t().amount }}</label><input class="form-control" type="number" [(ngModel)]="newTr.amount" /></div>
              <div class="form-group"><label class="form-label">{{ t().currency }}</label>
                <select class="form-control" [(ngModel)]="newTr.currency"><option>MAD</option><option>TRY</option><option>USD</option><option>EUR</option></select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNew.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="createTransfer()">{{ t().createTransfer }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class TransfersComponent implements OnInit {
  transfers     = signal<Transfer[]>([]);
  selected      = signal<Transfer | null>(null);
  showNew       = signal(false);
  showExportModal = signal(false);
  importPreview = signal<Record<string, string>[]>([]);
  total         = signal(0);
  page          = signal(1);
  limit         = 20;
  search        = '';
  filterStatus  = '';
  filterBranch  = '';
  totalPages    = computed(() => Math.max(1, Math.ceil(this.total() / this.limit)));
  statuses      = ['CREATED','IN_PROGRESS','COMPLETED','PAID_OUT','CANCELLED'];
  branches: string[] = [];
  newTr: any    = { senderName:'', senderPhone:'', receiverName:'', receiverCountry:'', amount:0, currency:'MAD' };
  exportOpts    = { statuses: ['CREATED','IN_PROGRESS','COMPLETED','PAID_OUT','CANCELLED'], dateFrom: '', dateTo: '', branch: '' };

  constructor(
    private svc:   TransferService,
    public  auth:  AuthService,
    private toast: ToastService,
    public  i18n:  I18nService,
    private csv:   CsvService,
  ) {}

  t = this.i18n.t;
  ngOnInit() {
    // Branch managers see only their own branch automatically
    if (this.auth.isManager() && this.auth.user()?.branch) {
      this.filterBranch = this.auth.user()!.branch ?? '';
      this.exportOpts.branch = this.filterBranch;
    }
    this.load();
  }

  load() {
    const p: any = { page: this.page(), limit: this.limit };
    if (this.search)       p['search'] = this.search;
    if (this.filterStatus) p['status'] = this.filterStatus;
    if (this.filterBranch) p['branch'] = this.filterBranch;
    this.svc.getAll(p).subscribe(r => {
      this.transfers.set(r.data);
      this.total.set(r.total);
      if (!this.branches.length) this.branches = [...new Set(r.data.map((t: Transfer) => t.branch))];
    });
  }

  setPage(p: number) { this.page.set(p); this.load(); }
  select(t: Transfer) { this.selected.set(t); }
  openNew() { this.showNew.set(true); }
  nextStatus(s: TransferStatus): TransferStatus | null { return STATUS_FLOW[s]; }

  // ── CSV EXPORT ───────────────────────────────────────────────
  exportCsv() {
    const p: any = { limit: 9999 };
    if (this.auth.isManager() && this.auth.user()?.branch) p['branch'] = this.auth.user()!.branch;
    this.svc.getAll(p).subscribe(r => {
      this.csv.export(r.data, EXPORT_HEADERS as any, 'transfers_all');
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
    });
  }

  // ── FILTERED EXPORT (Smart Export Modal) ────────────────────
  runFilteredExport() {
    this.svc.exportFiltered({
      statuses:  this.exportOpts.statuses,
      dateFrom:  this.exportOpts.dateFrom  || undefined,
      dateTo:    this.exportOpts.dateTo    || undefined,
      branch:    this.exportOpts.branch    || undefined,
      limit:     9999,
    }).subscribe(r => {
      const date = new Date().toISOString().slice(0,10);
      const statusTag = this.exportOpts.statuses.length < 5
        ? this.exportOpts.statuses.join('_').toLowerCase()
        : 'all';
      this.csv.export(r.data, EXPORT_HEADERS as any, `transfers_${statusTag}_${date}`);
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
      this.showExportModal.set(false);
    });
  }

  toggleExportStatus(s: string) {
    const idx = this.exportOpts.statuses.indexOf(s);
    if (idx >= 0) this.exportOpts.statuses = this.exportOpts.statuses.filter(x => x !== s);
    else          this.exportOpts.statuses = [...this.exportOpts.statuses, s];
  }

  selectAllStatuses() {
    this.exportOpts.statuses = [...this.statuses];
  }

  // ── VORLAGE ──────────────────────────────────────────────────
  downloadTemplate() {
    this.csv.downloadTemplate(IMPORT_TEMPLATE, 'transfers_import');
    this.toast.info(this.i18n.t().templateDownloaded);
  }

  // ── CSV IMPORT ───────────────────────────────────────────────
  async importCsv(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (event.target as HTMLInputElement).value = '';
    try {
      const rows = await this.csv.import(file);
      if (!rows.length) { this.toast.error(this.i18n.t().csvEmpty); return; }
      const required = ['Sender Name', 'Receiver Name', 'Amount', 'Currency'];
      const missing  = required.filter(f => !(f in rows[0]));
      if (missing.length) { this.toast.error(`${this.i18n.t().missingColumns} ${missing.join(', ')}`); return; }
      this.importPreview.set(rows);
      this.toast.info(`${rows.length} ${this.i18n.t().rowsLoaded}`);
    } catch (e: any) {
      this.toast.error(e.message ?? this.i18n.t().importFailed);
    }
  }

  confirmImport() {
    const rows = this.importPreview();
    let ok = 0, fail = 0;
    let idx = 0;
    const next = () => {
      if (idx >= rows.length) {
        this.toast.success(`Import: ${ok} ✓  ${fail} ✗`);
        this.importPreview.set([]);
        this.load();
        return;
      }
      const r = rows[idx++];
      this.svc.create({
        senderName:      r['Sender Name']      || '',
        senderPhone:     r['Sender Phone']     || '',
        receiverName:    r['Receiver Name']    || '',
        receiverPhone:   r['Receiver Phone']   || '',
        receiverCountry: r['Receiver Country'] || '',
        amount:          parseFloat(r['Amount'] || '0'),
        currency:        r['Currency']         || 'EUR',
      }).subscribe({ next: () => { ok++;   next(); }, error: () => { fail++; next(); } });
    };
    next();
  }

  advance(tr: Transfer) {
    const next = this.nextStatus(tr.status);
    if (!next) return;
    this.svc.updateStatus(tr.id, next).subscribe({
      next: u => { this.transfers.update(l => l.map(t => t.id === u.id ? u : t)); this.toast.success(`Status → ${next}`); },
      error: () => this.toast.error('Fehler beim Status-Update'),
    });
  }

  createTransfer() {
    this.svc.create(this.newTr).subscribe({
      next: () => { this.toast.success(this.i18n.t().transferCreated); this.showNew.set(false); this.load(); },
      error: () => this.toast.error(this.i18n.t().creationError),
    });
  }
}
