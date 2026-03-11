import { Component, signal, computed } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { I18nService } from '../../../core/services/i18n.service';

interface NavItem {
  path:  string;
  icon:  string;
  key:   keyof ReturnType<I18nService['t']>;
  admin?: boolean;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  styleUrl: 'layout.component.css',
  template: `
    <!-- Mobile overlay -->
    <div class="sidebar-overlay" [class.open]="sidebarOpen()" (click)="closeSidebar()"></div>

    <div class="shell" [class.rtl]="i18n.isRtl()">
      <!-- ── Sidebar ── -->
      <aside class="sidebar" [class.open]="sidebarOpen()">
        <!-- Logo -->
        <div class="sidebar-logo">
          <span class="logo-text">Geld<span class="logo-accent">Transfer</span></span>
          <span class="logo-badge">{{ roleBadge() }}</span>
        </div>

        <!-- User Card -->
        <div class="user-card">
          <div class="user-avatar">{{ auth.user()?.initials }}</div>
          <div class="user-info">
            <div class="user-name">{{ auth.user()?.name }}</div>
            <div class="user-branch">{{ auth.user()?.branch ?? t().allBranches }}</div>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="sidebar-nav">
          <div class="nav-section">OVERVIEW</div>
          <a class="nav-item" routerLink="/dashboard" routerLinkActive="active" (click)="closeSidebar()">
            🏠 <span>{{ t().dashboard }}</span>
          </a>

          <div class="nav-section">TRANSFERS</div>
          <a class="nav-item" routerLink="/transfers" routerLinkActive="active" (click)="closeSidebar()">
            💳 <span>{{ t().transfers }}</span>
          </a>
          <a class="nav-item" routerLink="/customers" routerLinkActive="active" (click)="closeSidebar()">
            👥 <span>{{ t().customers }}</span>
          </a>

          <div class="nav-section">FINANZEN</div>
          <a class="nav-item" routerLink="/cash" routerLinkActive="active" (click)="closeSidebar()">
            🏦 <span>{{ t().cash }}</span>
          </a>
          @if (auth.isAdminOrManager() || auth.isAccountant()) {
            <a class="nav-item" routerLink="/exchange" routerLinkActive="active" (click)="closeSidebar()">
              💱 <span>{{ t().exchange }}</span>
            </a>
            <a class="nav-item" routerLink="/reports" routerLinkActive="active" (click)="closeSidebar()">
              📊 <span>{{ t().reports }}</span>
            </a>
          }

          @if (auth.isAdmin()) {
            <div class="nav-section">ADMINISTRATION</div>
            <a class="nav-item" routerLink="/settings" routerLinkActive="active" (click)="closeSidebar()">
              ⚙️ <span>{{ t().settings }}</span>
            </a>
            <a class="nav-item" routerLink="/audit" routerLinkActive="active" (click)="closeSidebar()">
              📋 <span>{{ t().audit }}</span>
            </a>
          }
        </nav>

        <!-- Lang Toggle -->
        <div class="lang-toggle">
          <button [class.active]="i18n.lang()==='en'" (click)="i18n.setLang('en')">EN</button>
          <button [class.active]="i18n.lang()==='ar'" (click)="i18n.setLang('ar')">AR</button>
        </div>

        <!-- Logout -->
        <button class="logout-btn" (click)="auth.logout()">
          🚪 {{ t().logout }}
        </button>
      </aside>

      <!-- ── Main ── -->
      <div class="main">
        <!-- Topbar -->
        <header class="topbar">
          <button class="hamburger" (click)="toggleSidebar()">
            <span></span><span></span><span></span>
          </button>
          <div class="topbar-title">GeldTransfer</div>
          <div class="topbar-right">
            <span class="topbar-user">{{ auth.user()?.name }}</span>
          </div>
        </header>

        <!-- Page Content -->
        <main class="content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  sidebarOpen = signal(false);

  readonly roleBadge = computed(() => {
    const role = this.auth.user()?.role;
    if (role === 'admin')          return 'Admin';
    if (role === 'branch_manager') return 'Manager';
    if (role === 'accountant')     return 'Buchhalter';
    return 'Employee';
  });

  constructor(
    public auth: AuthService,
    public i18n: I18nService,
  ) {}

  t = this.i18n.t;

  toggleSidebar() { this.sidebarOpen.update(v => !v); }
  closeSidebar()  { this.sidebarOpen.set(false); }
}
