import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

// ── Demo data ─────────────────────────────────────────────────────────────────

const USERS = [
  { id: 'u1', name: 'Ahmad Karimi',   email: 'admin@firma.de',    password: 'admin123',   role: 'admin',          branch: null,        initials: 'AK', active: true, createdAt: '2024-01-01' },
  { id: 'u2', name: 'Sara Müller',    email: 'manager@firma.de',  password: 'manager123', role: 'branch_manager', branch: 'Berlin',    initials: 'SM', active: true, createdAt: '2024-02-01' },
  { id: 'u3', name: 'Karim Hassan',   email: 'karim@firma.de',    password: 'karim123',   role: 'branch_manager', branch: 'München',   initials: 'KH', active: true, createdAt: '2024-02-15' },
  { id: 'u4', name: 'Layla Nasser',   email: 'layla@firma.de',    password: 'layla123',   role: 'employee',       branch: 'Berlin',    initials: 'LN', active: true, createdAt: '2024-03-01' },
  { id: 'u5', name: 'Omar Saleh',     email: 'omar@firma.de',     password: 'omar123',    role: 'employee',       branch: 'München',   initials: 'OS', active: true, createdAt: '2024-03-10' },
];

const BRANCHES = [
  { id: 'b1', name: 'Berlin Mitte',   city: 'Berlin',   phone: '+49 30 1234567', address: 'Unter den Linden 5',    hours: 'Mo–Fr 9–18', color: '#4f46e5', cashBalance: 48500, active: true, createdAt: '2024-01-01', managerId: 'u2', managerName: 'Sara Müller',  employeeCount: 3 },
  { id: 'b2', name: 'München Zentrum',city: 'München',  phone: '+49 89 9876543', address: 'Marienplatz 12',         hours: 'Mo–Fr 9–17', color: '#059669', cashBalance: 32000, active: true, createdAt: '2024-01-15', managerId: 'u3', managerName: 'Karim Hassan', employeeCount: 2 },
  { id: 'b3', name: 'Hamburg Hafen',  city: 'Hamburg',  phone: '+49 40 5556677', address: 'Speicherstadt 22',       hours: 'Mo–Sa 9–19', color: '#d97706', cashBalance: 21000, active: true, createdAt: '2024-02-01', managerId: null, managerName: null,           employeeCount: 1 },
  { id: 'b4', name: 'Frankfurt Main', city: 'Frankfurt',phone: '+49 69 1122334', address: 'Zeil 80',                hours: 'Mo–Fr 9–18', color: '#e11d48', cashBalance: 55000, active: true, createdAt: '2024-03-01', managerId: null, managerName: null,           employeeCount: 2 },
];

const CUSTOMERS = [
  { id: 'c1', firstName: 'Mohammed', lastName: 'Al-Rashid', phone: '+49 151 11223344', idNumber: 'A1234567', dateOfBirth: '1985-06-15', address: 'Berliner Str. 44, Berlin', branch: 'Berlin',    transferCount: 12, createdBy: 'Layla Nasser',  createdAt: '2024-01-10' },
  { id: 'c2', firstName: 'Fatima',   lastName: 'Al-Zahra',  phone: '+49 152 22334455', idNumber: 'B2345678', dateOfBirth: '1990-03-22', address: 'Maximilianstr. 7, München', branch: 'München',   transferCount: 7,  createdBy: 'Omar Saleh',    createdAt: '2024-01-20' },
  { id: 'c3', firstName: 'Ali',      lastName: 'Hassan',    phone: '+49 153 33445566', idNumber: 'C3456789', dateOfBirth: '1978-11-05', address: 'Reeperbahn 55, Hamburg',   branch: 'Hamburg',   transferCount: 4,  createdBy: 'Ahmad Karimi',  createdAt: '2024-02-05' },
  { id: 'c4', firstName: 'Hana',     lastName: 'Karimi',    phone: '+49 154 44556677', idNumber: 'D4567890', dateOfBirth: '1992-08-18', address: 'Zeil 45, Frankfurt',       branch: 'Frankfurt', transferCount: 9,  createdBy: 'Ahmad Karimi',  createdAt: '2024-02-12' },
  { id: 'c5', firstName: 'Youssef',  lastName: 'Nabil',     phone: '+49 155 55667788', idNumber: 'E5678901', dateOfBirth: '1983-02-28', address: 'Kurfürstendamm 11, Berlin',branch: 'Berlin',    transferCount: 15, createdBy: 'Layla Nasser',  createdAt: '2024-03-01' },
  { id: 'c6', firstName: 'Maryam',   lastName: 'Suleiman',  phone: '+49 156 66778899', idNumber: 'F6789012', dateOfBirth: '1995-12-10', address: 'Leopoldstr. 33, München',  branch: 'München',   transferCount: 3,  createdBy: 'Omar Saleh',    createdAt: '2024-03-08' },
];

const TRANSFERS = [
  { id: 't1',  ref: 'TRF-2024-001', senderName: 'Mohammed Al-Rashid', senderPhone: '+49 151 11223344', receiverName: 'Tariq Al-Rashid',  receiverCountry: 'Syrien',  receiverPhone: '+963 911 222333', amount: 500,  currency: 'EUR', fee: 15, status: 'paid_out',  branch: 'Berlin',    employee: 'Layla Nasser',  createdAt: '2024-01-15T10:30:00', updatedAt: '2024-01-15T14:00:00' },
  { id: 't2',  ref: 'TRF-2024-002', senderName: 'Fatima Al-Zahra',    senderPhone: '+49 152 22334455', receiverName: 'Ibrahim Al-Zahra', receiverCountry: 'Libanon', receiverPhone: '+961 3 445566',   amount: 800,  currency: 'EUR', fee: 20, status: 'ready',     branch: 'München',   employee: 'Omar Saleh',    createdAt: '2024-01-20T09:00:00', updatedAt: '2024-01-20T09:00:00' },
  { id: 't3',  ref: 'TRF-2024-003', senderName: 'Ali Hassan',         senderPhone: '+49 153 33445566', receiverName: 'Nour Hassan',      receiverCountry: 'Ägypten', receiverPhone: '+20 10 33445566', amount: 300,  currency: 'EUR', fee: 10, status: 'processing',branch: 'Hamburg',   employee: 'Ahmad Karimi',  createdAt: '2024-02-05T11:00:00', updatedAt: '2024-02-05T11:00:00' },
  { id: 't4',  ref: 'TRF-2024-004', senderName: 'Hana Karimi',        senderPhone: '+49 154 44556677', receiverName: 'Sina Karimi',      receiverCountry: 'Iran',    receiverPhone: '+98 21 5566778',  amount: 650,  currency: 'EUR', fee: 18, status: 'paid_out',  branch: 'Frankfurt', employee: 'Ahmad Karimi',  createdAt: '2024-02-12T14:00:00', updatedAt: '2024-02-12T16:30:00' },
  { id: 't5',  ref: 'TRF-2024-005', senderName: 'Youssef Nabil',      senderPhone: '+49 155 55667788', receiverName: 'Amr Nabil',        receiverCountry: 'Marokko', receiverPhone: '+212 6 77889900', amount: 1200, currency: 'EUR', fee: 30, status: 'ready',     branch: 'Berlin',    employee: 'Layla Nasser',  createdAt: '2024-02-18T08:00:00', updatedAt: '2024-02-18T08:00:00' },
  { id: 't6',  ref: 'TRF-2024-006', senderName: 'Maryam Suleiman',    senderPhone: '+49 156 66778899', receiverName: 'Khaled Suleiman',  receiverCountry: 'Türkei',  receiverPhone: '+90 532 1122334', amount: 450,  currency: 'EUR', fee: 12, status: 'cancelled', branch: 'München',   employee: 'Omar Saleh',    createdAt: '2024-03-01T10:00:00', updatedAt: '2024-03-01T11:00:00' },
  { id: 't7',  ref: 'TRF-2024-007', senderName: 'Mohammed Al-Rashid', senderPhone: '+49 151 11223344', receiverName: 'Laila Al-Rashid',  receiverCountry: 'Jordanien',receiverPhone: '+962 7 22334455', amount: 750,  currency: 'EUR', fee: 20, status: 'paid_out',  branch: 'Berlin',    employee: 'Layla Nasser',  createdAt: '2024-03-05T09:30:00', updatedAt: '2024-03-05T12:00:00' },
  { id: 't8',  ref: 'TRF-2024-008', senderName: 'Ali Hassan',         senderPhone: '+49 153 33445566', receiverName: 'Sami Hassan',      receiverCountry: 'Irak',    receiverPhone: '+964 7 55667788', amount: 920,  currency: 'EUR', fee: 25, status: 'ready',     branch: 'Hamburg',   employee: 'Ahmad Karimi',  createdAt: '2024-03-07T13:00:00', updatedAt: '2024-03-07T13:00:00' },
  { id: 't9',  ref: 'TRF-2024-009', senderName: 'Hana Karimi',        senderPhone: '+49 154 44556677', receiverName: 'Dara Karimi',      receiverCountry: 'Afghanistan',receiverPhone: '+93 70 11223344',amount: 200,  currency: 'EUR', fee: 8,  status: 'processing',branch: 'Frankfurt', employee: 'Ahmad Karimi',  createdAt: '2024-03-08T10:00:00', updatedAt: '2024-03-08T10:00:00' },
  { id: 't10', ref: 'TRF-2024-010', senderName: 'Youssef Nabil',      senderPhone: '+49 155 55667788', receiverName: 'Hind Nabil',       receiverCountry: 'Tunesien',receiverPhone: '+216 2 33445566', amount: 600,  currency: 'EUR', fee: 16, status: 'paid_out',  branch: 'Berlin',    employee: 'Layla Nasser',  createdAt: '2024-03-09T08:00:00', updatedAt: '2024-03-09T10:00:00' },
];

const EXCHANGE_RATES = [
  { id: 'er1', fromCurrency: 'EUR', toCurrency: 'USD', rate: 1.085, marginPercent: 2, fee: 5,  active: true, updatedAt: '2026-03-01' },
  { id: 'er2', fromCurrency: 'EUR', toCurrency: 'SYP', rate: 14200, marginPercent: 3, fee: 8,  active: true, updatedAt: '2026-03-01' },
  { id: 'er3', fromCurrency: 'EUR', toCurrency: 'LBP', rate: 91000, marginPercent: 3, fee: 8,  active: true, updatedAt: '2026-03-01' },
  { id: 'er4', fromCurrency: 'EUR', toCurrency: 'TRY', rate: 36.5,  marginPercent: 2, fee: 5,  active: true, updatedAt: '2026-03-01' },
  { id: 'er5', fromCurrency: 'EUR', toCurrency: 'EGP', rate: 53.2,  marginPercent: 2, fee: 5,  active: true, updatedAt: '2026-03-01' },
  { id: 'er6', fromCurrency: 'USD', toCurrency: 'EUR', rate: 0.922, marginPercent: 2, fee: 5,  active: true, updatedAt: '2026-03-01' },
  { id: 'er7', fromCurrency: 'USD', toCurrency: 'SYP', rate: 13100, marginPercent: 3, fee: 8,  active: true, updatedAt: '2026-03-01' },
];

const EXCHANGES = [
  { id: 'ex1', ref: 'EXC-2024-001', branch: 'Berlin',    employee: 'Layla Nasser',  customerName: 'Mohammed Al-Rashid', customerIdNumber: 'A1234567', fromCurrency: 'EUR', fromAmount: 500,  toCurrency: 'USD', customerPayout: 537.5,  exchangeRate: 1.085, marginPercent: 2, fee: 5,  profit: 15.5,  createdAt: '2024-01-16T10:00:00' },
  { id: 'ex2', ref: 'EXC-2024-002', branch: 'München',   employee: 'Omar Saleh',    customerName: 'Fatima Al-Zahra',   customerIdNumber: 'B2345678', fromCurrency: 'EUR', fromAmount: 200,  toCurrency: 'TRY', customerPayout: 7153.0, exchangeRate: 36.5,  marginPercent: 2, fee: 5,  profit: 9.5,   createdAt: '2024-01-22T11:00:00' },
  { id: 'ex3', ref: 'EXC-2024-003', branch: 'Frankfurt', employee: 'Ahmad Karimi',  customerName: 'Hana Karimi',       customerIdNumber: 'D4567890', fromCurrency: 'USD', fromAmount: 1000, toCurrency: 'EUR', customerPayout: 912.2,  exchangeRate: 0.922, marginPercent: 2, fee: 5,  profit: 24.8,  createdAt: '2024-02-13T14:30:00' },
  { id: 'ex4', ref: 'EXC-2024-004', branch: 'Berlin',    employee: 'Layla Nasser',  customerName: 'Youssef Nabil',     customerIdNumber: 'E5678901', fromCurrency: 'EUR', fromAmount: 300,  toCurrency: 'EGP', customerPayout: 15616.8,exchangeRate: 53.2,  marginPercent: 2, fee: 5,  profit: 11.2,  createdAt: '2024-02-20T09:00:00' },
  { id: 'ex5', ref: 'EXC-2024-005', branch: 'München',   employee: 'Omar Saleh',    customerName: 'Maryam Suleiman',   customerIdNumber: 'F6789012', fromCurrency: 'EUR', fromAmount: 450,  toCurrency: 'TRY', customerPayout: 16038.0,exchangeRate: 36.5,  marginPercent: 2, fee: 5,  profit: 14.0,  createdAt: '2024-03-02T10:00:00' },
  { id: 'ex6', ref: 'EXC-2024-006', branch: 'Hamburg',   employee: 'Ahmad Karimi',  customerName: 'Ali Hassan',        customerIdNumber: 'C3456789', fromCurrency: 'EUR', fromAmount: 800,  toCurrency: 'USD', customerPayout: 858.0,  exchangeRate: 1.085, marginPercent: 2, fee: 5,  profit: 22.0,  createdAt: '2024-03-06T11:30:00' },
];

const CASH_JOURNAL: any[] = [
  { id: 'cj1', type: 'deposit',  branch: 'Berlin',    amount: 10000, currency: 'EUR', note: 'Tagesöffnung',      createdBy: 'Ahmad Karimi',  createdAt: '2024-01-10T08:00:00' },
  { id: 'cj2', type: 'withdraw', branch: 'München',   amount: 5000,  currency: 'EUR', note: 'Auszahlung Transfer',createdBy: 'Omar Saleh',    createdAt: '2024-01-20T14:00:00' },
  { id: 'cj3', type: 'deposit',  branch: 'Frankfurt', amount: 20000, currency: 'EUR', note: 'Einzahlung Kapital', createdBy: 'Ahmad Karimi',  createdAt: '2024-02-01T09:00:00' },
  { id: 'cj4', type: 'withdraw', branch: 'Berlin',    amount: 2500,  currency: 'EUR', note: 'Transfer Auszahlung',createdBy: 'Layla Nasser',  createdAt: '2024-02-15T11:30:00' },
  { id: 'cj5', type: 'deposit',  branch: 'Hamburg',   amount: 8000,  currency: 'EUR', note: 'Tagesöffnung',      createdBy: 'Ahmad Karimi',  createdAt: '2024-03-01T08:30:00' },
];

const FEE_RULES: any[] = [
  { id: 'fr1', minAmount: 0,    maxAmount: 200,  feeFixed: 5,  feePercent: 0, currency: 'EUR', active: true },
  { id: 'fr2', minAmount: 201,  maxAmount: 500,  feeFixed: 10, feePercent: 0, currency: 'EUR', active: true },
  { id: 'fr3', minAmount: 501,  maxAmount: 1000, feeFixed: 20, feePercent: 0, currency: 'EUR', active: true },
  { id: 'fr4', minAmount: 1001, maxAmount: 9999, feeFixed: 0,  feePercent: 2, currency: 'EUR', active: true },
];

const CURRENCIES: any[] = [
  { id: 'cur1', code: 'EUR', name: 'Euro',            symbol: '€',  active: true },
  { id: 'cur2', code: 'USD', name: 'US Dollar',       symbol: '$',  active: true },
  { id: 'cur3', code: 'SYP', name: 'Syrisches Pfund', symbol: 'SP', active: true },
  { id: 'cur4', code: 'LBP', name: 'Libanesisches P.',symbol: 'LL', active: true },
  { id: 'cur5', code: 'TRY', name: 'Türkische Lira',  symbol: '₺',  active: true },
  { id: 'cur6', code: 'EGP', name: 'Ägyptisches Pfund',symbol: 'E£',active: true },
];

const AUDIT_LOGS: any[] = [
  { id: 'al1', action: 'LOGIN',            user: 'Ahmad Karimi',  entity: 'auth',     entityId: null, details: 'Admin login',              createdAt: '2026-03-09T08:00:00' },
  { id: 'al2', action: 'CREATE_TRANSFER',  user: 'Layla Nasser',  entity: 'transfer', entityId: 't10',details: 'TRF-2024-010 erstellt',     createdAt: '2026-03-09T08:02:00' },
  { id: 'al3', action: 'STATUS_CHANGE',    user: 'Layla Nasser',  entity: 'transfer', entityId: 't10',details: 'Status → paid_out',          createdAt: '2026-03-09T10:00:00' },
  { id: 'al4', action: 'CREATE_EXCHANGE',  user: 'Ahmad Karimi',  entity: 'exchange', entityId: 'ex6',details: 'EXC-2024-006 erstellt',     createdAt: '2026-03-06T11:30:00' },
  { id: 'al5', action: 'CREATE_CUSTOMER',  user: 'Omar Saleh',    entity: 'customer', entityId: 'c6', details: 'Maryam Suleiman angelegt',  createdAt: '2026-03-08T09:00:00' },
  { id: 'al6', action: 'CANCEL_TRANSFER',  user: 'Omar Saleh',    entity: 'transfer', entityId: 't6', details: 'TRF-2024-006 storniert',    createdAt: '2024-03-01T11:00:00' },
];

// ── Helper ────────────────────────────────────────────────────────────────────

function paged<T>(items: T[], page = 1, limit = 20) {
  const start = (page - 1) * limit;
  return { data: items.slice(start, start + limit), total: items.length, page, limit };
}

function ok(body: any) {
  return of(new HttpResponse({ status: 200, body }));
}

// ── Interceptor ───────────────────────────────────────────────────────────────

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  const url  = req.url;
  const method = req.method;

  // ── Auth ──────────────────────────────────────────────────────────────────
  if (url.includes('/auth/login')) {
    const { email, password } = req.body as any;
    const user = USERS.find(u => u.email === email && u.password === password);
    if (user) {
      const { password: _, ...safeUser } = user;
      return ok({ access_token: 'demo-token-' + safeUser.id, user: safeUser });
    }
    return of(new HttpResponse({ status: 401, body: { message: 'Invalid credentials' } }));
  }

  // ── Transfers ─────────────────────────────────────────────────────────────
  if (url.includes('/transfers/stats')) {
    return ok({
      total: TRANSFERS.length,
      paid_out: TRANSFERS.filter(t => t.status === 'paid_out').length,
      ready: TRANSFERS.filter(t => t.status === 'ready').length,
      processing: TRANSFERS.filter(t => t.status === 'processing').length,
      cancelled: TRANSFERS.filter(t => t.status === 'cancelled').length,
      totalAmount: TRANSFERS.reduce((s, t) => s + t.amount, 0),
    });
  }

  if (url.includes('/transfers') && method === 'GET') {
    const params = req.params;
    let list = [...TRANSFERS];
    const statusParam = params.get('statuses');
    const branch      = params.get('branch');
    const dateFrom    = params.get('dateFrom');
    const dateTo      = params.get('dateTo');
    if (statusParam) {
      const statuses = statusParam.split(',');
      list = list.filter(t => statuses.includes(t.status));
    }
    if (branch) list = list.filter(t => t.branch === branch);
    if (dateFrom) list = list.filter(t => t.createdAt >= dateFrom);
    if (dateTo)   list = list.filter(t => t.createdAt <= dateTo + 'T23:59:59');
    const page  = parseInt(params.get('page')  || '1');
    const limit = parseInt(params.get('limit') || '20');
    return ok(paged(list, page, limit));
  }

  if (url.match(/\/transfers\/[^/]+\/status/) && method === 'PATCH') {
    const id = url.split('/transfers/')[1].split('/')[0];
    const t = TRANSFERS.find(x => x.id === id);
    if (t) { (t as any).status = (req.body as any).status; return ok(t); }
  }

  if (url.match(/\/transfers\/[^/]+\/cancel/) && method === 'PATCH') {
    const id = url.split('/transfers/')[1].split('/')[0];
    const t = TRANSFERS.find(x => x.id === id);
    if (t) { (t as any).status = 'cancelled'; return ok(t); }
  }

  if (url.includes('/transfers') && method === 'POST') {
    const body = req.body as any;
    const newT = {
      id: 't' + (TRANSFERS.length + 1),
      ref: `TRF-2024-0${String(TRANSFERS.length + 1).padStart(2, '0')}`,
      ...body,
      status: 'processing',
      employee: 'Ahmad Karimi',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    TRANSFERS.unshift(newT);
    return ok(newT);
  }

  // ── Customers ─────────────────────────────────────────────────────────────
  if (url.includes('/customers') && method === 'GET' && !url.match(/\/customers\/[^/]+$/)) {
    const q = req.params.get('q')?.toLowerCase() || '';
    let list = q ? CUSTOMERS.filter(c =>
      (c.firstName + ' ' + c.lastName).toLowerCase().includes(q) ||
      c.phone.includes(q) || c.idNumber.toLowerCase().includes(q)
    ) : [...CUSTOMERS];
    return ok(list);
  }

  if (url.includes('/customers') && method === 'POST') {
    const body = req.body as any;
    const newC = { id: 'c' + (CUSTOMERS.length + 1), transferCount: 0, createdAt: new Date().toISOString(), ...body };
    CUSTOMERS.push(newC);
    return ok(newC);
  }

  if (url.match(/\/customers\/[^/]+$/) && method === 'DELETE') {
    const id = url.split('/').pop()!;
    const idx = CUSTOMERS.findIndex(c => c.id === id);
    if (idx > -1) CUSTOMERS.splice(idx, 1);
    return ok({});
  }

  // ── Branches ──────────────────────────────────────────────────────────────
  if (url.includes('/branches/cash-summary')) {
    return ok(BRANCHES.map(b => ({ branch: b.name, balance: b.cashBalance })));
  }

  if (url.includes('/branches') && method === 'GET') {
    return ok([...BRANCHES]);
  }

  if (url.includes('/branches') && method === 'POST') {
    const body = req.body as any;
    const nb = { id: 'b' + (BRANCHES.length + 1), active: true, createdAt: new Date().toISOString(), color: '#6366f1', hours: 'Mo–Fr 9–18', cashBalance: body.cashBalance || 0, ...body };
    BRANCHES.push(nb);
    return ok(nb);
  }

  if (url.match(/\/branches\/[^/]+$/) && method === 'DELETE') {
    const id = url.split('/').pop()!;
    const idx = BRANCHES.findIndex(b => b.id === id);
    if (idx > -1) BRANCHES.splice(idx, 1);
    return ok({});
  }

  // ── Cash ──────────────────────────────────────────────────────────────────
  if (url.includes('/cash/balance')) {
    const branch = req.params.get('branch');
    const b = branch ? BRANCHES.find(x => x.name === branch) : null;
    return ok({ branch: branch || 'Alle Filialen', balance: b ? b.cashBalance : BRANCHES.reduce((s, x) => s + x.cashBalance, 0) });
  }

  if (url.includes('/cash/journal')) {
    return ok(paged([...CASH_JOURNAL]));
  }

  if (url.includes('/cash/deposit') || url.includes('/cash/withdraw')) {
    const body = req.body as any;
    const entry = { id: 'cj' + (CASH_JOURNAL.length + 1), ...body, createdAt: new Date().toISOString() };
    CASH_JOURNAL.unshift(entry);
    return ok(entry);
  }

  if (url.includes('/cash/day-close')) {
    return ok({ success: true });
  }

  // ── Exchange Rates ────────────────────────────────────────────────────────
  if (url.includes('/exchange-rates/preview')) {
    const from   = req.params.get('from')!;
    const to     = req.params.get('to')!;
    const amount = parseFloat(req.params.get('amount') || '0');
    const rate   = EXCHANGE_RATES.find(r => r.fromCurrency === from && r.toCurrency === to);
    if (rate) {
      const gross   = amount * rate.rate;
      const margin  = gross * (rate.marginPercent / 100);
      const payout  = gross - margin - rate.fee;
      return ok({ fromCurrency: from, toCurrency: to, fromAmount: amount, exchangeRate: rate.rate, marginPercent: rate.marginPercent, fee: rate.fee, customerPayout: Math.round(payout * 100) / 100, profit: Math.round((margin + rate.fee) * 100) / 100 });
    }
    return of(new HttpResponse({ status: 404, body: { message: 'Rate not found' } }));
  }

  if (url.includes('/exchange-rates/active')) {
    return ok(EXCHANGE_RATES.filter(r => r.active));
  }

  if (url.includes('/exchange-rates') && method === 'GET') {
    return ok([...EXCHANGE_RATES]);
  }

  if (url.includes('/exchange-rates') && method === 'POST') {
    const body = req.body as any;
    const nr = { id: 'er' + (EXCHANGE_RATES.length + 1), active: true, updatedAt: new Date().toISOString().split('T')[0], ...body };
    EXCHANGE_RATES.push(nr);
    return ok(nr);
  }

  if (url.match(/\/exchange-rates\/[^/]+$/) && method === 'DELETE') {
    const id = url.split('/').pop()!;
    const idx = EXCHANGE_RATES.findIndex(r => r.id === id);
    if (idx > -1) EXCHANGE_RATES.splice(idx, 1);
    return ok({});
  }

  // ── Cash Exchanges ────────────────────────────────────────────────────────
  if (url.includes('/cash-exchanges/stats')) {
    return ok({
      total: EXCHANGES.length,
      totalProfit: EXCHANGES.reduce((s, e) => s + e.profit, 0),
      totalVolume: EXCHANGES.reduce((s, e) => s + e.fromAmount, 0),
    });
  }

  if (url.includes('/cash-balances')) {
    return ok(BRANCHES.map(b => ({ branch: b.name, currency: 'EUR', balance: b.cashBalance })));
  }

  if (url.includes('/cash-exchanges') && method === 'GET') {
    const branch = req.params.get('branch');
    let list = branch ? EXCHANGES.filter(e => e.branch === branch) : [...EXCHANGES];
    return ok(paged(list));
  }

  if (url.includes('/cash-exchanges') && method === 'POST') {
    const body = req.body as any;
    const ne = { id: 'ex' + (EXCHANGES.length + 1), ref: `EXC-2024-0${String(EXCHANGES.length + 1).padStart(2, '0')}`, employee: 'Ahmad Karimi', createdAt: new Date().toISOString(), ...body };
    EXCHANGES.unshift(ne);
    return ok(ne);
  }

  // ── Settings: Fee Rules ───────────────────────────────────────────────────
  if (url.includes('/fee-rules') && method === 'GET')    { return ok([...FEE_RULES]); }
  if (url.includes('/fee-rules') && method === 'POST')   { const b: any = req.body; const n = { id: 'fr'+(FEE_RULES.length+1), active: true, ...b }; FEE_RULES.push(n); return ok(n); }
  if (url.match(/\/fee-rules\/[^/]+$/) && method === 'DELETE') { const id = url.split('/').pop()!; const i = FEE_RULES.findIndex(r => r.id === id); if(i>-1) FEE_RULES.splice(i,1); return ok({}); }

  // ── Currencies ────────────────────────────────────────────────────────────
  if (url.includes('/currencies')) { return ok([...CURRENCIES]); }

  // ── Users ─────────────────────────────────────────────────────────────────
  if (url.includes('/users') && method === 'GET') {
    return ok(USERS.map(({ password: _, ...u }) => u));
  }
  if (url.includes('/users') && method === 'POST') {
    const body = req.body as any;
    const nu = { id: 'u'+(USERS.length+1), initials: body.name?.slice(0,2).toUpperCase()||'??', active: true, createdAt: new Date().toISOString(), ...body };
    USERS.push(nu as any);
    return ok(nu);
  }
  if (url.match(/\/users\/[^/]+$/) && method === 'DELETE') {
    const id = url.split('/').pop()!;
    const i = USERS.findIndex(u => u.id === id);
    if(i>-1) USERS.splice(i,1);
    return ok({});
  }
  if (url.match(/\/users\/[^/]+\/deactivate/) && method === 'PATCH') {
    const id = url.split('/users/')[1].split('/')[0];
    const u = USERS.find(x => x.id === id);
    if (u) (u as any).active = false;
    return ok(u);
  }

  // ── Audit ─────────────────────────────────────────────────────────────────
  if (url.includes('/audit')) {
    return ok(paged([...AUDIT_LOGS]));
  }

  // ── Fallback: pass through (should not be reached in demo) ────────────────
  return next(req);
};
