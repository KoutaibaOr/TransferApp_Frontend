import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferService, BranchService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { CsvService } from '../../core/services/csv.service';
import { Transfer, TransferStatus, Branch } from '../../core/models';

const STATUS_FLOW: Record<TransferStatus, TransferStatus | null> = {
  DRAFT: 'CREATED', CREATED: 'IN_PROGRESS', IN_PROGRESS: 'COMPLETED',
  COMPLETED: 'PAID_OUT', PAID_OUT: null, CANCELLED: null, BLOCKED: null,
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
        <button class="btn btn-primary" (click)="openNew()">+ {{ t().newTransfer }}</button>
      </div>
    </div>

    <!-- ── Direction Tabs ── -->
    <div class="direction-tabs">
      <button class="dir-tab" [class.active]="direction()==='all'" (click)="setDirection('all')">
        📋 {{ t().allTransfers }}
      </button>
      <button class="dir-tab outgoing" [class.active]="direction()==='outgoing'" (click)="setDirection('outgoing')">
        ↑ {{ t().outgoing }} 
      </button>
      <button class="dir-tab incoming" [class.active]="direction()==='incoming'" (click)="setDirection('incoming')">
        ↓ {{ t().incoming }} 
      </button>
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
        @for (s of statuses; track s) { <option [value]="s">{{ s }}</option> }
      </select>
      @if (auth.isAdmin()) {
        <select class="form-control" [(ngModel)]="filterBranch" (change)="load()">
          <option value="">{{ t().allBranches }}</option>
          @for (b of branchNames; track b) { <option [value]="b">{{ b }}</option> }
        </select>
      }
    </div>

    <div class="card" style="padding:0">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ref</th>
              <th>{{ t().sender }}</th>
              <th>{{ t().receiver }}</th>
              <th>{{ t().amount }}</th>
              <th>{{ t().fee }}</th>
              <th>{{ t().status }}</th>
              <th>{{ t().senderBranch }}</th>
              <th>{{ t().receiverBranch }}</th>
              <th>{{ t().employee }}</th>
              <th>{{ t().actions }}</th>
            </tr>
          </thead>
          <tbody>
            @for (tr of transfers(); track tr.id) {
              <tr [class.row-blocked]="tr.status==='BLOCKED'" [class.row-incoming]="tr.receiverBranch===currentBranch() && direction()==='incoming'">
                <td><code class="ref">{{ tr.ref }}</code></td>
                <td>{{ tr.senderName }}</td>
                <td>{{ tr.receiverName }}</td>
                <td class="fw-600">{{ tr.amount | number:'1.2-2' }} {{ tr.currency }}</td>
                <td class="text-muted">€ {{ tr.fee | number:'1.2-2' }}</td>
                <td>
                  <span class="badge" [class]="'badge-' + tr.status.toLowerCase()">{{ tr.status }}</span>
                  @if (tr.status === 'BLOCKED') {
                    <div style="font-size:.72rem;color:var(--danger);margin-top:.2rem">🔒 {{ tr.blockedReason }}</div>
                  }
                </td>
                <td class="text-muted" style="font-size:.82rem">
                  <span class="dir-arrow-out">↑</span> {{ tr.senderBranch || tr.branch }}
                </td>
                <td class="text-muted" style="font-size:.82rem">
                  <span class="dir-arrow-in">↓</span> {{ tr.receiverBranch || '—' }}
                </td>
                <td class="text-muted" style="font-size:.8rem">{{ tr.employee }}</td>
                <td>
                  <div class="actions">
                    <button class="btn btn-ghost btn-sm" (click)="select(tr)">{{ t().details }}</button>
                    @if (nextStatus(tr.status)) {
                      <button class="btn btn-success btn-sm" (click)="advance(tr)">→ {{ nextStatus(tr.status) }}</button>
                    }
                    @if (tr.status !== 'CANCELLED' && tr.status !== 'PAID_OUT' && tr.status !== 'BLOCKED') {
                      <button class="btn btn-warning btn-sm" (click)="openBlock(tr)">🔒</button>
                    }
                    @if (tr.status === 'BLOCKED' && auth.isAdminOrManager()) {
                      <button class="btn btn-success btn-sm" (click)="unblock(tr)">🔓 {{ t().unblock }}</button>
                    }
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="10"><div class="empty-state"><div class="empty-icon">💳</div><h3>{{ t().noTransfers }}</h3></div></td></tr>
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

    <!-- ── EXPORT MODAL ── -->
    @if (showExportModal()) {
      <div class="modal-backdrop" (click)="showExportModal.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">⬇ {{ t().exportOptions }}</span>
            <button class="btn btn-icon" (click)="showExportModal.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">{{ t().selectStatuses }}</label>
              <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.4rem">
                @for (s of statuses; track s) {
                  <label style="display:flex;align-items:center;gap:.35rem;font-size:.85rem;cursor:pointer">
                    <input type="checkbox" [checked]="exportOpts.statuses.includes(s)" (change)="toggleExportStatus(s)" />
                    <span class="badge" [class]="'badge-' + s.toLowerCase()">{{ s }}</span>
                  </label>
                }
              </div>
              <button class="btn btn-ghost btn-sm" style="margin-top:.5rem;font-size:.75rem" (click)="selectAllStatuses()">{{ t().all }}</button>
            </div>
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
            @if (auth.isAdmin()) {
              <div class="form-group">
                <label class="form-label">{{ t().branch }}</label>
                <select class="form-control" [(ngModel)]="exportOpts.branch">
                  <option value="">{{ t().allBranches }}</option>
                  @for (b of branchNames; track b) { <option [value]="b">{{ b }}</option> }
                </select>
              </div>
            }
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showExportModal.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="runFilteredExport()">⬇ {{ t().exportSelected }}</button>
          </div>
        </div>
      </div>
    }

    <!-- ── DETAILS MODAL ── -->
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
              <div class="detail-row"><span class="detail-label">{{ t().status }}</span>
                <span class="badge" [class]="'badge-' + selected()!.status.toLowerCase()">{{ selected()!.status }}</span>
              </div>
              <div class="detail-row"><span class="detail-label">{{ t().senderBranch }}</span><span>↑ {{ selected()!.senderBranch || selected()!.branch }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().receiverBranch }}</span><span>↓ {{ selected()!.receiverBranch || '—' }}</span></div>
              <div class="detail-row"><span class="detail-label">{{ t().employee }}</span><span>{{ selected()!.employee }}</span></div>
              @if (selected()!.blockedReason) {
                <div class="detail-row"><span class="detail-label">🔒 {{ t().blockReason }}</span><span style="color:var(--danger)">{{ selected()!.blockedReason }}</span></div>
              }
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

    <!-- ── BLOCK MODAL ── -->
    @if (blockTarget()) {
      <div class="modal-backdrop" (click)="blockTarget.set(null)">
        <div class="modal modal-sm" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">🔒 {{ t().blockTransfer }}</span>
            <button class="btn btn-icon" (click)="blockTarget.set(null)">✕</button>
          </div>
          <div class="modal-body">
            <p style="font-size:.9rem;color:var(--muted);margin-bottom:1rem">{{ blockTarget()!.ref }} — {{ blockTarget()!.senderName }} → {{ blockTarget()!.receiverName }}</p>
            <div class="form-group">
              <label class="form-label">{{ t().blockReason }}</label>
              <input class="form-control" [(ngModel)]="blockReason" [placeholder]="t().blockReasonPlaceholder" />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="blockTarget.set(null)">{{ t().cancel }}</button>
            <button class="btn btn-danger" (click)="confirmBlock()">🔒 {{ t().blockConfirm }}</button>
          </div>
        </div>
      </div>
    }

    <!-- ── NEW TRANSFER MODAL ── -->
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
              <div class="form-group"><label class="form-label">{{ t().receiverCountry }}</label><input class="form-control" [(ngModel)]="newTr.receiverCountry" placeholder="Syria" /></div>
              <div class="form-group"><label class="form-label">{{ t().amount }}</label><input class="form-control" type="number" [(ngModel)]="newTr.amount" /></div>
              <div class="form-group"><label class="form-label">{{ t().currency }}</label>
                <select class="form-control" [(ngModel)]="newTr.currency">
                  <option>EUR</option><option>USD</option><option>TRY</option><option>SYP</option>
                </select>
              </div>
              <div class="form-group" style="grid-column:1/-1">
                <label class="form-label">{{ t().receiverBranch }} <span style="color:var(--muted);font-weight:400">({{ t().receiverBranchHint }})</span></label>
                <select class="form-control" [(ngModel)]="newTr.receiverBranch">
                  <option value="">— {{ t().selectBranch }} —</option>
                  @for (b of allBranches(); track b.id) {
                    <option [value]="b.name">{{ b.name }} — {{ b.city }}</option>
                  }
                </select>
              </div>
              <div class="form-group" style="grid-column:1/-1">
                <label class="form-label">{{ t().note }}</label>
                <input class="form-control" [(ngModel)]="newTr.note" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNew.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="requestConfirm()">{{ t().reviewTransfer }}</button>
          </div>
        </div>
      </div>
    }

    <!-- ── CONFIRM POPUP ── -->
    @if (showConfirm()) {
      <div class="modal-backdrop" (click)="showConfirm.set(false)">
        <div class="modal modal-confirm" (click)="$event.stopPropagation()">
          <div class="modal-header confirm-header">
            <span class="modal-title">✅ {{ t().confirmTransfer }}</span>
            <button class="btn btn-icon" (click)="showConfirm.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="confirm-direction">
              <div class="confirm-branch sender-branch">
                <div class="branch-label">{{ t().senderBranch }}</div>
                <div class="branch-name">↑ {{ currentBranch() || t().thisBranch }}</div>
              </div>
              <div class="confirm-arrow">→</div>
              <div class="confirm-branch receiver-branch">
                <div class="branch-label">{{ t().receiverBranch }}</div>
                <div class="branch-name">↓ {{ newTr.receiverBranch || '—' }}</div>
              </div>
            </div>
            <div class="confirm-details">
              <div class="confirm-row"><span>{{ t().sender }}</span><strong>{{ newTr.senderName }}</strong></div>
              <div class="confirm-row"><span>{{ t().receiver }}</span><strong>{{ newTr.receiverName }}</strong></div>
              <div class="confirm-row"><span>{{ t().receiverCountry }}</span><strong>{{ newTr.receiverCountry }}</strong></div>
              <div class="confirm-row amount-row">
                <span>{{ t().amount }}</span>
                <strong class="confirm-amount">{{ newTr.amount | number:'1.2-2' }} {{ newTr.currency }}</strong>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showConfirm.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="createTransfer()">✓ {{ t().confirmAndSend }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class TransfersComponent implements OnInit {
  transfers       = signal<Transfer[]>([]);
  selected        = signal<Transfer | null>(null);
  showNew         = signal(false);
  showConfirm     = signal(false);
  showExportModal = signal(false);
  importPreview   = signal<Record<string, string>[]>([]);
  blockTarget     = signal<Transfer | null>(null);
  blockReason     = '';
  total           = signal(0);
  page            = signal(1);
  limit           = 20;
  search          = '';
  filterStatus    = '';
  filterBranch    = '';
  direction       = signal<'all' | 'outgoing' | 'incoming'>('all');
  totalPages      = computed(() => Math.max(1, Math.ceil(this.total() / this.limit)));
  statuses        = ['DRAFT','CREATED','IN_PROGRESS','COMPLETED','PAID_OUT','CANCELLED','BLOCKED'];
  branchNames: string[] = [];
  allBranches     = signal<Branch[]>([]);
  newTr: any      = { senderName:'', senderPhone:'', receiverName:'', receiverCountry:'', receiverBranch:'', amount:0, currency:'EUR', note:'' };
  exportOpts      = { statuses: ['CREATED','IN_PROGRESS','COMPLETED','PAID_OUT','CANCELLED'], dateFrom: '', dateTo: '', branch: '' };

  currentBranch = computed(() => this.auth.user()?.branch ?? '');

  constructor(
    private svc:        TransferService,
    private branchSvc:  BranchService,
    public  auth:       AuthService,
    private toast:      ToastService,
    public  i18n:       I18nService,
    private csv:        CsvService,
  ) {}

  t = this.i18n.t;

  ngOnInit() {
    this.branchSvc.getAll().subscribe(bs => {
      this.allBranches.set(bs);
      this.branchNames = bs.map(b => b.name);
    });
    if (this.auth.isManager() && this.auth.user()?.branch) {
      this.filterBranch = this.auth.user()!.branch ?? '';
      this.exportOpts.branch = this.filterBranch;
    }
    this.load();
  }

  setDirection(d: 'all' | 'outgoing' | 'incoming') {
    this.direction.set(d);
    this.page.set(1);
    this.load();
  }

  load() {
    const p: any = { page: this.page(), limit: this.limit };
    if (this.search)       p['search']  = this.search;
    if (this.filterStatus) p['statuses'] = this.filterStatus;
    // Non-admin users are ALWAYS restricted to their own branch
    const ownBranch = !this.auth.isAdmin() ? (this.auth.user()?.branch ?? '') : '';
    const effectiveBranch = ownBranch || this.filterBranch;
    if (this.direction() === 'outgoing' && effectiveBranch) {
      p['direction'] = 'outgoing'; p['branch'] = effectiveBranch;
    } else if (this.direction() === 'incoming' && effectiveBranch) {
      p['direction'] = 'incoming'; p['branch'] = effectiveBranch;
    } else if (effectiveBranch) {
      p['branch'] = effectiveBranch;
    }
    this.svc.getAll(p).subscribe(r => {
      this.transfers.set(r.data);
      this.total.set(r.total);
    });
  }

  setPage(p: number) { this.page.set(p); this.load(); }
  select(t: Transfer) { this.selected.set(t); }
  openNew() {
    this.newTr = { senderName:'', senderPhone:'', receiverName:'', receiverCountry:'', receiverBranch:'', amount:0, currency:'EUR', note:'' };
    this.showNew.set(true);
  }
  nextStatus(s: TransferStatus): TransferStatus | null { return STATUS_FLOW[s]; }

  requestConfirm() {
    if (!this.newTr.senderName || !this.newTr.receiverName || !this.newTr.amount) {
      this.toast.error(this.i18n.t().requiredField); return;
    }
    this.showNew.set(false);
    this.showConfirm.set(true);
  }

  openBlock(tr: Transfer) {
    this.blockTarget.set(tr);
    this.blockReason = '';
  }

  confirmBlock() {
    const tr = this.blockTarget();
    if (!tr) return;
    this.svc.block(tr.id, this.blockReason).subscribe({
      next: u => {
        this.transfers.update(l => l.map(t => t.id === u.id ? u : t));
        this.toast.success('🔒 ' + this.i18n.t().transferBlocked);
        this.blockTarget.set(null);
      },
      error: () => this.toast.error('Fehler'),
    });
  }

  unblock(tr: Transfer) {
    this.svc.unblock(tr.id).subscribe({
      next: u => {
        this.transfers.update(l => l.map(t => t.id === u.id ? u : t));
        this.toast.success('🔓 ' + this.i18n.t().transferUnblocked);
      },
      error: () => this.toast.error('Fehler'),
    });
  }

  exportCsv() {
    const EXPORT_HEADERS = [
      { key: 'ref', label: 'Reference' }, { key: 'senderName', label: 'Sender Name' },
      { key: 'senderBranch', label: 'Sender Branch' }, { key: 'receiverName', label: 'Receiver Name' },
      { key: 'receiverCountry', label: 'Receiver Country' }, { key: 'receiverBranch', label: 'Receiver Branch' },
      { key: 'amount', label: 'Amount' }, { key: 'currency', label: 'Currency' },
      { key: 'fee', label: 'Fee EUR' }, { key: 'status', label: 'Status' }, { key: 'createdAt', label: 'Created At' },
    ] as const;
    const p: any = { limit: 9999 };
    this.svc.getAll(p).subscribe(r => {
      this.csv.export(r.data, EXPORT_HEADERS as any, 'transfers_all');
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
    });
  }

  runFilteredExport() {
    const EXPORT_HEADERS = [
      { key: 'ref', label: 'Reference' }, { key: 'senderName', label: 'Sender Name' },
      { key: 'senderBranch', label: 'Sender Branch' }, { key: 'receiverName', label: 'Receiver Name' },
      { key: 'receiverCountry', label: 'Receiver Country' }, { key: 'receiverBranch', label: 'Receiver Branch' },
      { key: 'amount', label: 'Amount' }, { key: 'currency', label: 'Currency' },
      { key: 'fee', label: 'Fee EUR' }, { key: 'status', label: 'Status' }, { key: 'createdAt', label: 'Created At' },
    ] as const;
    this.svc.exportFiltered({
      statuses: this.exportOpts.statuses, dateFrom: this.exportOpts.dateFrom || undefined,
      dateTo: this.exportOpts.dateTo || undefined, branch: this.exportOpts.branch || undefined, limit: 9999,
    }).subscribe(r => {
      const date = new Date().toISOString().slice(0,10);
      this.csv.export(r.data, EXPORT_HEADERS as any, `transfers_filtered_${date}`);
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
      this.showExportModal.set(false);
    });
  }

  toggleExportStatus(s: string) {
    const idx = this.exportOpts.statuses.indexOf(s);
    if (idx >= 0) this.exportOpts.statuses = this.exportOpts.statuses.filter(x => x !== s);
    else          this.exportOpts.statuses = [...this.exportOpts.statuses, s];
  }

  selectAllStatuses() { this.exportOpts.statuses = [...this.statuses]; }

  downloadTemplate() {
    const IMPORT_TEMPLATE = [
      { key: 'Sender Name', label: 'Sender Name' }, { key: 'Sender Phone', label: 'Sender Phone' },
      { key: 'Receiver Name', label: 'Receiver Name' }, { key: 'Receiver Phone', label: 'Receiver Phone' },
      { key: 'Receiver Country', label: 'Receiver Country' }, { key: 'Amount', label: 'Amount' }, { key: 'Currency', label: 'Currency' },
    ];
    this.csv.downloadTemplate(IMPORT_TEMPLATE, 'transfers_import');
    this.toast.info(this.i18n.t().templateDownloaded);
  }

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
    let ok = 0, fail = 0, idx = 0;
    const next = () => {
      if (idx >= rows.length) {
        this.toast.success(`Import: ${ok} ✓  ${fail} ✗`);
        this.importPreview.set([]);
        this.load();
        return;
      }
      const r = rows[idx++];
      this.svc.create({
        senderName: r['Sender Name'] || '', senderPhone: r['Sender Phone'] || '',
        receiverName: r['Receiver Name'] || '', receiverPhone: r['Receiver Phone'] || '',
        receiverCountry: r['Receiver Country'] || '',
        amount: parseFloat(r['Amount'] || '0'), currency: r['Currency'] || 'EUR',
      }).subscribe({ next: () => { ok++; next(); }, error: () => { fail++; next(); } });
    };
    next();
  }

  advance(tr: Transfer) {
    const next = this.nextStatus(tr.status);
    if (!next) return;
    this.svc.updateStatus(tr.id, next).subscribe({
      next: u => { this.transfers.update(l => l.map(t => t.id === u.id ? u : t)); this.toast.success(`Status → ${next}`); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  createTransfer() {
    const branch = this.currentBranch();
    const dto = { ...this.newTr, senderBranch: branch, branch: branch };
    this.svc.create(dto).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().transferCreated);
        this.showConfirm.set(false);
        this.load();
      },
      error: () => this.toast.error(this.i18n.t().creationError),
    });
  }
}
