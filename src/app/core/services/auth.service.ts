import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse, User } from '../models';

const TOKEN_KEY = 'gt_token';
const USER_KEY  = 'gt_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user   = signal<User | null>(this.loadUser());
  private _token  = signal<string | null>(localStorage.getItem(TOKEN_KEY));

  readonly user           = this._user.asReadonly();
  readonly token          = this._token.asReadonly();
  readonly isLoggedIn     = computed(() => !!this._token());
  readonly isAdmin        = computed(() => this._user()?.role === 'admin');
  readonly isManager      = computed(() => this._user()?.role === 'branch_manager');
  readonly isEmployee     = computed(() => this._user()?.role === 'employee');
  readonly isAdminOrManager = computed(() =>
    this._user()?.role === 'admin' || this._user()?.role === 'branch_manager'
  );
  readonly isAccountant = computed(() => this._user()?.role === 'accountant');
  readonly canBook = computed(() => {
    const u = this._user();
    if (!u) return false;
    if (u.role === 'admin') return true;
    return u.role === 'accountant' && !!(u as any).canBook;
  });

  constructor(private http: HttpClient, private router: Router) {}

  login(req: LoginRequest) {
    console.log('🔐 LOGIN REQUEST:', req); // DEBUG
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/auth/login`, req)
      .pipe(
        tap(res => {
          console.log('✅ LOGIN SUCCESS:', res); // DEBUG
          localStorage.setItem(TOKEN_KEY, res.access_token);
          localStorage.setItem(USER_KEY,  JSON.stringify(res.user));
          this._token.set(res.access_token);
          this._user.set(res.user);
        }),
      );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null { return this._token(); }

  private loadUser(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }
}
