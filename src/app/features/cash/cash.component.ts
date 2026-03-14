import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CashService, BranchService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { AuthService } from '../../core/services/auth.service';
import { CashJournalEntry, Branch, DayClose, BankDeposit } from '../../core/models';

@Component({
  selector: 'app-cash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .cash-tabs { display:flex;gap:.5rem;margin:1rem 0; }
    .c-tab { padding:.45rem 1rem;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--surface);cursor:pointer;font-size:.85rem;font-weight:500; }
    .c-tab.active { background:var(--accent);color:#fff;border-color:var(--accent); }
    .currency-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem;margin:1rem 0; }
    .currency-card { background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1rem 1.25rem; }
    .currency-code { font-size:.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em; }
    .currency-amount { font-size:1.6rem;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:var(--accent2);margin:.15rem 0; }
    .currency-branch { font-size:.72rem;color:var(--muted); }
    .journal-entry { display:flex;align-items:center;gap:.75rem;padding:.65rem .75rem;border-radius:var(--radius-sm);background:var(--bg);margin-bottom:.4rem; }
    .entry-badge { font-size:.7rem;font-weight:700;padding:.2rem .5rem;border-radius:999px;text-transform:uppercase; }
    .entry-in  { background:#d1fae5;color:#065f46; }
    .entry-out { background:#fee2e2;color:#991b1b; }
    .entry-exchange { background:#e0e7ff;color:#3730a3; }
    .entry-profit   { background:#fef9c3;color:#92400e; }
    .entry-amount { font-weight:700; }
    .pos { color:var(--accent2); } .neg { color:var(--red); }
    .diff-pos { color:var(--accent2);font-weight:700; }
    .diff-neg { color:var(--red);font-weight:700; }
    .day-close-row { display:flex;align-items:center;gap:.75rem;padding:.65rem .75rem;border-radius:var(--radius-sm);background:var(--bg);margin-bottom:.4rem; }
    .bank-entry-row { display:flex;gap:.5rem;align-items:center;margin-bottom:.4rem; }
    @media(max-width:768px){ .currency-grid{grid-template-columns:1fr 1fr;} }
  `],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().cash }}</h1>
        <p class="page-subtitle">{{ t().cashbookOverview }}</p>
      </div>
      <div style="display:flex;gap:.5rem">
        @if (canBook()) {
          <button class="btn btn-success" (click)="openBankDeposit()">&#x1F3E6; {{ t().newBankDeposit }}</button>
          <button class="btn btn-primary" (click)="openDayClose()">&#x1F4CB; {{ t().openDayClose }}</button>
        }
      </div>
    </div>

    @if (auth.isAdmin()) {
      <div style="margin-bottom:1rem">
        <select class="form-control" style="max-width:250px" [(ngModel)]="selectedBranch" (change)="reload()">
          <option value="">{{ t().allBranches }}</option>
          @for (b of branches(); track b.id) {
            <option [value]="b.name">{{ b.name }}</option>
          }
        </select>
      </div>
    }

    <!-- -- KPI CARDS ------------------------------------------- -->
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon green">&euro;</div>
        <div>
          <div class="kpi-label">{{ t().totalCash }}</div>
          <div class="kpi-value">EUR {{ totalEur() | number:'1.0-0' }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon yellow">&#x1F4C8;</div>
        <div>
          <div class="kpi-label">{{ t().profitToday }}</div>
          <div class="kpi-value">EUR {{ profitToday() | number:'1.2-2' }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon purple">&#x1F4B0;</div>
        <div>
          <div class="kpi-label">{{ t().profitMonth }}</div>
          <div class="kpi-value">EUR {{ profitMonth() | number:'1.2-2' }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon blue">&#x1F3E6;</div>
        <div>
          <div class="kpi-label">{{ t().activeBranches }}</div>
          <div class="kpi-value">{{ branches().length }}</div>
        </div>
      </div>
    </div>

    <!-- -- TABS ------------------------------------------------ -->
    <div class="cash-tabs">
      <button class="c-tab" [class.active]="cashTab()==='balances'"  (click)="cashTab.set('balances')">{{ t().cashPerCurrency }}</button>
      <button class="c-tab" [class.active]="cashTab()==='journal'"   (click)="cashTab.set('journal')">{{ t().journal }}</button>
      <button class="c-tab" [class.active]="cashTab()==='dayclose'"  (click)="cashTab.set('dayclose')">{{ t().dayCloseHistory }}</button>
      <button class="c-tab" [class.active]="cashTab()==='profits'"   (click)="loadProfits();cashTab.set('profits')">&#x1F4C8; {{ t().branchProfit }}</button>
    </div>

    <!-- -- BALANCES TAB ---------------------------------------- -->
    @if (cashTab()==='balances') {
      <div class="currency-grid">
        @for (bal of cashBalances(); track bal.currency) {
          <div class="currency-card">
            <div class="currency-code">{{ bal.currency }}</div>
            <div class="currency-amount">{{ bal.balance | number:'1.2-2' }}</div>
            <div class="currency-branch">{{ selectedBranch || t().allBranches }}</div>
          </div>
        } @empty {
          <p class="text-muted">{{ t().noData }}</p>
        }
      </div>
      <div class="card" style="margin-top:1.5rem">
        <div class="card-header"><span class="card-title">{{ t().branches }}</span></div>
        @for (b of branches(); track b.id) {
          <div class="journal-entry">
            <span style="width:12px;height:12px;border-radius:50%;background:{{ b.color }};flex-shrink:0;display:inline-block"></span>
            <div style="flex:1">
              <div style="font-weight:600;font-size:.875rem">{{ b.name }}</div>
              <div style="font-size:.75rem;color:var(--muted)">{{ b.city }}</div>
            </div>
            <div style="text-align:right">
              @for (bal of (b.balances ?? []); track bal.currency) {
                <div style="font-size:.8rem"><span style="color:var(--muted)">{{ bal.currency }}:</span> <span style="font-weight:700;color:var(--accent2)">{{ bal.amount | number:'1.0-0' }}</span></div>
              } @empty {
                <span style="font-weight:700;color:var(--accent2)">EUR {{ b.cashBalance | number:'1.0-0' }}</span>
              }
            </div>
          </div>
        }
      </div>
    }

    <!-- -- JOURNAL TAB ----------------------------------------- -->
    @if (cashTab()==='journal') {
      <div class="card">
        <div class="card-header">
          <span class="card-title">{{ t().cashMovements }}</span>
          @if (canBook()) {
            <div style="display:flex;gap:.5rem">
              <button class="btn btn-success btn-sm" (click)="showDeposit.set(true)">+ {{ t().deposit }}</button>
              <button class="btn btn-danger btn-sm"  (click)="showWithdraw.set(true)">- {{ t().withdraw }}</button>
            </div>
          }
        </div>
        @for (e of journal(); track e.id) {
          <div class="journal-entry">
            <span class="entry-badge" [class]="entryClass(e.type)">{{ e.type }}</span>
            <div style="flex:1">
              <span class="entry-amount" [class.pos]="isPositive(e.type)" [class.neg]="!isPositive(e.type)">
                {{ isPositive(e.type) ? '+' : '-' }}{{ e.currency }} {{ e.amount | number:'1.2-2' }}
              </span>
              <span class="text-muted" style="font-size:.8rem;margin-left:.5rem">{{ e.note || e.reference }}</span>
            </div>
            <span class="text-muted" style="font-size:.75rem">{{ e.createdAt | date:'dd.MM HH:mm' }}</span>
          </div>
        } @empty {
          <p class="text-muted" style="text-align:center;padding:1rem">{{ t().noEntries }}</p>
        }
      </div>
    }

    <!-- -- DAY CLOSE HISTORY ----------------------------------- -->
    @if (cashTab()==='dayclose') {
      <div class="card">
        <div class="card-header"><span class="card-title">{{ t().dayCloseHistory }}</span></div>
        @for (dc of dayCloses(); track dc.id) {
          <div class="day-close-row">
            <div style="flex:1">
              <div class="fw-600" style="font-size:.875rem">{{ dc.date }} - {{ dc.branch }}</div>
              <div style="font-size:.75rem;color:var(--muted)">{{ dc.createdBy }}</div>
            </div>
            @for (e of dc.entries; track e.currency) {
              <div style="text-align:right;margin-left:1rem;font-size:.8rem">
                <span style="color:var(--muted)">{{ e.currency }}:</span>
                <span class="fw-600"> {{ e.expected | number:'1.0-0' }}</span>
                <span class="text-muted"> / </span>
                <span class="fw-600"> {{ e.counted | number:'1.0-0' }}</span>
                <span [class]="e.diff >= 0 ? 'diff-pos' : 'diff-neg'"> ({{ e.diff >= 0 ? '+' : '' }}{{ e.diff | number:'1.0-0' }})</span>
              </div>
            }
            <span class="badge" [class]="dc.status === 'closed' ? 'badge-completed' : 'badge-created'">{{ dc.status === 'closed' ? t().dayCloseClosed : t().dayCloseOpen }}</span>
          </div>
        } @empty {
          <p class="text-muted" style="text-align:center;padding:1rem">{{ t().noDayCloses }}</p>
        }
      </div>
    }

    <!-- PROFIT BY BRANCH TAB -->
    @if (cashTab()==='profits') {
      <div class="card">
        <div class="card-header"><span class="card-title">&#x1F4C8; {{ t().profitByBranch }}</span></div>
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>{{ t().branch }}</th>
              <th style="text-align:right">{{ t().profitToday }}</th>
              <th style="text-align:right">{{ t().profitMonth }}</th>
              <th style="text-align:right">{{ t().profitTotal }}</th>
            </tr></thead>
            <tbody>
              @for (p of profitByBranch(); track p.branch) {
                <tr>
                  <td style="font-weight:600">{{ p.branch }}</td>
                  <td style="text-align:right;color:var(--accent2);font-weight:600">EUR {{ p.today | number:'1.2-2' }}</td>
                  <td style="text-align:right;color:var(--accent2);font-weight:600">EUR {{ p.month | number:'1.2-2' }}</td>
                  <td style="text-align:right;font-weight:700;font-size:1rem">EUR {{ p.total | number:'1.2-2' }}</td>
                </tr>
              } @empty {
                <tr><td colspan="4" style="text-align:center;padding:1.5rem" class="text-muted">{{ t().noProfit }}</td></tr>
              }
            </tbody>
            @if (profitByBranch().length > 0) {
              <tfoot><tr style="font-weight:800;background:var(--surface)">
                <td>TOTAL</td>
                <td style="text-align:right;color:var(--accent2)">EUR {{ sumField(profitByBranch(), 'today') | number:'1.2-2' }}</td>
                <td style="text-align:right;color:var(--accent2)">EUR {{ sumField(profitByBranch(), 'month') | number:'1.2-2' }}</td>
                <td style="text-align:right">EUR {{ sumField(profitByBranch(), 'total') | number:'1.2-2' }}</td>
              </tr></tfoot>
            }
          </table>
        </div>
      </div>
    }

    <!-- -- DEPOSIT MODAL --------------------------------------- -->
    @if (showDeposit()) {
      <div class="modal-backdrop" (click)="showDeposit.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">{{ t().deposit }}</span><button class="btn btn-icon" (click)="showDeposit.set(false)">&#x2715;</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">{{ t().currency }}</label>
              <select class="form-control" [(ngModel)]="depositCurrency">
                @for (c of availableCurrencies(); track c) { <option [value]="c">{{ c }}</option> }
              </select>
            </div>
            <div class="form-group"><label class="form-label">{{ t().amount }}</label><input class="form-control" type="number" [(ngModel)]="amount" min="0" /></div>
            <div class="form-group"><label class="form-label">{{ t().note }}</label><input class="form-control" [(ngModel)]="note" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showDeposit.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-success" (click)="doDeposit()">{{ t().deposit }}</button>
          </div>
        </div>
      </div>
    }

    <!-- -- WITHDRAW MODAL -------------------------------------- -->
    @if (showWithdraw()) {
      <div class="modal-backdrop" (click)="showWithdraw.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">{{ t().withdraw }}</span><button class="btn btn-icon" (click)="showWithdraw.set(false)">&#x2715;</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">{{ t().currency }}</label>
              <select class="form-control" [(ngModel)]="depositCurrency">
                @for (c of availableCurrencies(); track c) { <option [value]="c">{{ c }}</option> }
              </select>
            </div>
            <div class="form-group"><label class="form-label">{{ t().amount }}</label><input class="form-control" type="number" [(ngModel)]="amount" min="0" /></div>
            <div class="form-group"><label class="form-label">{{ t().note }}</label><input class="form-control" [(ngModel)]="note" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showWithdraw.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-danger" (click)="doWithdraw()">{{ t().withdraw }}</button>
          </div>
        </div>
      </div>
    }

    <!-- -- BANK DEPOSIT MODAL ---------------------------------- -->
    @if (showBankDeposit()) {
      <div class="modal-backdrop" (click)="showBankDeposit.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">&#x1F3E6; {{ t().newBankDeposit }}</span><button class="btn btn-icon" (click)="showBankDeposit.set(false)">&#x2715;</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">{{ t().branch }}</label>
              <select class="form-control" [(ngModel)]="bankDepositBranch">
                @for (b of branches(); track b.id) { <option [value]="b.name">{{ b.name }}</option> }
              </select>
            </div>
            <label class="form-label" style="margin-bottom:.5rem">{{ t().cashPerCurrency }}</label>
            @for (entry of bankDepositEntries; track entry.currency; let i = $index) {
              <div class="bank-entry-row">
                <select class="form-control" style="width:110px" [(ngModel)]="entry.currency">
                  @for (c of availableCurrencies(); track c) { <option [value]="c">{{ c }}</option> }
                </select>
                <input class="form-control" type="number" min="0" step="0.01" [(ngModel)]="entry.amount" placeholder="0.00" />
                <button class="btn btn-danger btn-sm" (click)="bankDepositEntries.splice(i,1)">&#x2715;</button>
              </div>
            }
            <button class="btn btn-ghost btn-sm" (click)="bankDepositEntries.push({currency:'USD',amount:0})">+ {{ t().addCurrency }}</button>
            <div class="form-group" style="margin-top:.75rem"><label class="form-label">{{ t().bankDepositNote }}</label><input class="form-control" [(ngModel)]="bankDepositNote" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showBankDeposit.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-success" (click)="doBankDeposit()">{{ t().bankDeposit }}</button>
          </div>
        </div>
      </div>
    }

    <!-- -- DAY CLOSE MODAL ------------------------------------- -->
    @if (showDayClose()) {
      <div class="modal-backdrop" (click)="showDayClose.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">&#x1F4CB; {{ t().dayCloseTitle }}</span><button class="btn btn-icon" (click)="showDayClose.set(false)">&#x2715;</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">{{ t().branch }}</label>
              <select class="form-control" [(ngModel)]="dayCloseBranch" (change)="prepareDayCloseEntries()">
                @for (b of branches(); track b.id) { <option [value]="b.name">{{ b.name }}</option> }
              </select>
            </div>
            <div class="form-group"><label class="form-label">{{ t().dayCloseDate }}</label>
              <input class="form-control" type="date" [(ngModel)]="dayCloseDate" />
            </div>
            <table style="width:100%;font-size:.875rem;margin-top:.5rem">
              <thead><tr style="color:var(--muted);font-size:.75rem">
                <th style="padding:.35rem">{{ t().currency }}</th>
                <th style="padding:.35rem">&#x270F;&#xFE0F; {{ t().physicalCount }}</th>
                <th style="padding:.35rem">&#x1F4BB; {{ t().systemExpected }}</th>
                <th style="padding:.35rem">{{ t().diff }}</th>
              </tr></thead>
              <tbody>
                @for (e of dayCloseEntries; track e.currency) {
                  <tr>
                    <td style="padding:.35rem;font-weight:700">{{ e.currency }}</td>
                    <td style="padding:.35rem"><input class="form-control" type="number" min="0" step="0.01" [(ngModel)]="e.counted" (ngModelChange)="e.diff = e.counted - e.expected" placeholder="0.00" style="height:34px;padding:.25rem .5rem" /></td>
                    <td style="padding:.35rem;color:var(--muted)">{{ e.expected | number:'1.2-2' }}</td>
                    <td style="padding:.35rem" [class]="e.diff >= 0 ? 'diff-pos' : 'diff-neg'">{{ e.diff >= 0 ? '+' : '' }}{{ e.diff | number:'1.2-2' }}</td>
                  </tr>
                }
              </tbody>
            </table>
            <div class="form-group" style="margin-top:.75rem"><label class="form-label">{{ t().note }}</label><input class="form-control" [(ngModel)]="dayCloseNote" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showDayClose.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="doDayClose()">{{ t().dayCloseConfirm }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class CashComponent implements OnInit {
  cashTab      = signal<'balances'|'journal'|'dayclose'|'profits'>('balances');
  cashBalances = signal<{ currency: string; balance: number }[]>([]);
  journal      = signal<CashJournalEntry[]>([]);
  branches     = signal<Branch[]>([]);
  dayCloses    = signal<DayClose[]>([]);
  profitByBranch = signal<{branch: string; today: number; month: number; total: number}[]>([]);

  showDeposit    = signal(false);
  showWithdraw   = signal(false);
  showBankDeposit = signal(false);
  showDayClose   = signal(false);

  amount = 0; note = ''; depositCurrency = 'EUR';
  selectedBranch = '';
  bankDepositBranch = '';
  bankDepositNote = '';
  bankDepositEntries: { currency: string; amount: number }[] = [{ currency: 'EUR', amount: 0 }];

  dayCloseBranch = '';
  dayCloseDate = new Date().toISOString().split('T')[0];
  dayCloseNote = '';
  dayCloseEntries: { currency: string; expected: number; counted: number; diff: number }[] = [];

  availableCurrencies = computed(() => ['EUR', 'USD', 'SYP', 'LBP', 'TRY', 'EGP']);

  totalEur = computed(() => this.cashBalances().find(b => b.currency === 'EUR')?.balance ?? 0);

  profitToday = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    return this.journal()
      .filter(e => e.type === 'PROFIT' && e.createdAt.startsWith(today))
      .reduce((s, e) => s + e.amount, 0);
  });

  profitMonth = computed(() => {
    const month = new Date().toISOString().slice(0, 7);
    return this.journal()
      .filter(e => e.type === 'PROFIT' && e.createdAt.startsWith(month))
      .reduce((s, e) => s + e.amount, 0);
  });

  isAdminOrManager = computed(() => this.auth.isAdmin() || this.auth.isManager());

  canBook = computed(() => {
    const u = this.auth.user();
    if (!u) return false;
    if (u.role === 'admin') return true;
    if (u.role === 'accountant') return !!(u as any).canBook;
    return false;
  });

  constructor(
    private svc: CashService, private branchSvc: BranchService,
    private toast: ToastService, public i18n: I18nService, public auth: AuthService
  ) {}
  t = this.i18n.t;

  ngOnInit() {
    this.branchSvc.getAll().subscribe(b => {
      this.branches.set(b);
      if (b.length > 0) {
        const userBranch = this.auth.user()?.branch;
        this.selectedBranch = userBranch ?? (this.auth.isAdmin() ? '' : b[0].name);
        this.bankDepositBranch = b[0].name;
        this.dayCloseBranch = b[0].name;
      }
    });
    this.reload();
  }

  reload() {
    const branch = this.selectedBranch;
    this.svc.getMultiBalances(branch).subscribe(r => this.cashBalances.set(r));
    this.svc.getJournal({ branch }).subscribe(r => this.journal.set(r.data));
    this.svc.getDayCloses(branch).subscribe(r => this.dayCloses.set(r));
  }

  loadProfits() {
    this.svc.getProfits().subscribe(r => this.profitByBranch.set(r));
  }

  sumField(arr: any[], field: string): number {
    return arr.reduce((s, item) => s + (item[field] ?? 0), 0);
  }

  entryClass(type: string): string {
    if (['CASH_IN', 'BANK_DEPOSIT'].includes(type)) return 'entry-in';
    if (['CASH_OUT', 'TRANSFER_PAYOUT'].includes(type)) return 'entry-out';
    if (type === 'EXCHANGE') return 'entry-exchange';
    if (type === 'PROFIT') return 'entry-profit';
    return '';
  }

  isPositive(type: string): boolean {
    return ['CASH_IN', 'BANK_DEPOSIT', 'PROFIT'].includes(type);
  }

  getBranch(): string {
    return this.selectedBranch || this.auth.user()?.branch || '';
  }

  openBankDeposit() {
    this.bankDepositEntries = [{ currency: 'EUR', amount: 0 }];
    this.bankDepositNote = '';
    if (this.branches().length) this.bankDepositBranch = this.getBranch() || this.branches()[0].name;
    this.showBankDeposit.set(true);
  }

  openDayClose() {
    this.dayCloseBranch = this.getBranch() || (this.branches()[0]?.name ?? '');
    this.dayCloseDate = new Date().toISOString().split('T')[0];
    this.dayCloseNote = '';
    this.prepareDayCloseEntries();
    this.showDayClose.set(true);
  }

  prepareDayCloseEntries() {
    const branch = this.branches().find(b => b.name === this.dayCloseBranch);
    const balances = branch?.balances ?? [{ currency: 'EUR', amount: branch?.cashBalance ?? 0 }];
    // counted starts at 0 — user must physically count first!
    this.dayCloseEntries = balances.map(b => ({ currency: b.currency, expected: b.amount, counted: 0, diff: -b.amount }));
  }

  doDeposit() {
    const branch = this.getBranch();
    if (!branch || this.amount <= 0) { this.toast.error(this.i18n.t().mustBePositive); return; }
    this.svc.deposit({ amount: this.amount, currency: this.depositCurrency, note: this.note, branch }).subscribe({
      next: () => { this.toast.success(this.i18n.t().deposit); this.showDeposit.set(false); this.amount = 0; this.note = ''; this.reload(); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  doWithdraw() {
    const branch = this.getBranch();
    if (!branch || this.amount <= 0) { this.toast.error(this.i18n.t().mustBePositive); return; }
    this.svc.withdraw({ amount: this.amount, currency: this.depositCurrency, note: this.note, branch }).subscribe({
      next: () => { this.toast.success(this.i18n.t().withdraw); this.showWithdraw.set(false); this.amount = 0; this.note = ''; this.reload(); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  doBankDeposit() {
    const entries = this.bankDepositEntries.filter(e => e.amount > 0);
    if (!entries.length) { this.toast.error(this.i18n.t().mustBePositive); return; }
    this.svc.bankDeposit({ branch: this.bankDepositBranch, entries, note: this.bankDepositNote }).subscribe({
      next: () => { this.toast.success(this.i18n.t().bankDepositCreated); this.showBankDeposit.set(false); this.reload(); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  doDayClose() {
    this.svc.dayClose({ branch: this.dayCloseBranch, date: this.dayCloseDate, entries: this.dayCloseEntries, note: this.dayCloseNote }).subscribe({
      next: () => { this.toast.success(this.i18n.t().dayCloseDone); this.showDayClose.set(false); this.reload(); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }
}
