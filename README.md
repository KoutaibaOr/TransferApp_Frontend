# GeldTransfer Frontend — Angular 17

## Technology Stack
- **Framework**: Angular 17 (Standalone Components)
- **CSS**: CSS Modules (isolated per component)
- **State**: Angular Signals
- **HTTP**: Angular HttpClient + Interceptors
- **Routing**: Angular Router (Lazy Loading)
- **Languages**: German & Arabic (RTL) – English interface available via settings

## Project Structure

```
src/app/
├── core/
│   ├── guards/          # Auth Guard, Admin Guard
│   ├── interceptors/    # JWT Auth Interceptor
│   ├── models/          # TypeScript Interfaces
│   └── services/        # AuthService, API Services, I18n, Toast
├── shared/
│   └── components/
│       ├── layout/      # Sidebar + Topbar Shell
│       └── toast/       # Toast Notifications
└── features/
    ├── auth/            # Login
    ├── dashboard/       # Overview & KPIs
    ├── transfers/       # Manage transfers
    ├── customers/       # Customer management
    ├── cash/            # Cash log & branches
    ├── exchange/        # Currency exchange
    ├── reports/         # Reports
    ├── settings/        # Settings (Admin)
    └── audit/           # Audit log (Admin)
```

## Installation & Start

### Prerequisite: Backend must be running
```bash
# Start the backend (from the backend folder):
docker-compose up --build
```

### Start the frontend:
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# → http://localhost:4200
```

### Production build:
```bash
npm run build
# Output: dist/geldtransfer-frontend/
```

## Login
- Admin: `admin@firma.de` / `admin123`
- User: `nutzer@firma.de` / `nutzer123`

## Pages
| Route | Description | Role |
|-------|-------------|------|
| `/dashboard` | KPIs & overview | All |
| `/transfers` | Manage transfers | All |
| `/customers` | Customer management | All |
| `/cash` | Cash log & branches | All |
| `/exchange` | Currency exchange | All |
| `/reports` | Reports | All |
| `/settings` | Settings | Admin |
| `/audit` | Audit log | Admin |

## Change backend API URL
`src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1',  // change here
};
```
