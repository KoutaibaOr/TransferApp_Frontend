import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExchangeService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { ExchangeRate, BranchCashBalance, CashExchange, ExchangePreview, ExchangeStats } from '../../core/models';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'exchange.component.css',
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().exchange }}</h1>
        <p class="page-subtitle">{{ t().exchangeRates }} & {{ t().history }}</p>
      </div>
      <button class="btn btn-primary" (click)="showExchange.set(true)">＋ {{ t().newExchange }}</button>
    </div>

    <!-- Stats -->
    <div class="kpi-grid" style="margin-bottom:1.5rem">
      <div class="kpi-card">
        <div class="kpi-icon purple">💱</div>
        <div>
          <div class="kpi-label">{{ t().todayTransactions }}</div>
          <div class="kpi-value">{{ stats()?.todayTransactions ?? '—' }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green">💶</div>
        <div>
          <div class="kpi-label">{{ t().todayProfit }}</div>
          <div class="kpi-value">€ {{ fmt(stats()?.todayProfit) }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon blue">📊</div>
        <div>
          <div class="kpi-label">{{ t().totalVolume }}</div>
          <div class="kpi-value">€ {{ fmt(stats()?.totalVolume) }}</div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <button class="tab-btn" [class.active]="tab()==='rates'"    (click)="tab.set('rates')">{{ t().exchangeRates }}</button>
      <button class="tab-btn" [class.active]="tab()==='balances'" (click)="tab.set('balances')">{{ t().cashBalances }}</button>
      <button class="tab-btn" [class.active]="tab()==='history'"  (click)="tab.set('history')">{{ t().history }}</button>
    </div>

    <!-- Rates Tab -->
    @if (tab()==='rates') {
      <div class="card" style="padding:0">
        <div class="card-header" style="padding:1.25rem 1.5rem">
          <span class="card-title">{{ t().activeRates }}</span>
          @if (auth.isAdmin()) {
            <button class="btn btn-ghost btn-sm" (click)="showNewRate.set(true)">＋ {{ t().addRate }}</button>
          }
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>{{ t().from }}</th><th>{{ t().to }}</th><th>{{ t().rate }}</th><th>{{ t().margin }} %</th><th>{{ t().setBy }}</th><th>{{ t().status }}</th>
              @if (auth.isAdmin()) { <th>{{ t().actions }}</th> }
              </tr>
            </thead>
            <tbody>
              @for (r of rates(); track r.id) {
                <tr>
                  <td><span class="currency-badge">{{ r.fromCurrency }}</span></td>
                  <td><span class="currency-badge">{{ r.toCurrency }}</span></td>
                  <td class="fw-600">{{ r.rate | number:'1.4-4' }}</td>
                  <td>{{ r.marginPercent }}%</td>
                  <td class="text-muted">{{ r.setBy }}</td>
                  <td><span class="badge" [class]="r.active ? 'badge-completed' : 'badge-cancelled'">{{ r.active ? t().active : t().inactive }}</span></td>
                  @if (auth.isAdmin()) {
                    <td>
                      <button class="btn btn-danger btn-sm" (click)="deleteRate(r.id)">{{ t().delete }}</button>
                    </td>
                  }
                </tr>
              } @empty {
                <tr><td colspan="7"><div class="empty-state"><div class="empty-icon">💱</div><h3>{{ t().noRates }}</h3></div></td></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    <!-- Balances Tab -->
    @if (tab()==='balances') {
      <div class="balances-grid">
        @for (b of groupedBalances(); track b.branch) {
          <div class="card branch-balance-card">
            <div class="card-header">
              <span class="card-title">{{ b.branch }}</span>
            </div>
            <div class="balance-list">
              @for (item of b.items; track item.currency) {
                <div class="balance-row">
                  <span class="currency-badge">{{ item.currency }}</span>
                  <span class="balance-amount">{{ item.balance | number:'1.2-2' }}</span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    }

    <!-- History Tab -->
    @if (tab()==='history') {
      <div class="card" style="padding:0">
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Ref</th><th>{{ t().from }}</th><th>{{ t().to }}</th><th>{{ t().customerAmount }}</th><th>{{ t().rate }}</th><th>{{ t().profit }}</th><th>{{ t().branch }}</th><th>{{ t().employee }}</th><th>{{ t().date }}</th></tr>
            </thead>
            <tbody>
              @for (e of exchanges(); track e.id) {
                <tr>
                  <td><code class="ref">{{ e.ref }}</code></td>
                  <td>{{ e.fromAmount | number:'1.2-2' }} <span class="currency-badge sm">{{ e.fromCurrency }}</span></td>
                  <td>{{ e.customerPayout | number:'1.2-2' }} <span class="currency-badge sm">{{ e.toCurrency }}</span></td>
                  <td class="fw-600">{{ e.customerPayout | number:'1.2-2' }}</td>
                  <td class="text-muted">{{ e.exchangeRate | number:'1.4-4' }}</td>
                  <td class="text-ok fw-600">€ {{ e.profit | number:'1.2-2' }}</td>
                  <td>{{ e.branch }}</td>
                  <td class="text-muted" style="font-size:.8rem">{{ e.employee }}</td>
                  <td class="text-muted">{{ e.createdAt | date:'dd.MM.yy HH:mm' }}</td>
                </tr>
              } @empty {
                <tr><td colspan="8"><div class="empty-state"><div class="empty-icon">📋</div><h3>{{ t().noExchanges }}</h3></div></td></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    <!-- New Exchange Modal -->
    @if (showExchange()) {
      <div class="modal-backdrop" (click)="showExchange.set(false)">
        <div class="modal modal-lg" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ t().newExchangeModal }}</span>
            <button class="btn btn-icon" (click)="showExchange.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="exchange-form">
              <div class="form-group">
                <label class="form-label">{{ t().customerGives }}</label>
                <div class="amount-row">
                  <input class="form-control" type="number" [(ngModel)]="exDto.fromAmount"
                         (input)="calcPreview()" placeholder="0.00" />
                  <select class="form-control currency-sel" [(ngModel)]="exDto.fromCurrency" (change)="calcPreview()">
                    @for (r of activeRates(); track r.id) {
                      <option [value]="r.fromCurrency">{{ r.fromCurrency }}</option>
                    }
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
              <div class="exchange-arrow">⇅</div>
              <div class="form-group">
                <label class="form-label">{{ t().customerGets }}</label>
                <div class="amount-row">
                  <input class="form-control" [value]="preview()?.customerPayout | number:'1.2-2'" readonly />
                  <select class="form-control currency-sel" [(ngModel)]="exDto.toCurrency" (change)="calcPreview()">
                    @for (r of activeRates(); track r.id) {
                      <option [value]="r.toCurrency">{{ r.toCurrency }}</option>
                    }
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
            </div>

            @if (preview()) {
              <div class="preview-box">
                <div class="preview-row">
                  <span>{{ t().rate }}</span>
                  <span class="fw-600">{{ preview()!.rate | number:'1.4-4' }}</span>
                </div>
                <div class="preview-row">
                  <span>{{ t().grossAmount }}</span>
                  <span>{{ preview()!.grossAmount | number:'1.2-2' }} {{ exDto.toCurrency }}</span>
                </div>
                <div class="preview-row">
                  <span>{{ t().margin }} ({{ preview()!.marginPercent }}%)</span>
                  <span class="text-warn">− {{ preview()!.fee | number:'1.2-2' }}</span>
                </div>
                <div class="preview-row highlight">
                  <span class="fw-600">{{ t().customerPayout }}</span>
                  <span class="fw-600 text-ok">{{ preview()!.customerPayout | number:'1.2-2' }} {{ exDto.toCurrency }}</span>
                </div>
                <div class="preview-row">
                  <span>{{ t().profit }}</span>
                  <span class="text-accent fw-600">€ {{ preview()!.profit | number:'1.2-2' }}</span>
                </div>
              </div>
            }

            <div class="form-group">
              <label class="form-label">{{ t().customerName }}</label>
              <input class="form-control" [(ngModel)]="exDto.customerName" />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showExchange.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="executeExchange()" [disabled]="!preview()">
              ✓ {{ t().confirmExchange }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- New Rate Modal -->
    @if (showNewRate()) {
      <div class="modal-backdrop" (click)="showNewRate.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ t().newRateModal }}</span>
            <button class="btn btn-icon" (click)="showNewRate.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">{{ t().fromCurrency }}</label>
                <input class="form-control" [(ngModel)]="rateDto.fromCurrency" placeholder="EUR" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().toCurrency }}</label>
                <input class="form-control" [(ngModel)]="rateDto.toCurrency" placeholder="MAD" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().rate }}</label>
                <input class="form-control" type="number" step="0.0001" [(ngModel)]="rateDto.rate" />
              </div>
              <div class="form-group">
                <label class="form-label">{{ t().margin }} %</label>
                <input class="form-control" type="number" step="0.1" [(ngModel)]="rateDto.marginPercent" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNewRate.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="createRate()">{{ t().addRate }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class ExchangeComponent implements OnInit {
  tab          = signal<'rates'|'balances'|'history'>('rates');
  rates        = signal<ExchangeRate[]>([]);
  activeRates  = signal<ExchangeRate[]>([]);
  balances     = signal<BranchCashBalance[]>([]);
  exchanges    = signal<CashExchange[]>([]);
  stats        = signal<ExchangeStats | null>(null);
  preview      = signal<ExchangePreview | null>(null);
  showExchange = signal(false);
  showNewRate  = signal(false);

  exDto   = { fromCurrency: 'EUR', toCurrency: 'MAD', fromAmount: 0, customerName: '' };

  // FIX 6: Deduplizierte Währungslisten
  fromCurrencies = computed(() => [...new Set(this.activeRates().map(r => r.fromCurrency))]);
  toCurrencies   = computed(() => [...new Set(this.activeRates().map(r => r.toCurrency))]);
  rateDto = { fromCurrency: '', toCurrency: '', rate: 0, marginPercent: 1.5 };

  groupedBalances = computed(() => {
    const map = new Map<string, { branch: string; items: BranchCashBalance[] }>();
    for (const b of this.balances()) {
      if (!map.has(b.branch)) map.set(b.branch, { branch: b.branch, items: [] });
      map.get(b.branch)!.items.push(b);
    }
    return [...map.values()];
  });

  constructor(
    private svc:   ExchangeService,
    public  auth:  AuthService,
    private toast: ToastService,
    public  i18n:  I18nService,
  ) {}

  t = this.i18n.t;

  ngOnInit() {
    this.svc.getRates().subscribe(r => this.rates.set(r));
    this.svc.getActiveRates().subscribe(r => this.activeRates.set(r));
    this.svc.getBalances().subscribe(b => {
      // Branch managers see only their branch balances
      const userBranch = this.auth.user()?.branch;
      if (this.auth.isManager() && userBranch) {
        this.balances.set(b.filter((x: any) => x.branch === userBranch));
      } else {
        this.balances.set(b);
      }
    });
    const exchangeParams = this.auth.isManager() && this.auth.user()?.branch
      ? { branch: this.auth.user()!.branch }
      : {};
    this.svc.getExchanges(exchangeParams).subscribe(r => this.exchanges.set(r.data));
    this.svc.getStats().subscribe(s => this.stats.set(s));
  }

  calcPreview() {
    if (!this.exDto.fromAmount || !this.exDto.fromCurrency || !this.exDto.toCurrency) return;
    this.svc.preview(this.exDto.fromCurrency, this.exDto.toCurrency, this.exDto.fromAmount)
      .subscribe(p => this.preview.set(p));
  }

  executeExchange() {
    this.svc.execute({ ...this.exDto, branch: this.auth.user()?.branch ?? 'Berlin-Mitte' }).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().exchangeSuccess);
        this.showExchange.set(false);
        this.preview.set(null);
        this.exDto = { fromCurrency: 'EUR', toCurrency: 'MAD', fromAmount: 0, customerName: '' };
        this.svc.getExchanges().subscribe(r => this.exchanges.set(r.data));
        this.svc.getStats().subscribe(s => this.stats.set(s));
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  deleteRate(id: string) {
    if (!confirm(this.i18n.t().confirmDeleteRate)) return;
    this.svc.deleteRate(id).subscribe({
      next: () => { this.toast.success(this.i18n.t().rateDeleted); this.svc.getRates().subscribe(r => this.rates.set(r)); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  createRate() {
    this.svc.createRate(this.rateDto as any).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().rateCreated);
        this.showNewRate.set(false);
        this.svc.getRates().subscribe(r => this.rates.set(r));
      },
      error: () => this.toast.error(this.i18n.t().creationError),
    });
  }

  fmt(n?: number) {
    if (n == null) return '—';
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(n);
  }
}
