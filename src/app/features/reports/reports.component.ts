import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferService } from '../../core/services/api.service';
import { I18nService } from '../../core/services/i18n.service';
import { TransferStats } from '../../core/models';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .report-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); gap: 1rem; margin-top: 1.5rem; }
  `],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().reports }}</h1>
        <p class="page-subtitle">Umsatz- und Gewinnübersicht</p>
      </div>
    </div>
    <div class="kpi-grid">
      <div class="kpi-card"><div class="kpi-icon blue">💳</div><div><div class="kpi-label">Transfers gesamt</div><div class="kpi-value">{{ stats()?.total ?? '—' }}</div></div></div>
      <div class="kpi-card"><div class="kpi-icon green">💶</div><div><div class="kpi-label">Gesamtumsatz</div><div class="kpi-value">€ {{ fmt(stats()?.totalAmount) }}</div></div></div>
      <div class="kpi-card"><div class="kpi-icon orange">📋</div><div><div class="kpi-label">Gebühren gesamt</div><div class="kpi-value">€ {{ fmt(stats()?.totalFee) }}</div></div></div>
      <div class="kpi-card"><div class="kpi-icon purple">📈</div><div><div class="kpi-label">Gewinn gesamt</div><div class="kpi-value">€ {{ fmt(stats()?.totalProfit) }}</div></div></div>
    </div>
    <div class="card mt-3">
      <div class="card-header"><span class="card-title">Heute</span></div>
      <div class="kpi-grid">
        <div class="kpi-card"><div class="kpi-icon blue">💳</div><div><div class="kpi-label">Heute Transfers</div><div class="kpi-value">{{ stats()?.todayCount ?? '—' }}</div></div></div>
        <div class="kpi-card"><div class="kpi-icon green">💶</div><div><div class="kpi-label">Heute Umsatz</div><div class="kpi-value">€ {{ fmt(stats()?.todayAmount) }}</div></div></div>
      </div>
    </div>
  `,
})
export class ReportsComponent implements OnInit {
  stats = signal<TransferStats | null>(null);
  constructor(private svc: TransferService, public i18n: I18nService) {}
  t = this.i18n.t;
  ngOnInit() { this.svc.getStats().subscribe(s => this.stats.set(s)); }
  fmt(n?: number) { if (n == null) return '—'; return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(n); }
}
