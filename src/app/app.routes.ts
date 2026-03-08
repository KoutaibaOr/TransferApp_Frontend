import { Routes } from '@angular/router';
import { authGuard, adminGuard, managerGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'transfers', loadComponent: () => import('./features/transfers/transfers.component').then(m => m.TransfersComponent) },
      { path: 'customers', loadComponent: () => import('./features/customers/customers.component').then(m => m.CustomersComponent) },
      { path: 'cash',      loadComponent: () => import('./features/cash/cash.component').then(m => m.CashComponent) },
      { path: 'exchange',  loadComponent: () => import('./features/exchange/exchange.component').then(m => m.ExchangeComponent) },
      { path: 'reports',   loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent), canActivate: [managerGuard] },
      { path: 'settings',  loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent), canActivate: [adminGuard] },
      { path: 'audit',     loadComponent: () => import('./features/audit/audit.component').then(m => m.AuditComponent), canActivate: [adminGuard] },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
