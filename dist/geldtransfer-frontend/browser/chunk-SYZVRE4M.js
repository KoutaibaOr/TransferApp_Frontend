import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KWYNHGYO.js";

// src/app/core/services/api.service.ts
var BASE = environment.apiUrl;
var TransferService = class _TransferService {
  constructor(http) {
    this.http = http;
  }
  getAll(p = {}) {
    return this.http.get(`${BASE}/transfers`, { params: new HttpParams({ fromObject: p }) });
  }
  getOne(id) {
    return this.http.get(`${BASE}/transfers/${id}`);
  }
  getStats() {
    return this.http.get(`${BASE}/transfers/stats`);
  }
  create(dto) {
    return this.http.post(`${BASE}/transfers`, dto);
  }
  updateStatus(id, status) {
    return this.http.patch(`\${BASE}/transfers/\${id}/status`, { status });
  }
  cancel(id) {
    return this.http.patch(`\${BASE}/transfers/\${id}/cancel`, {});
  }
  static {
    this.\u0275fac = function TransferService_Factory(t) {
      return new (t || _TransferService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransferService, factory: _TransferService.\u0275fac, providedIn: "root" });
  }
};
var CustomerService = class _CustomerService {
  constructor(http) {
    this.http = http;
  }
  getAll(p = {}) {
    return this.http.get(`${BASE}/customers`, { params: new HttpParams({ fromObject: p }) });
  }
  getOne(id) {
    return this.http.get(`${BASE}/customers/${id}`);
  }
  create(dto) {
    return this.http.post(`${BASE}/customers`, dto);
  }
  update(id, dto) {
    return this.http.patch(`${BASE}/customers/${id}`, dto);
  }
  delete(id) {
    return this.http.delete(`${BASE}/customers/${id}`);
  }
  static {
    this.\u0275fac = function CustomerService_Factory(t) {
      return new (t || _CustomerService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerService, factory: _CustomerService.\u0275fac, providedIn: "root" });
  }
};
var BranchService = class _BranchService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${BASE}/branches`);
  }
  getCashSummary() {
    return this.http.get(`${BASE}/branches/cash-summary`);
  }
  create(dto) {
    return this.http.post(`${BASE}/branches`, dto);
  }
  update(id, dto) {
    return this.http.patch(`${BASE}/branches/${id}`, dto);
  }
  deactivate(id) {
    return this.http.patch(`${BASE}/branches/${id}/deactivate`, {});
  }
  static {
    this.\u0275fac = function BranchService_Factory(t) {
      return new (t || _BranchService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BranchService, factory: _BranchService.\u0275fac, providedIn: "root" });
  }
};
var CashService = class _CashService {
  constructor(http) {
    this.http = http;
  }
  getBalance(branch) {
    let params = new HttpParams();
    if (branch) {
      params = params.set("branch", branch);
    }
    return this.http.get(`${BASE}/cash/balance`, { params });
  }
  getJournal(p = {}) {
    return this.http.get(`${BASE}/cash/journal`, { params: new HttpParams({ fromObject: p }) });
  }
  deposit(dto) {
    return this.http.post(`${BASE}/cash/deposit`, dto);
  }
  withdraw(dto) {
    return this.http.post(`${BASE}/cash/withdraw`, dto);
  }
  dayClose(dto) {
    return this.http.post(`${BASE}/cash/day-close`, dto);
  }
  static {
    this.\u0275fac = function CashService_Factory(t) {
      return new (t || _CashService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CashService, factory: _CashService.\u0275fac, providedIn: "root" });
  }
};
var ExchangeService = class _ExchangeService {
  constructor(http) {
    this.http = http;
  }
  getRates() {
    return this.http.get(`${BASE}/exchange-rates`);
  }
  getActiveRates() {
    return this.http.get(`${BASE}/exchange-rates/active`);
  }
  preview(from, to, amount) {
    return this.http.get(`${BASE}/exchange-rates/preview`, { params: { from, to, amount: amount.toString() } });
  }
  createRate(dto) {
    return this.http.post(`${BASE}/exchange-rates`, dto);
  }
  updateRate(id, dto) {
    return this.http.patch(`${BASE}/exchange-rates/${id}`, dto);
  }
  deleteRate(id) {
    return this.http.delete(`${BASE}/exchange-rates/${id}`);
  }
  getBalances() {
    return this.http.get(`${BASE}/cash-balances`);
  }
  getExchanges(p = {}) {
    return this.http.get(`${BASE}/cash-exchanges`, { params: new HttpParams({ fromObject: p }) });
  }
  getStats() {
    return this.http.get(`${BASE}/cash-exchanges/stats`);
  }
  execute(dto) {
    return this.http.post(`${BASE}/cash-exchanges`, dto);
  }
  static {
    this.\u0275fac = function ExchangeService_Factory(t) {
      return new (t || _ExchangeService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExchangeService, factory: _ExchangeService.\u0275fac, providedIn: "root" });
  }
};
var SettingsService = class _SettingsService {
  constructor(http) {
    this.http = http;
  }
  getFeeRules() {
    return this.http.get(`${BASE}/fee-rules`);
  }
  createFeeRule(dto) {
    return this.http.post(`${BASE}/fee-rules`, dto);
  }
  updateFeeRule(id, dto) {
    return this.http.patch(`${BASE}/fee-rules/${id}`, dto);
  }
  deleteFeeRule(id) {
    return this.http.delete(`${BASE}/fee-rules/${id}`);
  }
  getCurrencies() {
    return this.http.get(`${BASE}/currencies`);
  }
  getUsers() {
    return this.http.get(`${BASE}/users`);
  }
  createUser(dto) {
    return this.http.post(`${BASE}/users`, dto);
  }
  updateUser(id, dto) {
    return this.http.patch(`${BASE}/users/${id}`, dto);
  }
  resetPassword(id, newPassword) {
    return this.http.patch(`${BASE}/users/${id}/reset-password`, { newPassword });
  }
  deactivateUser(id) {
    return this.http.patch(`${BASE}/users/${id}/deactivate`, {});
  }
  static {
    this.\u0275fac = function SettingsService_Factory(t) {
      return new (t || _SettingsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};
var AuditService = class _AuditService {
  constructor(http) {
    this.http = http;
  }
  getAll(p = {}) {
    return this.http.get(`${BASE}/audit`, { params: new HttpParams({ fromObject: p }) });
  }
  static {
    this.\u0275fac = function AuditService_Factory(t) {
      return new (t || _AuditService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
  }
};

export {
  TransferService,
  CustomerService,
  BranchService,
  CashService,
  ExchangeService,
  SettingsService,
  AuditService
};
//# sourceMappingURL=chunk-SYZVRE4M.js.map
