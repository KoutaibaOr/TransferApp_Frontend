// ─── Auth ───────────────────────────────────────────
export interface LoginRequest  { email: string; password: string; }
export interface LoginResponse { access_token: string; user: User; }

// ─── User ────────────────────────────────────────────
export type UserRole = 'admin' | 'branch_manager' | 'employee';
export interface User {
  id: string; name: string; email: string; role: UserRole;
  branch: string | null; initials: string; active: boolean; createdAt: string;
}

// ─── Branch ──────────────────────────────────────────
export interface Branch {
  id: string; name: string; city: string; phone: string;
  address: string; hours: string; color: string; cashBalance: number;
  active: boolean; createdAt: string;
  managerId?: string; managerName?: string; employeeCount?: number;
  initialBalances?: { currency: string; amount: number }[];
}
export interface ExportFilter {
  statuses?: string[]; dateFrom?: string; dateTo?: string;
  branch?: string; limit?: number;
}

// ─── Customer ────────────────────────────────────────
export interface Customer {
  id: string; firstName: string; lastName: string; phone: string;
  idNumber: string; dateOfBirth: string; address: string; branch: string;
  transferCount: number; createdBy: string; createdAt: string;
}

// ─── Transfer ────────────────────────────────────────
export type TransferStatus = 'DRAFT' | 'CREATED' | 'IN_PROGRESS' | 'COMPLETED' | 'PAID_OUT' | 'CANCELLED';

export interface Transfer {
  id: string; ref: string; senderName: string; senderPhone: string;
  senderIdNumber: string; receiverName: string; receiverPhone: string;
  receiverCountry: string; amount: number; currency: string; fee: number;
  profit: number; pickupTime: string; status: TransferStatus; branch: string;
  employee: string; note: string; createdAt: string; updatedAt: string;
}

// FIX 1: TransferStats an Backend-Antwort angepasst
export interface TransferStats {
  totalCount:   number;   // Backend: totalCount
  todayCount:   number;   // Backend: todayCount
  pendingCount: number;   // Backend: pendingCount
  totalRevenue: number;   // Backend: totalRevenue (= Summe Gebühren)
  todayRevenue: number;   // Backend: todayRevenue
  // Kompatibilitäts-Aliase für Templates
  total?:       number;
  pending?:     number;
  totalAmount?: number;
  todayAmount?: number;
  totalFee?:    number;
  totalProfit?: number;
}

// ─── Cash ────────────────────────────────────────────
export type CashEntryType = 'CASH_IN' | 'CASH_OUT' | 'TRANSFER_PAYOUT' | 'DAY_CLOSE';
export interface CashJournalEntry {
  id: string; type: CashEntryType; amount: number; balanceAfter: number;
  branch: string; reference: string; employee: string; note: string; createdAt: string;
}

// ─── Currency Exchange ───────────────────────────────
export interface ExchangeRate {
  id: string; fromCurrency: string; toCurrency: string; rate: number;
  marginPercent: number; active: boolean; setBy: string; note: string; updatedAt: string;
}
export interface BranchCashBalance { id: string; branch: string; currency: string; balance: number; }
export interface CashExchange {
  id: string; ref: string; branch: string; employee: string; fromCurrency: string;
  fromAmount: number; toCurrency: string; toAmount: number; exchangeRate: number;
  marginPercent: number; fee: number; customerPayout: number; profit: number;
  customerName: string; customerIdNumber: string; note: string; createdAt: string;
}
export interface ExchangePreview {
  fromCurrency: string; toCurrency: string; fromAmount: number; rate: number;
  marginPercent: number; grossAmount: number; fee: number; customerPayout: number; profit: number;
}
export interface ExchangeStats {
  totalTransactions: number; totalProfit: number; totalVolume: number;
  todayTransactions: number; todayProfit: number; todayVolume: number;
}

// ─── Settings ────────────────────────────────────────
export type FeeType = 'PERCENT' | 'FIXED';
export interface FeeRule { id: string; country: string; currency: string; branch: string; type: FeeType; value: number; active: boolean; }
export interface Currency { id: string; code: string; flag: string; name: string; nameAr: string; symbol: string; active: boolean; }
export interface AuditLog { id: string; user: string; action: string; entity: string; entityId: string; ipAddress: string; details: string; createdAt: string; }
export interface PagedResult<T> { data: T[]; total: number; page: number; limit: number; }
export type Lang = 'en' | 'ar';
