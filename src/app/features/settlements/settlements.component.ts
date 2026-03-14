import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettlementsService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { InterBranchBalance, InterBranchSettlement } from '../../core/models';

@Component({
  selector: 'app-settlements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().settlements }}</h1>
        <p class="page-subtitle">{{ t().settlementsSubtitle }}</p>
      </div>
      <button class="btn btn-ghost btn-sm" (click)="load()">🔄 {{ t().refresh }}</button>
    </div>

    <!-- ── My Summary KPI ── -->
    <div class="kpi-row">
      <div class="settle-kpi" [class.kpi-plus]="myNet() >= 0" [class.kpi-minus]="myNet() < 0">
        <div class="kpi-icon-lg">{{ myNet() >= 0 ? '📈' : '📉' }}</div>
        <div>
          <div class="kpi-label">{{ t().myNetBalance }}</div>
          <div class="kpi-big" [class.text-ok]="myNet()>=0" [class.text-danger]="myNet()<0">
            {{ myNet() >= 0 ? '+' : '' }}{{ myNet() | number:'1.2-2' }} EUR
          </div>
          <div class="kpi-sub">{{ myNet() >= 0 ? t().branchHasClaim : t().branchOwes }}</div>
        </div>
      </div>

      <div class="settle-kpi">
        <div class="kpi-icon-lg">🏦</div>
        <div>
          <div class="kpi-label">{{ t().openBalances }}</div>
          <div class="kpi-big">{{ balances().length }}</div>
          <div class="kpi-sub">{{ t().activeBalancePairs }}</div>
        </div>
      </div>

      <div class="settle-kpi">
        <div class="kpi-icon-lg">✅</div>
        <div>
          <div class="kpi-label">{{ t().settledTotal }}</div>
          <div class="kpi-big">{{ settlements().length }}</div>
          <div class="kpi-sub">{{ t().settledTransactions }}</div>
        </div>
      </div>
    </div>

    <!-- ── Balances Table ── -->
    <div class="card" style="padding:0;margin-bottom:1.5rem">
      <div class="card-header">
        <span class="card-title">⚖️ {{ t().interBranchBalances }}</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{{ t().fromBranch }}</th>
              <th>{{ t().toBranch }}</th>
              <th>{{ t().balance }}</th>
              <th>{{ t().currency }}</th>
              <th>{{ t().lastUpdated }}</th>
              <th>{{ t().actions }}</th>
            </tr>
          </thead>
          <tbody>
            @for (bal of balances(); track bal.id) {
              <tr>
                <td>
                  <span class="branch-tag from-tag">↑ {{ bal.fromBranch }}</span>
                </td>
                <td>
                  <span class="branch-tag to-tag">↓ {{ bal.toBranch }}</span>
                </td>
                <td>
                  <span class="balance-amount" [class.amount-positive]="bal.balance > 0">
                    {{ bal.balance | number:'1.2-2' }}
                  </span>
                </td>
                <td><code>{{ bal.currency }}</code></td>
                <td class="text-muted" style="font-size:.82rem">{{ bal.lastUpdated | date:'dd.MM.yyyy HH:mm' }}</td>
                <td>
                  <button class="btn btn-primary btn-sm" (click)="openSettle(bal)">
                    💳 {{ t().settle }}
                  </button>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="6">
                <div class="empty-state"><div class="empty-icon">⚖️</div><h3>{{ t().noBalances }}</h3></div>
              </td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- ── Settlement History ── -->
    <div class="card" style="padding:0">
      <div class="card-header">
        <span class="card-title">📋 {{ t().settlementHistory }}</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{{ t().date }}</th>
              <th>{{ t().fromBranch }}</th>
              <th>{{ t().toBranch }}</th>
              <th>{{ t().amount }}</th>
              <th>{{ t().currency }}</th>
              <th>{{ t().settledBy }}</th>
              <th>{{ t().note }}</th>
            </tr>
          </thead>
          <tbody>
            @for (s of settlements(); track s.id) {
              <tr>
                <td class="text-muted" style="font-size:.82rem">{{ s.createdAt | date:'dd.MM.yyyy HH:mm' }}</td>
                <td><span class="branch-tag from-tag">↑ {{ s.fromBranch }}</span></td>
                <td><span class="branch-tag to-tag">↓ {{ s.toBranch }}</span></td>
                <td class="fw-600">{{ s.amount | number:'1.2-2' }}</td>
                <td><code>{{ s.currency }}</code></td>
                <td class="text-muted">{{ s.settledBy }}</td>
                <td class="text-muted" style="font-size:.82rem">{{ s.note || '—' }}</td>
              </tr>
            } @empty {
              <tr><td colspan="7">
                <div class="empty-state"><div class="empty-icon">📋</div><h3>{{ t().noSettlements }}</h3></div>
              </td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- ── SETTLE MODAL ── -->
    @if (settleTarget()) {
      <div class="modal-backdrop" (click)="settleTarget.set(null)">
        <div class="modal modal-settle" (click)="$event.stopPropagation()">
          <div class="modal-header settle-header">
            <span class="modal-title">💳 {{ t().settleBalance }}</span>
            <button class="btn btn-icon" (click)="settleTarget.set(null)">✕</button>
          </div>
          <div class="modal-body">
            <div class="settle-direction">
              <div class="settle-branch">
                <div class="branch-label">{{ t().fromBranch }}</div>
                <div class="branch-name">{{ settleTarget()!.fromBranch }}</div>
              </div>
              <div class="settle-arrow">→</div>
              <div class="settle-branch settle-branch-to">
                <div class="branch-label">{{ t().toBranch }}</div>
                <div class="branch-name">{{ settleTarget()!.toBranch }}</div>
              </div>
            </div>

            <div class="open-balance-info">
              <span class="balance-label">{{ t().openBalance }}:</span>
              <span class="balance-value">{{ settleTarget()!.balance | number:'1.2-2' }} {{ settleTarget()!.currency }}</span>
            </div>

            <div class="form-group">
              <label class="form-label">{{ t().amountToSettle }}</label>
              <input class="form-control" type="number" [(ngModel)]="settleAmount"
                     [max]="settleTarget()!.balance" [placeholder]="settleTarget()!.balance.toString()" />
            </div>

            <div class="form-group">
              <label class="form-label">{{ t().note }}</label>
              <input class="form-control" [(ngModel)]="settleNote" [placeholder]="t().settlementNotePlaceholder" />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="settleTarget.set(null)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="confirmSettle()" [disabled]="!settleAmount || settleAmount <= 0">
              ✓ {{ t().settleConfirm }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .page-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:1.75rem; flex-wrap:wrap; gap:1rem; }
    .page-title { font-size:1.6rem; }
    .page-subtitle { font-size:.875rem; color:var(--muted); margin-top:.1rem; }

    .kpi-row { display:flex; gap:1rem; margin-bottom:1.5rem; flex-wrap:wrap; }
    .settle-kpi {
      flex:1; min-width:200px; display:flex; align-items:center; gap:1rem;
      background:var(--card); border:1.5px solid var(--border); border-radius:var(--radius);
      padding:1.25rem; box-shadow:var(--shadow-sm);
    }
    .kpi-plus { border-color:#059669; background:rgba(5,150,105,.04); }
    .kpi-minus { border-color:#e11d48; background:rgba(225,29,72,.04); }
    .kpi-icon-lg { font-size:2rem; }
    .kpi-label { font-size:.75rem; font-weight:600; text-transform:uppercase; color:var(--muted); letter-spacing:.04em; }
    .kpi-big { font-size:1.5rem; font-weight:800; color:var(--ink); }
    .kpi-sub { font-size:.78rem; color:var(--muted); margin-top:.15rem; }
    .text-ok { color:#059669 !important; }
    .text-danger { color:#e11d48 !important; }

    .branch-tag { font-size:.8rem; font-weight:600; padding:.2rem .5rem; border-radius:4px; }
    .from-tag { background:rgba(225,29,72,.1); color:#e11d48; }
    .to-tag { background:rgba(5,150,105,.1); color:#059669; }

    .balance-amount { font-weight:700; font-size:.95rem; }
    .amount-positive { color:#059669; }

    .fw-600 { font-weight:600; }
    .text-muted { color:var(--muted); }

    .card { background:var(--card); border:1.5px solid var(--border); border-radius:var(--radius); box-shadow:var(--shadow-sm); }
    .card-header { display:flex; align-items:center; justify-content:space-between; padding:.9rem 1.25rem; border-bottom:1.5px solid var(--border); }
    .card-title { font-weight:700; font-size:.95rem; }

    .table-wrap { overflow-x:auto; }
    table { width:100%; border-collapse:collapse; font-size:.875rem; }
    thead th { background:var(--ink); color:#fff; padding:.75rem 1rem; text-align:left; font-size:.75rem; font-weight:600; text-transform:uppercase; letter-spacing:.06em; white-space:nowrap; }
    tbody tr { border-bottom:1px solid var(--border); transition:background var(--transition); }
    tbody tr:last-child { border-bottom:none; }
    tbody tr:hover { background:#f0f4ff; }
    tbody td { padding:.75rem 1rem; color:var(--ink2); vertical-align:middle; }
    .empty-state { display:flex; flex-direction:column; align-items:center; padding:2.5rem; gap:.75rem; }
    .empty-icon { font-size:2.5rem; }

    .modal-backdrop { position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem; }
    .modal { background:var(--card); border-radius:var(--radius); box-shadow:0 20px 60px rgba(0,0,0,.2); width:100%; max-width:520px; }
    .modal-settle { max-width:480px; }
    .modal-header { display:flex; align-items:center; justify-content:space-between; padding:1.1rem 1.25rem; border-bottom:1.5px solid var(--border); }
    .modal-title { font-weight:700; font-size:1.05rem; }
    .modal-body { padding:1.25rem; display:flex; flex-direction:column; gap:1rem; }
    .modal-footer { display:flex; justify-content:flex-end; gap:.75rem; padding:1rem 1.25rem; border-top:1.5px solid var(--border); }

    .settle-header { background:linear-gradient(135deg,#4f46e5,#1d4ed8); color:#fff; border-radius:var(--radius) var(--radius) 0 0; }
    .settle-header .modal-title { color:#fff; }
    .settle-header .btn-icon { color:rgba(255,255,255,.8); }

    .settle-direction { display:flex; align-items:center; gap:.75rem; padding:1rem; background:var(--bg); border-radius:var(--radius-sm); }
    .settle-branch { flex:1; text-align:center; padding:.75rem; border:2px solid var(--border); border-radius:var(--radius-sm); }
    .settle-branch-to { border-color:#4f46e5; background:rgba(79,70,229,.04); }
    .settle-arrow { font-size:1.5rem; color:var(--accent); font-weight:700; }
    .branch-label { font-size:.7rem; font-weight:600; text-transform:uppercase; color:var(--muted); }
    .branch-name { font-size:.95rem; font-weight:700; color:var(--ink); }

    .open-balance-info { display:flex; justify-content:space-between; align-items:center; padding:.75rem 1rem; background:#fff8e1; border:1.5px solid #f59e0b; border-radius:var(--radius-sm); }
    .balance-label { font-size:.85rem; font-weight:600; color:#92400e; }
    .balance-value { font-size:1.1rem; font-weight:800; color:#d97706; }

    .form-group { display:flex; flex-direction:column; gap:.4rem; }
    .form-label { font-size:.8rem; font-weight:600; color:var(--ink2); text-transform:uppercase; letter-spacing:.04em; }
    .form-control { padding:.65rem .9rem; border-radius:var(--radius-sm); border:1.5px solid var(--border); background:var(--bg); font-size:.9rem; color:var(--ink); font-family:inherit; transition:border-color var(--transition); width:100%; }
    .form-control:focus { outline:none; border-color:var(--accent); }

    .btn { display:inline-flex; align-items:center; gap:.4rem; padding:.6rem 1.2rem; border-radius:var(--radius-sm); font-size:.875rem; font-weight:600; cursor:pointer; border:none; transition:all var(--transition); }
    .btn-primary { background:var(--accent); color:#fff; }
    .btn-primary:hover { filter:brightness(1.1); }
    .btn-primary:disabled { opacity:.5; cursor:not-allowed; }
    .btn-ghost { background:transparent; border:1.5px solid var(--border); color:var(--ink2); }
    .btn-ghost:hover { background:var(--bg); }
    .btn-sm { padding:.4rem .8rem; font-size:.8rem; }
    .btn-icon { background:transparent; border:none; font-size:1.1rem; cursor:pointer; padding:.25rem; }
  `],
})
export class SettlementsComponent implements OnInit {
  balances    = signal<InterBranchBalance[]>([]);
  settlements = signal<InterBranchSettlement[]>([]);
  settleTarget = signal<InterBranchBalance | null>(null);
  settleAmount = 0;
  settleNote   = '';

  myNet = computed(() => {
    const branch = this.auth.user()?.branch;
    if (!branch) return 0;
    let net = 0;
    for (const b of this.balances()) {
      if (b.toBranch === branch)   net += b.balance;  // we have a claim
      if (b.fromBranch === branch) net -= b.balance;  // we owe
    }
    return net;
  });

  constructor(
    private svc:   SettlementsService,
    public  auth:  AuthService,
    private toast: ToastService,
    public  i18n:  I18nService,
  ) {}

  t = this.i18n.t;

  ngOnInit() { this.load(); }

  load() {
    const branch = this.auth.isAdmin() ? undefined : (this.auth.user()?.branch ?? undefined);
    this.svc.getBalances(branch).subscribe(b => this.balances.set(b));
    this.svc.getSettlements(branch).subscribe(s => this.settlements.set(s));
  }

  openSettle(bal: InterBranchBalance) {
    this.settleTarget.set(bal);
    this.settleAmount = bal.balance;
    this.settleNote   = '';
  }

  confirmSettle() {
    const bal = this.settleTarget();
    if (!bal || !this.settleAmount) return;
    const dto = {
      fromBranch: bal.fromBranch,
      toBranch:   bal.toBranch,
      amount:     this.settleAmount,
      currency:   bal.currency,
      note:       this.settleNote,
      settledBy:  this.auth.user()?.name ?? 'Unknown',
    };
    this.svc.settle(dto).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().settlementDone);
        this.settleTarget.set(null);
        this.load();
      },
      error: () => this.toast.error('Fehler beim Ausgleich'),
    });
  }
}
