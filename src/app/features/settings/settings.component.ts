import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';
import { FeeRule, Currency, User } from '../../core/models';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
    .user-row { display:flex;align-items:center;gap:.75rem;padding:.65rem;background:var(--bg);border-radius:var(--radius-sm);margin-bottom:.4rem; }
    .u-avatar { width:34px;height:34px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#fff;flex-shrink:0; }
    @media(max-width:900px){.settings-grid{grid-template-columns:1fr;}}
  `],
  template: `
    <div class="page-header">
      <h1 class="page-title">{{ t().settings }}</h1>
    </div>
    <div class="tabs">
      <button class="tab-btn" [class.active]="tab()==='fees'"    (click)="tab.set('fees')">Gebührenregeln</button>
      <button class="tab-btn" [class.active]="tab()==='users'"   (click)="tab.set('users')">Benutzer</button>
      <button class="tab-btn" [class.active]="tab()==='currencies'" (click)="tab.set('currencies')">Währungen</button>
    </div>

    @if (tab()==='fees') {
      <div class="card" style="padding:0">
        <div class="card-header" style="padding:1.25rem 1.5rem">
          <span class="card-title">Gebührenregeln</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Land</th><th>Währung</th><th>Typ</th><th>Wert</th><th>Status</th><th>Aktionen</th></tr></thead>
            <tbody>
              @for (r of feeRules(); track r.id) {
                <tr>
                  <td class="fw-600">{{ r.country }}</td>
                  <td>{{ r.currency }}</td>
                  <td><span class="badge badge-created">{{ r.type }}</span></td>
                  <td>{{ r.value }}{{ r.type === 'PERCENT' ? '%' : ' €' }}</td>
                  <td><span class="badge" [class]="r.active ? 'badge-completed' : 'badge-cancelled'">{{ r.active ? 'Aktiv' : 'Inaktiv' }}</span></td>
                  <td><button class="btn btn-danger btn-sm" (click)="deleteFeeRule(r.id)">Löschen</button></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    @if (tab()==='users') {
      <div class="card">
        <div class="card-header"><span class="card-title">Benutzer</span><button class="btn btn-primary btn-sm" (click)="showNewUser.set(true)">＋ Neuer Benutzer</button></div>
        @for (u of users(); track u.id) {
          <div class="user-row">
            <div class="u-avatar">{{ u.initials }}</div>
            <div style="flex:1">
              <div class="fw-600" style="font-size:.875rem">{{ u.name }}</div>
              <div style="font-size:.75rem;color:var(--muted)">{{ u.email }} · {{ u.branch ?? 'Admin' }}</div>
            </div>
            <span class="badge" [class]="u.role === 'admin' ? 'badge-in_progress' : 'badge-created'">{{ u.role }}</span>
            <span class="badge" [class]="u.active ? 'badge-completed' : 'badge-cancelled'">{{ u.active ? 'Aktiv' : 'Inaktiv' }}</span>
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
                  <td><span class="badge" [class]="c.active ? 'badge-completed' : 'badge-cancelled'">{{ c.active ? 'Aktiv' : 'Inaktiv' }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }

    @if (showNewUser()) {
      <div class="modal-backdrop" (click)="showNewUser.set(false)">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header"><span class="modal-title">Neuer Benutzer</span><button class="btn btn-icon" (click)="showNewUser.set(false)">✕</button></div>
          <div class="modal-body">
            <div class="form-group"><label class="form-label">Name</label><input class="form-control" [(ngModel)]="newUser.name" /></div>
            <div class="form-group"><label class="form-label">E-Mail</label><input class="form-control" type="email" [(ngModel)]="newUser.email" /></div>
            <div class="form-group"><label class="form-label">Passwort</label><input class="form-control" type="password" [(ngModel)]="newUser.password" /></div>
            <div class="form-group"><label class="form-label">Rolle</label><select class="form-control" [(ngModel)]="newUser.role"><option value="user">User</option><option value="admin">Admin</option></select></div>
            <div class="form-group"><label class="form-label">Filiale</label><input class="form-control" [(ngModel)]="newUser.branch" placeholder="Berlin-Mitte" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" (click)="showNewUser.set(false)">Abbrechen</button>
            <button class="btn btn-primary" (click)="createUser()">Anlegen</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class SettingsComponent implements OnInit {
  tab         = signal<'fees'|'users'|'currencies'>('fees');
  feeRules    = signal<FeeRule[]>([]);
  users       = signal<User[]>([]);
  currencies  = signal<Currency[]>([]);
  showNewUser = signal(false);
  newUser: any = { name:'', email:'', password:'', role:'user', branch:'' };

  constructor(private svc: SettingsService, private toast: ToastService, public i18n: I18nService) {}
  t = this.i18n.t;

  ngOnInit() {
    this.svc.getFeeRules().subscribe(r => this.feeRules.set(r));
    this.svc.getUsers().subscribe(u => this.users.set(u));
    this.svc.getCurrencies().subscribe(c => this.currencies.set(c));
  }

  deleteFeeRule(id: string) {
    if (!confirm('Löschen?')) return;
    this.svc.deleteFeeRule(id).subscribe({
      next: () => { this.toast.success('Gelöscht'); this.svc.getFeeRules().subscribe(r => this.feeRules.set(r)); },
      error: () => this.toast.error('Fehler'),
    });
  }

  createUser() {
    this.svc.createUser(this.newUser).subscribe({
      next: () => { this.toast.success('Benutzer angelegt'); this.showNewUser.set(false); this.svc.getUsers().subscribe(u => this.users.set(u)); },
      error: () => this.toast.error('Fehler'),
    });
  }
}
