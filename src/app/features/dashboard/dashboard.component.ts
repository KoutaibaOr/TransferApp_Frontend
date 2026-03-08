import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TransferService, BranchService } from '../../core/services/api.service';
import { I18nService } from '../../core/services/i18n.service';
import { AuthService } from '../../core/services/auth.service';
import { Transfer, TransferStats, Branch } from '../../core/models';

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
    </div>
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

  constructor(
    private transferSvc: TransferService,
    private branchSvc:   BranchService,
    public  auth:        AuthService,
    public  i18n:        I18nService,
  ) {}
  t = this.i18n.t;

  ngOnInit() {
    this.transferSvc.getStats().subscribe(s => this.stats.set(s));
    this.transferSvc.getAll({ limit: 8 }).subscribe(r => this.recentTransfers.set(r.data));
    this.branchSvc.getAll().subscribe(b => this.branches.set(b));
  }

  formatNum(n?: number) {
    if (n == null) return '—';
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
  }
}
