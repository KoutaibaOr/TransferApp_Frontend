import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CashService, BranchService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { AuthService } from '../../core/services/auth.service';
import { CashJournalEntry, Branch } from '../../core/models';

@Component({
  selector: 'app-cash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .cash-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
    .balance-big { font-family: 'Syne', sans-serif; font-size: 2.5rem; font-weight: 800; color: var(--accent2); }
    .action-btns { display: flex; gap: .75rem; margin-top: 1rem; }
    .journal-entry { display: flex; align-items: center; gap: .75rem; padding: .65rem .75rem; border-radius: var(--radius-sm); background: var(--bg); margin-bottom: .4rem; }
    .entry-amount { font-weight: 700; }
    .entry-amount.in  { color: var(--accent2); }
    .entry-amount.out { color: var(--red); }
    .color-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; display: inline-block; }
    @media (max-width: 768px) { .cash-grid { grid-template-columns: 1fr; } }
  `],
  template: `
    <div class="page-header">
      <div>
        <h1 class="page-title">{{ t().cash }}</h1>
        <p class="page-subtitle">{{ t().cashbookOverview }}</p>
      </div>
    </div>

    <!-- FIX 7: Admin darf Filiale wählen -->
    @if (auth.isAdmin()) {
      <div style="margin-bottom:1rem">
        <select class="form-control" style="max-width:250px" [(ngModel)]="selectedBranch" (change)="loadBalance()">
          @for (b of branches(); track b.id) {
            <option [value]="b.name">{{ b.name }}</option>
          }
        </select>
      </div>
    }

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon green">💶</div>
        <div>
          <div class="kpi-label">{{ t().balance }}</div>
          <div class="kpi-value">€ {{ balance() | number:'1.0-0' }}</div>
          <div class="kpi-sub">{{ selectedBranch || auth.user()?.branch || t().allBranches }}</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon blue">🏦</div>
        <div>
          <div class="kpi-label">{{ t().activeBranches }}</div>
          <div class="kpi-value">{{ branches().length }}</div>
        </div>
      </div>
    </div>

    <div class="cash-grid">
      <div class="card">
        <div class="card-header"><span class="card-title">{{ t().cashMovements }}</span></div>
        <div class="action-btns">
          <button class="btn btn-success" (click)="showDeposit.set(true)">＋ {{ t().deposit }}</button>
          <button class="btn btn-danger"  (click)="showWithdraw.set(true)">− {{ t().withdraw }}</button>
        </div>
        <div style="margin-top:1rem">
          @for (e of journal(); track e.id) {
            <div class="journal-entry">
              <span class="entry-amount" [class.in]="e.type==='CASH_IN'" [class.out]="e.type==='CASH_OUT'">
                {{ e.type==='CASH_IN' ? '+' : '−' }}€ {{ e.amount | number:'1.2-2' }}
              </span>
              <span class="text-muted" style="flex:1;font-size:.8rem">{{ e.note || e.type }}</span>
              <span class="text-muted" style="font-size:.75rem">{{ e.createdAt | date:'dd.MM HH:mm' }}</span>
            </div>
          } @empty {
            <p class="text-muted" style="text-align:center;padding:1rem">{{ t().noEntries }}</p>
          }
        </div>
      </div>

      <div class="card">
        <div class="card-header"><span class="card-title">{{ t().branches }}</span></div>
        @for (b of branches(); track b.id) {
          <div class="journal-entry">
            <!-- FIX 3: [style.background] statt {{b.color}} in style="" -->
            <span class="color-dot" [style.background]="b.color"></span>
            <div style="flex:1">
              <div style="font-weight:600;font-size:.875rem">{{ b.name }}</div>
              <div style="font-size:.75rem;color:var(--muted)">{{ b.city }}</div>
            </div>
            <span style="font-family:'Syne',sans-serif;font-weight:700;color:var(--accent2)">€ {{ b.cashBalance | number:'1.0-0' }}</span>
          </div>
        }
      </div>
    </div>

    @if (showDeposit()) {
      <div class="modal-backdrop" (click)="showDeposit.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">{{ t().deposit }}</span><button class="btn btn-icon" (click)="showDeposit.set(false)">✕</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">{{ t().amount }} (€)</label><input class="form-control" type="number" [(ngModel)]="amount" min="0" /></div>
            <div class="form-group"><label class="form-label">{{ t().note }}</label><input class="form-control" [(ngModel)]="note" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showDeposit.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-success" (click)="doDeposit()">{{ t().deposit }}</button>
          </div>
        </div>
      </div>
    }
    @if (showWithdraw()) {
      <div class="modal-backdrop" (click)="showWithdraw.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">{{ t().withdraw }}</span><button class="btn btn-icon" (click)="showWithdraw.set(false)">✕</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">{{ t().amount }} (€)</label><input class="form-control" type="number" [(ngModel)]="amount" min="0" /></div>
            <div class="form-group"><label class="form-label">{{ t().note }}</label><input class="form-control" [(ngModel)]="note" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showWithdraw.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-danger" (click)="doWithdraw()">{{ t().withdraw }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class CashComponent implements OnInit {
  balance      = signal(0);
  journal      = signal<CashJournalEntry[]>([]);
  branches     = signal<Branch[]>([]);
  showDeposit  = signal(false);
  showWithdraw = signal(false);
  amount = 0; note = '';
  selectedBranch = '';

  constructor(
    private svc: CashService, private branchSvc: BranchService,
    private toast: ToastService, public i18n: I18nService, public auth: AuthService
  ) {}
  t = this.i18n.t;

  ngOnInit() {
    this.branchSvc.getAll().subscribe(b => {
      this.branches.set(b);
      // FIX 7: Admin bekommt erste Filiale als Standard
      if (this.auth.isAdmin() && b.length > 0) {
        this.selectedBranch = b[0].name;
      }
    });
    this.loadBalance();
    this.svc.getJournal().subscribe(r => this.journal.set(r.data));
  }

  loadBalance() {
    const branch = this.auth.isAdmin() ? this.selectedBranch : (this.auth.user()?.branch ?? '');
    if (branch) {
      this.svc.getBalance(branch).subscribe((r: { branch: string; balance: number }) => this.balance.set(r.balance));
    }
  }

  getBranch(): string {
    return this.auth.isAdmin() ? this.selectedBranch : (this.auth.user()?.branch ?? '');
  }

  doDeposit() {
    const branch = this.getBranch();
    if (!branch) { this.toast.error(this.i18n.t().allBranches); return; }
    if (this.amount <= 0) { this.toast.error(this.i18n.t().mustBePositive); return; }
    this.svc.deposit({ amount: this.amount, note: this.note, branch }).subscribe({
      next: () => { this.toast.success(this.i18n.t().deposit); this.showDeposit.set(false); this.reload(); },
      error: (e) => this.toast.error(e.error?.message || this.i18n.t().statusUpdateError),
    });
  }

  doWithdraw() {
    const branch = this.getBranch();
    if (!branch) { this.toast.error(this.i18n.t().allBranches); return; }
    if (this.amount <= 0) { this.toast.error(this.i18n.t().mustBePositive); return; }
    this.svc.withdraw({ amount: this.amount, note: this.note, branch }).subscribe({
      next: () => { this.toast.success(this.i18n.t().withdraw); this.showWithdraw.set(false); this.reload(); },
      error: (e) => this.toast.error(e.error?.message || this.i18n.t().statusUpdateError),
    });
  }

  reload() {
    this.loadBalance();
    this.svc.getJournal().subscribe(r => this.journal.set(r.data));
    this.branchSvc.getAll().subscribe(b => this.branches.set(b));
  }
}
