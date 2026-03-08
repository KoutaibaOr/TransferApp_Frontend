# TransferApp — Angular 17 Frontend

A multilingual (EN / AR) money transfer management application built with Angular 17 Standalone Components and Angular Signals.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Angular 17 (Standalone Components) |
| State Management | Angular Signals (`signal`, `computed`) |
| Styling | Component-scoped CSS + Global CSS |
| HTTP | Angular `HttpClient` + JWT Interceptor |
| Routing | Angular Router (Lazy Loading + Route Guards) |
| Fonts | DM Sans (UI) · Plus Jakarta Sans (headings) · Cairo (Arabic) |
| Languages | English + Arabic (RTL support) |

---

## Project Structure

```
src/app/
├── core/
│   ├── guards/          # authGuard, adminGuard, managerGuard
│   ├── interceptors/    # JWT Auth Interceptor (Bearer token)
│   ├── models/          # TypeScript Interfaces (Transfer, Branch, User, ExportFilter …)
│   └── services/        # AuthService, ApiService, I18nService, ToastService, CsvService
├── shared/
│   └── components/
│       ├── layout/      # Shell: sidebar + topbar
│       ├── sidebar/     # Navigation sidebar
│       └── toast/       # Toast notification overlay
└── features/
    ├── auth/            # Login page
    ├── dashboard/       # KPIs & overview cards
    ├── transfers/       # Transfer management + Smart Export
    ├── customers/       # Customer management
    ├── cash/            # Cash log & branch balances
    ├── exchange/        # Currency exchange + swap + export
    ├── reports/         # Reports (Manager + Admin)
    ├── settings/        # Settings: fees · users · branches · currencies (Admin)
    └── audit/           # Audit log (Admin)
```

---

## User Roles

| Role | Description | Scope |
|---|---|---|
| `admin` | Full access to all data and settings | All branches |
| `branch_manager` | Manages own branch: transfers, exchange, reports | Own branch only |
| `employee` | Day-to-day operations: create transfers & exchanges | Assigned branch |

Route guards enforce access:
- `adminGuard` → `/settings`, `/audit`
- `managerGuard` (admin or branch_manager) → `/reports`

---

## Features

### Transfers
- Create, view, filter, and update transfers
- **Smart Export Modal**: filter by status (multi-select), date range, and branch before exporting
- **Export All** to CSV (branch-scoped for managers)
- CSV Import + downloadable template
- Employee column visible in table and export
- Branch managers are auto-scoped to their branch on load

### Currency Exchange
- Create exchange orders with live rate preview
- **⇄ Swap button** — instantly swap `fromCurrency` ↔ `toCurrency`
- Amount validation: blocks confirmation if amount < 1 (red input highlight)
- **Filtered Export Modal**: filter by date range and branch
- Employee column in exchange history table

### Branch Management (Admin → Settings → Branches tab)
- View all branches with manager name, city, status, and cash balance
- Create new branches: name, city, phone, address, initial balance, assign manager
- Delete branches with confirmation

### Settings (Admin only)
- **Fees**: configure transfer fee rules
- **Users**: manage user accounts and roles
- **Branches**: full branch CRUD (see above)
- **Currencies**: manage supported currencies

---

## Installation & Start

### Prerequisites
- Node.js 18+
- Backend API running at `http://localhost:3000/api/v1`

```bash
# Start the backend (from the backend folder):
docker-compose up --build
```

### Start the frontend

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# → http://localhost:4200
```

### Production build

```bash
npm run build
# Output: dist/geldtransfer-frontend/
```

---

## Default Login Credentials

| Role | Email | Password |
|---|---|---|
| Admin | `admin@firma.de` | `admin123` |
| Branch Manager | `manager@firma.de` | `manager123` |
| Employee | `mitarbeiter@firma.de` | `mitarbeiter123` |

---

## Routes Overview

| Route | Description | Required Role |
|---|---|---|
| `/dashboard` | KPIs & overview | All |
| `/transfers` | Transfer management | All |
| `/customers` | Customer management | All |
| `/cash` | Cash log & balances | All |
| `/exchange` | Currency exchange | All |
| `/reports` | Reports & statistics | Manager + Admin |
| `/settings` | App settings | Admin only |
| `/audit` | Audit log | Admin only |

---

## Backend API URL

Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',  // ← change here
};
```
