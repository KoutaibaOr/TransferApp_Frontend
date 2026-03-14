import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TransferService, BranchService, SettlementsService } from '../../core/services/api.service';
import { I18nService } from '../../core/services/i18n.service';
import { AuthService } from '../../core/services/auth.service';
import { Transfer, TransferStats, Branch, InterBranchBalance } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: 'dashboard.component.css',
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().dashboard }}</h1>
        <p class="page-subtitle">{{ t().welcome }}, {{ auth.user()?.name }}</p>
      </div>
    </div>
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon blue">💳</div>
        <div>
          <div class=\"kpi-label\">{{ t().todayTransfers }}</div>
          <div class=\"kpi-value\">{{ stats()?.totalCount ?? '—' }}</div>
          <div class=\"kpi-sub\">{{ stats()?.todayCount ?? 0 }} {{ t().today }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green">💶</div>
        <div>
          <div class="kpi-label">{{ t().todayRevenue }}</div>
          <div class="kpi-value">€ {{ formatNum(stats()?.todayRevenue) }}</div>
          <div class="kpi-sub">€ {{ formatNum(stats()?.totalRevenue) }} {{ t().totalRevenue }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon orange">⏳</div>
        <div>
          <div class="kpi-label">{{ t().pending }}</div>
          <div class="kpi-value">{{ stats()?.pendingCount ?? '—' }}</div>
          <div class="kpi-sub">{{ t().waitingForProcessing }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon purple">🏦</div>
        <div>
          <div class="kpi-label">{{ t().branches }}</div>
          <div class="kpi-value">{{ branches().length }}</div>
          <div class="kpi-sub">{{ t().activeLocations }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon yellow">📈</div>
        <div>
          <div class="kpi-label">{{ t().profitToday }}</div>
          <div class="kpi-value">€ {{ formatNum(stats()?.profitToday) }}</div>
          <div class="kpi-sub">{{ t().profitTotal }}: € {{ formatNum(stats()?.profitTotal) }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green">💰</div>
        <div>
          <div class="kpi-label">{{ t().profitMonth }}</div>
          <div class="kpi-value">€ {{ formatNum(stats()?.profitMonth) }}</div>
          <div class="kpi-sub">{{ t().transferProfit }}: € {{ formatNum(stats()?.transferProfit) }}</div>
        </div>
      </div>
      <!-- NEW: Inter-Branch Balance -->
      <div class="kpi-card" [class.kpi-positive]="myBranchNet() >= 0" [class.kpi-negative]="myBranchNet() < 0">
        <div class="kpi-icon" [class.teal]="myBranchNet()>=0" [class.red]="myBranchNet()<0">⚖️</div>
        <div>
          <div class="kpi-label">{{ t().interBranchBalance }}</div>
          <div class="kpi-value" [class.val-ok]="myBranchNet()>=0" [class.val-danger]="myBranchNet()<0">
            {{ myBranchNet() >= 0 ? '+' : '' }}{{ formatNum(myBranchNet()) }} EUR
          </div>
          <div class="kpi-sub">{{ myBranchNet() >= 0 ? t().branchHasClaim : t().branchOwes }}</div>
        </div>
      </div>
      <!-- NEW: Incoming Transfers (قيد وارد) -->
      <div class="kpi-card">
        <div class="kpi-icon teal">📥</div>
        <div>
          <div class="kpi-label">{{ t().incomingPending }}</div>
          <div class="kpi-value">{{ pendingIncoming() }}</div>
          <div class="kpi-sub">{{ t().waitingForPayout }}</div>
        </div>
      </div>
    </div>

    <!-- ── Inter-Branch Balances (الاعتمادات) ── -->
    @if (branchBalances().length) {
      <div class="card" style="margin-bottom:1.5rem;padding:0">
        <div class="card-header">
          <span class="card-title">⚖️ {{ t().interBranchBalances }}</span>
          <a routerLink="/settlements" class="btn btn-ghost btn-sm">{{ t().viewAll }}</a>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{{ t().fromBranch }}</th>
                <th>{{ t().toBranch }}</th>
                <th>{{ t().balance }}</th>
                <th>{{ t().currency }}</th>
              </tr>
            </thead>
            <tbody>
              @for (b of branchBalances().slice(0,4); track b.id) {
                <tr>
                  <td><span class="ibb-from">↑ {{ b.fromBranch }}</span></td>
                  <td><span class="ibb-to">↓ {{ b.toBranch }}</span></td>
                  <td class="fw-600" [class.text-ok]="b.balance>0">{{ b.balance | number:'1.2-2' }}</td>
                  <td><code>{{ b.currency }}</code></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    <div class="dash-grid">
      <div class="card">
        <div class="card-header">
          <span class="card-title">{{ t().recentTransfers }}</span>
          <a routerLink="/transfers" class="btn btn-ghost btn-sm">{{ t().viewAll }}</a>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Ref</th><th>{{ t().sender }}</th><th>{{ t().amount }}</th><th>{{ t().status }}</th></tr>
            </thead>
            <tbody>
              @for (t of recentTransfers(); track t.id) {
                <tr>
                  <td><code class="ref">{{ t.ref }}</code></td>
                  <td>{{ t.senderName }}</td>
                  <td class="fw-600">{{ t.amount | number:'1.0-0' }} {{ t.currency }}</td>
                  <td><span class="badge" [class]="'badge-' + t.status.toLowerCase()">{{ t.status }}</span></td>
                </tr>
              } @empty {
                <tr><td colspan="4" class="text-muted" style="text-align:center;padding:2rem">{{ t().noTransfers }}</td></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <span class="card-title">{{ t().branches }}</span>
          <a routerLink="/cash" class="btn btn-ghost btn-sm">Details</a>
        </div>
        <div class="branch-list">
          @for (b of branches(); track b.id) {
            <div class="branch-row">
              <div class="branch-dot" [style.background]="b.color"></div>
              <div class="branch-info">
                <span class="branch-name">{{ b.name }}</span>
                <span class="branch-city text-muted">{{ b.city }}</span>
              </div>
              <div class="branch-balance">€ {{ b.cashBalance | number:'1.0-0' }}</div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  stats           = signal<TransferStats | null>(null);
  recentTransfers = signal<Transfer[]>([]);
  branches        = signal<Branch[]>([]);
  branchBalances  = signal<InterBranchBalance[]>([]);
  pendingIncoming = signal(0);

  myBranchNet = computed(() => {
    const branch = this.auth.user()?.branch;
    if (!branch) return 0;
    let net = 0;
    for (const b of this.branchBalances()) {
      if (b.toBranch   === branch) net += b.balance;
      if (b.fromBranch === branch) net -= b.balance;
    }
    return net;
  });

  constructor(
    private transferSvc:   TransferService,
    private branchSvc:     BranchService,
    private settlementSvc: SettlementsService,
    public  auth:          AuthService,
    public  i18n:          I18nService,
  ) {}
  t = this.i18n.t;

  ngOnInit() {
    this.transferSvc.getStats().subscribe(s => this.stats.set(s));
    // Non-admin: only load own branch's transfers and show only own branch
    const ownBranch = !this.auth.isAdmin() ? (this.auth.user()?.branch ?? undefined) : undefined;
    const recentParams: any = { limit: 8 };
    if (ownBranch) recentParams['branch'] = ownBranch;
    this.transferSvc.getAll(recentParams).subscribe(r => this.recentTransfers.set(r.data));
    this.branchSvc.getAll().subscribe(b => {
      // Branch managers only see their own branch
      this.branches.set(ownBranch ? b.filter(br => br.name === ownBranch) : b);
    });
    const balanceBranch = this.auth.isAdmin() ? undefined : ownBranch;
    this.settlementSvc.getBalances(balanceBranch).subscribe(bs => this.branchBalances.set(bs));
    // Count pending incoming (قيد وارد)
    const branchParam = this.auth.user()?.branch;
    if (branchParam) {
      this.transferSvc.getAll({ direction: 'incoming', branch: branchParam, statuses: 'CREATED', limit: 999 })
        .subscribe(r => this.pendingIncoming.set(r.total));
    }
  }

  formatNum(n?: number) {
    if (n == null) return '—';
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
  }
}
