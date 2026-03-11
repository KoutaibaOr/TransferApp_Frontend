import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsService, BranchService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { AuthService } from '../../core/services/auth.service';
import { FeeRule, Currency, User, Branch } from '../../core/models';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
    .user-row { display:flex;align-items:center;gap:.75rem;padding:.65rem;background:var(--bg);border-radius:var(--radius-sm);margin-bottom:.4rem; }
    .u-avatar { width:34px;height:34px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#fff;flex-shrink:0; }
    .branch-card { display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--bg);border-radius:var(--radius-sm);margin-bottom:.5rem;border:1px solid var(--border); }
    .branch-dot { width:12px;height:12px;border-radius:50%;flex-shrink:0; }
    @media(max-width:900px){.settings-grid{grid-template-columns:1fr;}}
  `],
  template: `
    <div class="page-header">
      <h1 class="page-title">{{ t().settings }}</h1>
    </div>
    <div class="tabs">
      <button class="tab-btn" [class.active]="tab()==='fees'"     (click)="tab.set('fees')">{{ t().feeRules }}</button>
      <button class="tab-btn" [class.active]="tab()==='users'"    (click)="tab.set('users')">{{ t().users }}</button>
      <button class="tab-btn" [class.active]="tab()==='branches'" (click)="tab.set('branches')">{{ t().manageBranches }}</button>
      <button class="tab-btn" [class.active]="tab()==='currencies'" (click)="tab.set('currencies')">{{ t().currencies }}</button>
    </div>

    @if (tab()==='fees') {
      <div class="card" style="padding:0">
        <div class="card-header" style="padding:1.25rem 1.5rem">
          <span class="card-title">{{ t().feeRules }}</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>{{ t().country }}</th><th>{{ t().currency }}</th><th>{{ t().type }}</th><th>{{ t().value }}</th><th>{{ t().status }}</th><th>{{ t().actions }}</th></tr></thead>
            <tbody>
              @for (r of feeRules(); track r.id) {
                <tr>
                  <td class="fw-600">{{ r.country }}</td>
                  <td>{{ r.currency }}</td>
                  <td><span class="badge badge-created">{{ r.type }}</span></td>
                  <td>{{ r.value }}{{ r.type === 'PERCENT' ? '%' : ' €' }}</td>
                  <td><span class="badge" [class]="r.active ? 'badge-completed' : 'badge-cancelled'">{{ r.active ? t().active : t().inactive }}</span></td>
                  <td><button class="btn btn-danger btn-sm" (click)="deleteFeeRule(r.id)">{{ t().delete }}</button></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    @if (tab()==='users') {
      <div class="card">
        <div class="card-header"><span class="card-title">{{ t().users }}</span><button class="btn btn-primary btn-sm" (click)="showNewUser.set(true)">＋ {{ t().newUser }}</button></div>
            @for (u of users(); track u.id) {
              <div class="user-row">
                <div class="u-avatar">{{ u.initials }}</div>
                <div style="flex:1">
                  <div class="fw-600" style="font-size:.875rem">{{ u.name }}</div>
                  <div style="font-size:.75rem;color:var(--muted)">{{ u.email }} · {{ u.branch ?? 'Admin' }}</div>
                </div>
                <span class="badge" [class]="u.role === 'admin' ? 'badge-in_progress' : u.role === 'branch_manager' ? 'badge-completed' : u.role === 'accountant' ? 'badge-paid_out' : 'badge-created'">{{ u.role === 'admin' ? t().roleAdmin : u.role === 'branch_manager' ? t().roleBranchManager : u.role === 'accountant' ? t().roleAccountant : t().roleEmployee }}</span>
                <span class="badge" [class]="u.active ? 'badge-completed' : 'badge-cancelled'">{{ u.active ? t().active : t().inactive }}</span>
                <button class="btn btn-danger btn-sm" (click)="deleteUser(u.id, u.role, u.name)" [title]="t().delete">✕</button>
              </div>
            }
      </div>
    }

    @if (tab()==='currencies') {
      <div class="card" style="padding:0">
        <div class="table-wrap">
          <table>
            <thead><tr><th>Code</th><th>Name</th><th>Symbol</th><th>Status</th></tr></thead>
            <tbody>
              @for (c of currencies(); track c.id) {
                <tr>
                  <td><span class="fw-600">{{ c.flag }} {{ c.code }}</span></td>
                  <td>{{ c.name }}</td>
                  <td>{{ c.symbol }}</td>
                  <td><span class="badge" [class]="c.active ? 'badge-completed' : 'badge-cancelled'">{{ c.active ? t().active : t().inactive }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    <!-- ── BRANCHES TAB ──────────────────────────────────────── -->
    @if (tab()==='branches') {
      <div class="card">
        <div class="card-header">
          <span class="card-title">{{ t().manageBranches }}</span>
          <button class="btn btn-primary btn-sm" (click)="showNewBranch.set(true)">＋ {{ t().newBranch }}</button>
        </div>
        @if (!branches().length) {
          <div class="empty-state"><div class="empty-icon">🏢</div><h3>{{ t().noBranches }}</h3></div>
        }
        @for (b of branches(); track b.id) {
          <div class="branch-card">
            <div class="branch-dot" [style.background]="b.color || 'var(--accent)'"></div>
            <div style="flex:1">
              <div class="fw-600" style="font-size:.9rem">{{ b.name }}</div>
              <div style="font-size:.75rem;color:var(--muted)">{{ b.city }} · {{ t().manager }}: {{ b.managerName ?? t().noneAssigned }}</div>
            </div>
            <div style="text-align:right;min-width:110px">
              <div class="fw-600" style="font-size:.85rem;color:var(--accent2)">€ {{ b.cashBalance | number:'1.2-2' }}</div>
              <div style="font-size:.72rem;color:var(--muted)">{{ t().balance }}</div>
            </div>
            <span class="badge" [class]="b.active ? 'badge-completed' : 'badge-cancelled'">{{ b.active ? t().active : t().inactive }}</span>
            <button class="btn btn-danger btn-sm" (click)="deleteBranch(b.id, b.name)">✕</button>
          </div>
        }
      </div>
    }

    <!-- ── NEW BRANCH MODAL ──────────────────────────────────── -->
    @if (showNewBranch()) {
      <div class="modal-backdrop" (click)="showNewBranch.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <span class="modal-title">{{ t().newBranch }}</span>
            <button class="btn btn-icon" (click)="showNewBranch.set(false)">✕</button>
          </div>
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group"><label class="form-label">{{ t().branchName }}</label><input class="form-control" [(ngModel)]="newBranchDto.name" /></div>
              <div class="form-group"><label class="form-label">{{ t().branchCity }}</label><input class="form-control" [(ngModel)]="newBranchDto.city" /></div>
              <div class="form-group"><label class="form-label">{{ t().branchPhone }}</label><input class="form-control" [(ngModel)]="newBranchDto.phone" /></div>
              <div class="form-group"><label class="form-label">{{ t().branchAddress }}</label><input class="form-control" [(ngModel)]="newBranchDto.address" /></div>
            </div>
            <div class="form-group" style="margin-top:.75rem">
              <label class="form-label">{{ t().branchManager }}</label>
              <select class="form-control" [(ngModel)]="newBranchDto.managerId">
                <option value="">— {{ t().noneAssigned }} —</option>
                @for (u of managers(); track u.id) {
                  <option [value]="u.id">{{ u.name }} ({{ u.email }})</option>
                }
              </select>
            </div>
            <div class="form-group" style="margin-top:.75rem">
              <label class="form-label" style="margin-bottom:.5rem">{{ t().cashPerCurrency }}</label>
              @for (bal of newBranchBalances; track bal.currency; let i = $index) {
                <div style="display:flex;gap:.5rem;margin-bottom:.4rem;align-items:center">
                  <select class="form-control" style="width:100px" [(ngModel)]="bal.currency">
                    @for (c of currencies(); track c.code) {
                      <option [value]="c.code">{{ c.code }}</option>
                    }
                  </select>
                  <input class="form-control" type="number" min="0" step="0.01" [(ngModel)]="bal.amount" placeholder="0.00" />
                  <button class="btn btn-danger btn-sm" (click)="removeBranchBalance(i)">✕</button>
                </div>
              }
              <button class="btn btn-ghost btn-sm" style="margin-top:.25rem" (click)="addBranchBalance()">＋ {{ t().addCurrency }}</button>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNewBranch.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="createBranch()">{{ t().newBranch }}</button>
          </div>
        </div>
      </div>
    }

    @if (showNewUser()) {
      <div class="modal-backdrop" (click)="showNewUser.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">{{ t().newUser }}</span><button class="btn btn-icon" (click)="showNewUser.set(false)">✕</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">Name</label><input class="form-control" [(ngModel)]="newUser.name" /></div>
            <div class="form-group"><label class="form-label">{{ t().email }}</label><input class="form-control" type="email" [(ngModel)]="newUser.email" /></div>
            <div class="form-group"><label class="form-label">{{ t().password }}</label><input class="form-control" type="password" [(ngModel)]="newUser.password" /></div>
            <div class="form-group"><label class="form-label">{{ t().role }}</label><select class="form-control" [(ngModel)]="newUser.role">
              <option value="employee">{{ t().roleEmployee }}</option>
              <option value="branch_manager">{{ t().roleBranchManager }}</option>
              <option value="accountant">{{ t().roleAccountant }}</option>
              <option value="admin">{{ t().roleAdmin }}</option>
            </select></div>
            @if (newUser.role === 'accountant') {
              <div class="form-group" style="background:var(--bg);padding:.75rem;border-radius:var(--radius-sm);border:1px solid var(--border)">
                <label style="display:flex;align-items:center;gap:.5rem;cursor:pointer;font-size:.875rem">
                  <input type="checkbox" [(ngModel)]="newUser.canBook" style="width:16px;height:16px" />
                  <span class="fw-600">{{ t().canBook }}</span>
                </label>
                <p style="font-size:.75rem;color:var(--muted);margin:.25rem 0 0 1.5rem">{{ t().canBookHint }}</p>
              </div>
            }
            <div class="form-group"><label class="form-label">{{ t().branch }}</label><input class="form-control" [(ngModel)]="newUser.branch" placeholder="Berlin-Mitte" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNewUser.set(false)">{{ t().cancel }}</button>
            <button class="btn btn-primary" (click)="createUser()">{{ t().createUser }}</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class SettingsComponent implements OnInit {
  tab           = signal<'fees'|'users'|'branches'|'currencies'>('fees');
  feeRules      = signal<FeeRule[]>([]);
  users         = signal<User[]>([]);
  currencies    = signal<Currency[]>([]);
  branches      = signal<Branch[]>([]);
  showNewUser   = signal(false);
  showNewBranch = signal(false);
  newUser: any  = { name:'', email:'', password:'', role:'employee', branch:'', canBook: false };
  newBranchDto: any = { name:'', city:'', phone:'', address:'', managerId:'' };
  newBranchBalances: { currency: string; amount: number }[] = [{ currency: 'EUR', amount: 0 }];

  // only branch_manager users for manager dropdown
  managers = computed(() => this.users().filter(u => u.role === 'branch_manager'));

  constructor(
    private svc:        SettingsService,
    private branchSvc:  BranchService,
    private toast:      ToastService,
    public  i18n:       I18nService,
    public  auth:       AuthService,
  ) {}
  t = this.i18n.t;

  ngOnInit() {
    this.svc.getFeeRules().subscribe(r => this.feeRules.set(r));
    this.svc.getUsers().subscribe(u => this.users.set(u));
    this.svc.getCurrencies().subscribe(c => this.currencies.set(c));
    this.branchSvc.getAll().subscribe(b => this.branches.set(b));
  }

  deleteFeeRule(id: string) {
    if (!confirm(this.i18n.t().delete + '?')) return;
    this.svc.deleteFeeRule(id).subscribe({
      next: () => { this.toast.success(this.i18n.t().delete + 'd'); this.svc.getFeeRules().subscribe(r => this.feeRules.set(r)); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }

  deleteUser(userId: string, userRole: string, userName: string) {
    // Permission check: only admins can delete users
    if (!this.auth.isAdmin()) {
      this.toast.error(this.i18n.t().statusUpdateError);
      return;
    }

    // Prevent self-deletion
    if (this.auth.user()?.id === userId) {
      this.toast.error(this.i18n.t().cancelError);
      return;
    }

    // Show confirmation
    const msg = `${this.i18n.t().delete} "${userName}"?`;

    if (!confirm(msg)) return;

    // Call delete API
    this.svc.deleteUser(userId).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().delete + 'd');
        this.svc.getUsers().subscribe(u => this.users.set(u));
      },
      error: (err: any) => {
        const msg = err.error?.message || this.i18n.t().statusUpdateError;
        this.toast.error(msg);
      },
    });
  }

  createUser() {
    this.svc.createUser(this.newUser).subscribe({
      next: () => { this.toast.success(this.i18n.t().customerCreated); this.showNewUser.set(false); this.svc.getUsers().subscribe(u => this.users.set(u)); },
      error: () => this.toast.error(this.i18n.t().creationError),
    });
  }

  addBranchBalance() {
    const used = this.newBranchBalances.map(b => b.currency);
    const next = this.currencies().find(c => !used.includes(c.code));
    if (next) this.newBranchBalances.push({ currency: next.code, amount: 0 });
  }

  removeBranchBalance(i: number) {
    this.newBranchBalances.splice(i, 1);
  }

  createBranch() {
    if (!this.newBranchDto.name) { this.toast.error(this.i18n.t().requiredField); return; }
    const dto = { ...this.newBranchDto, balances: this.newBranchBalances.filter(b => b.amount > 0), cashBalance: this.newBranchBalances.find(b => b.currency === 'EUR')?.amount ?? 0 };
    this.branchSvc.create(dto).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().branchCreated);
        this.showNewBranch.set(false);
        this.newBranchDto = { name:'', city:'', phone:'', address:'', managerId:'' };
        this.newBranchBalances = [{ currency: 'EUR', amount: 0 }];
        this.branchSvc.getAll().subscribe(b => this.branches.set(b));
      },
      error: () => this.toast.error(this.i18n.t().creationError),
    });
  }

  deleteBranch(id: string, name: string) {
    if (!confirm(`${this.i18n.t().confirmDeleteBranch} "${name}"?`)) return;
    this.branchSvc.delete(id).subscribe({
      next: () => { this.toast.success(this.i18n.t().branchDeleted); this.branchSvc.getAll().subscribe(b => this.branches.set(b)); },
      error: () => this.toast.error(this.i18n.t().statusUpdateError),
    });
  }
}
