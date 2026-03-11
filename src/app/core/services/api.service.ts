import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  Transfer, TransferStats, Customer, Branch,
  CashJournalEntry, ExchangeRate, BranchCashBalance,
  CashExchange, ExchangePreview, ExchangeStats,
  FeeRule, Currency, AuditLog, User, PagedResult, ExportFilter,
} from '../models';

const BASE = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class TransferService {
  constructor(private http: HttpClient) {}
  getAll(p: any = {}) {
    return this.http.get<PagedResult<Transfer>>(`${BASE}/transfers`, { params: new HttpParams({ fromObject: p }) });
  }
  getOne(id: string)          { return this.http.get<Transfer>(`${BASE}/transfers/${id}`); }
  getStats()                  { return this.http.get<TransferStats>(`${BASE}/transfers/stats`); }
  create(dto: Partial<Transfer>) { return this.http.post<Transfer>(`${BASE}/transfers`, dto); }
  updateStatus(id: string, status: string) {
    return this.http.patch<Transfer>(`${BASE}/transfers/${id}/status`, { status });
  }
  cancel(id: string) {
    return this.http.patch<Transfer>(`${BASE}/transfers/${id}/cancel`, {});
  }
  exportFiltered(f: ExportFilter) {
    const p: any = { limit: f.limit ?? 9999 };
    if (f.statuses?.length)  p['statuses'] = f.statuses.join(',');
    if (f.dateFrom)          p['dateFrom']  = f.dateFrom;
    if (f.dateTo)            p['dateTo']    = f.dateTo;
    if (f.branch)            p['branch']    = f.branch;
    return this.http.get<PagedResult<Transfer>>(`${BASE}/transfers`, { params: new HttpParams({ fromObject: p }) });
  }
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) {}
  getAll(p: any = {}) {
    return this.http.get<Customer[]>(`${BASE}/customers`, { params: new HttpParams({ fromObject: p }) });
  }
  getOne(id: string)             { return this.http.get<Customer>(`${BASE}/customers/${id}`); }
  create(dto: Partial<Customer>) { return this.http.post<Customer>(`${BASE}/customers`, dto); }
  update(id: string, dto: Partial<Customer>) { return this.http.patch<Customer>(`${BASE}/customers/${id}`, dto); }
  delete(id: string)             { return this.http.delete(`${BASE}/customers/${id}`); }
}

@Injectable({ providedIn: 'root' })
export class BranchService {
  constructor(private http: HttpClient) {}
  getAll()                       { return this.http.get<Branch[]>(`${BASE}/branches`); }
  getOne(id: string)             { return this.http.get<Branch>(`${BASE}/branches/${id}`); }
  getCashSummary()               { return this.http.get<any>(`${BASE}/branches/cash-summary`); }
  create(dto: Partial<Branch>)   { return this.http.post<Branch>(`${BASE}/branches`, dto); }
  update(id: string, dto: Partial<Branch>) { return this.http.patch<Branch>(`${BASE}/branches/${id}`, dto); }
  deactivate(id: string)         { return this.http.patch<Branch>(`${BASE}/branches/${id}/deactivate`, {}); }
  delete(id: string)             { return this.http.delete(`${BASE}/branches/${id}`); }
}

@Injectable({ providedIn: 'root' })
export class CashService {
  constructor(private http: HttpClient) {}
  getBalance(branch?: string) {
    let params = new HttpParams();
    if (branch) {
      params = params.set('branch', branch);
    }
    return this.http.get<{ branch: string; balance: number }>(`${BASE}/cash/balance`, { params });
  }
  getJournal(p: any = {}) {
    return this.http.get<PagedResult<CashJournalEntry>>(`${BASE}/cash/journal`, { params: new HttpParams({ fromObject: p }) });
  }
  getMultiBalances(branch?: string) {
    let params = new HttpParams();
    if (branch) params = params.set('branch', branch);
    return this.http.get<{ currency: string; balance: number }[]>(`${BASE}/cash/balances`, { params });
  }
  deposit(dto: any)     { return this.http.post<CashJournalEntry>(`${BASE}/cash/deposit`, dto); }
  withdraw(dto: any)    { return this.http.post<CashJournalEntry>(`${BASE}/cash/withdraw`, dto); }
  bankDeposit(dto: any) { return this.http.post<any>(`${BASE}/bank-deposits`, dto); }
  getDayCloses(branch?: string) {
    let params = new HttpParams();
    if (branch) params = params.set('branch', branch);
    return this.http.get<any[]>(`${BASE}/day-closes`, { params });
  }
  dayClose(dto: any) { return this.http.post<any>(`${BASE}/day-closes`, dto); }
  getProfits() { return this.http.get<any[]>(`${BASE}/cash/profits`); }
}

@Injectable({ providedIn: 'root' })
export class ExchangeService {
  constructor(private http: HttpClient) {}
  getRates()                          { return this.http.get<ExchangeRate[]>(`${BASE}/exchange-rates`); }
  getActiveRates()                    { return this.http.get<ExchangeRate[]>(`${BASE}/exchange-rates/active`); }
  preview(from: string, to: string, amount: number) {
    return this.http.get<ExchangePreview>(`${BASE}/exchange-rates/preview`, { params: { from, to, amount: amount.toString() } });
  }
  createRate(dto: Partial<ExchangeRate>) { return this.http.post<ExchangeRate>(`${BASE}/exchange-rates`, dto); }
  updateRate(id: string, dto: Partial<ExchangeRate>) { return this.http.patch<ExchangeRate>(`${BASE}/exchange-rates/${id}`, dto); }
  deleteRate(id: string)              { return this.http.delete(`${BASE}/exchange-rates/${id}`); }
  getBalances()                       { return this.http.get<BranchCashBalance[]>(`${BASE}/cash-balances`); }
  getExchanges(p: any = {})           { return this.http.get<PagedResult<CashExchange>>(`${BASE}/cash-exchanges`, { params: new HttpParams({ fromObject: p }) }); }
  getStats()                          { return this.http.get<ExchangeStats>(`${BASE}/cash-exchanges/stats`); }
  execute(dto: any)                   { return this.http.post<CashExchange>(`${BASE}/cash-exchanges`, dto); }
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  constructor(private http: HttpClient) {}
  getFeeRules()                       { return this.http.get<FeeRule[]>(`${BASE}/fee-rules`); }
  createFeeRule(dto: Partial<FeeRule>){ return this.http.post<FeeRule>(`${BASE}/fee-rules`, dto); }
  updateFeeRule(id: string, dto: Partial<FeeRule>) { return this.http.patch<FeeRule>(`${BASE}/fee-rules/${id}`, dto); }
  deleteFeeRule(id: string)           { return this.http.delete(`${BASE}/fee-rules/${id}`); }
  getCurrencies()                     { return this.http.get<Currency[]>(`${BASE}/currencies`); }
  getUsers()                          { return this.http.get<User[]>(`${BASE}/users`); }
  createUser(dto: any)                { return this.http.post<User>(`${BASE}/users`, dto); }
  updateUser(id: string, dto: Partial<User>) { return this.http.patch<User>(`${BASE}/users/${id}`, dto); }
  resetPassword(id: string, newPassword: string) {
    return this.http.patch(`${BASE}/users/${id}/reset-password`, { newPassword });
  }
  deactivateUser(id: string)          { return this.http.patch(`${BASE}/users/${id}/deactivate`, {}); }
  deleteUser(id: string)              { return this.http.delete(`${BASE}/users/${id}`); }
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  constructor(private http: HttpClient) {}
  getAll(p: any = {}) {
    return this.http.get<PagedResult<AuditLog>>(`${BASE}/audit`, { params: new HttpParams({ fromObject: p }) });
  }
}
