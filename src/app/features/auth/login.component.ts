import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  styleUrl: 'login.component.css',
  template: `
    <div class="login-page">
      <div class="login-card">
        <!-- Logo -->
        <div class="login-logo">
          <span>Geld</span><span class="accent">Transfer</span>
        </div>
        <p class="login-sub">Management System</p>

        <!-- Form -->
        <div class="login-form">
          <div class="form-group">
            <label class="form-label">{{ i18n.t().email }}</label>
            <input class="form-control" type="email" [(ngModel)]="email"
                   placeholder="admin@firma.de" (keyup.enter)="doLogin()" />
          </div>
          <div class="form-group">
            <label class="form-label">{{ i18n.t().password }}</label>
            <input class="form-control" type="password" [(ngModel)]="password"
                   placeholder="••••••••" (keyup.enter)="doLogin()" />
          </div>

          @if (error()) {
            <div class="login-error">{{ error() }}</div>
          }

          <button class="btn btn-primary w-full" [disabled]="loading()" (click)="doLogin()">
            {{ loading() ? i18n.t().loggingIn : i18n.t().signIn }}
          </button>
        </div>

        <!-- Demo hint -->
        <div class="demo-hint">
          <p>{{ i18n.t().demoAdmin }}</p>
          <p>{{ i18n.t().demoUser }}</p>
        </div>

        <!-- Lang -->
        <div class="lang-row">
          <button [class.active]="i18n.lang()==='de'" (click)="i18n.setLang('de')">DE</button>
          <button [class.active]="i18n.lang()==='en'" (click)="i18n.setLang('en')">EN</button>
          <button [class.active]="i18n.lang()==='ar'" (click)="i18n.setLang('ar')">AR</button>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  email    = '';
  password = '';
  loading  = signal(false);
  error    = signal('');

  constructor(
    private auth:   AuthService,
    private toast:  ToastService,
    private router: Router,
    public  i18n:   I18nService,
  ) {
    if (this.auth.isLoggedIn()) this.router.navigate(['/dashboard']);
  }

  doLogin() {
    if (!this.email || !this.password) { this.error.set(this.i18n.t().emailRequired); return; }
    this.loading.set(true);
    this.error.set('');

    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => { this.toast.success(this.i18n.t().welcome); this.router.navigate(['/dashboard']); },
      error: () => { this.error.set(this.i18n.t().invalidCredentials); this.loading.set(false); },
    });
  }
}
