import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { I18nService } from '../../../core/services/i18n.service';
import { NotificationService } from '../../../core/services/api.service';
import { TransferNotification } from '../../../core/models';

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
          <div class="nav-section">{{ t().navOverview }}</div>
          <a class="nav-item" routerLink="/dashboard" routerLinkActive="active" (click)="closeSidebar()">
            🏠 <span>{{ t().dashboard }}</span>
          </a>

          <div class="nav-section">{{ t().navTransfers }}</div>
          <a class="nav-item" routerLink="/transfers" routerLinkActive="active" (click)="closeSidebar()">
            💳 <span>{{ t().transfers }}</span>
            @if (unreadCount() > 0) {
              <span class="nav-badge">{{ unreadCount() }}</span>
            }
          </a>
          <a class="nav-item" routerLink="/customers" routerLinkActive="active" (click)="closeSidebar()">
            👥 <span>{{ t().customers }}</span>
          </a>

          <div class="nav-section">{{ t().navFinances }}</div>
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
            <a class="nav-item" routerLink="/settlements" routerLinkActive="active" (click)="closeSidebar()">
              ⚖️ <span>{{ t().settlements }}</span>
            </a>
          }

          @if (auth.isAdmin() || auth.isAccountant()) {
            <a class="nav-item" routerLink="/bookkeeping" routerLinkActive="active" (click)="closeSidebar()">
              📒 <span>{{ t().bookkeeping }}</span>
            </a>
          }

          @if (auth.isAdmin()) {
            <div class="nav-section">{{ t().navAdmin }}</div>
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
            <!-- Notification Bell -->
            <button class="bell-btn" (click)="toggleBell()" [class.bell-active]="showBell()">
              🔔
              @if (unreadCount() > 0) {
                <span class="bell-badge">{{ unreadCount() }}</span>
              }
            </button>
            <button class="btn-icon-sm" (click)="refreshNotifications()" title="{{ t().refresh }}">🔄</button>
            <span class="topbar-user">{{ auth.user()?.name }}</span>
          </div>
        </header>

        <!-- Bell Dropdown -->
        @if (showBell()) {
          <div class="bell-overlay" (click)="showBell.set(false)"></div>
          <div class="bell-dropdown">
            <div class="bell-header">
              <span class="bell-title">📥 {{ t().incomingTransfers }}</span>
              <button class="btn-icon-sm" (click)="refreshNotifications()">🔄</button>
            </div>
            @if (notifications().length === 0) {
              <div class="bell-empty">{{ t().noNotifications }}</div>
            }
            @for (notif of notifications(); track notif.id) {
              <div class="bell-item">
                <div class="bell-item-ref">{{ notif.transfer.ref }}</div>
                <div class="bell-item-info">
                  ↑ {{ notif.transfer.senderBranch }} → ↓ {{ notif.transfer.receiverBranch }}
                </div>
                <div class="bell-item-person">{{ notif.transfer.senderName }} → {{ notif.transfer.receiverName }}</div>
                <div class="bell-item-amount">{{ notif.transfer.amount | number:'1.2-2' }} {{ notif.transfer.currency }}</div>
              </div>
            }
            <div class="bell-footer">
              <a routerLink="/transfers" (click)="showBell.set(false)">{{ t().viewAll }} →</a>
            </div>
          </div>
        }

        <!-- Page Content -->
        <main class="content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class LayoutComponent implements OnInit, OnDestroy {
  sidebarOpen   = signal(false);
  showBell      = signal(false);
  notifications = signal<TransferNotification[]>([]);
  unreadCount   = computed(() => this.notifications().length);
  private pollInterval?: ReturnType<typeof setInterval>;

  readonly roleBadge = computed(() => {
    const role = this.auth.user()?.role;
    const t = this.i18n.t();
    if (role === 'admin')          return t.roleAdmin;
    if (role === 'branch_manager') return t.roleBranchManager;
    if (role === 'accountant')     return t.roleAccountant;
    return t.roleEmployee;
  });

  constructor(
    public auth:    AuthService,
    public i18n:    I18nService,
    private notifSvc: NotificationService,
  ) {}

  t = this.i18n.t;

  ngOnInit() {
    this.refreshNotifications();
    // Poll every 30 seconds
    this.pollInterval = setInterval(() => this.refreshNotifications(), 30_000);
  }

  ngOnDestroy() {
    if (this.pollInterval) clearInterval(this.pollInterval);
  }

  refreshNotifications() {
    const branch = this.auth.user()?.branch ?? undefined;
    this.notifSvc.getIncoming(branch).subscribe(n => this.notifications.set(n));
  }

  toggleBell() { this.showBell.update(v => !v); }
  toggleSidebar() { this.sidebarOpen.update(v => !v); }
  closeSidebar()  { this.sidebarOpen.set(false); }
}
