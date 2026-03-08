import { Injectable, signal, computed } from '@angular/core';
import { Lang } from '../models';

const EN = {
  // Nav
  dashboard: 'Dashboard', transfers: 'Transfers', customers: 'Customers',
  cash: 'Cash & Branches', exchange: 'Currency Exchange',
  reports: 'Reports', settings: 'Settings', audit: 'Audit Log',
  logout: 'Logout',
  // Common
  search: 'Search...', save: 'Save', cancel: 'Cancel',
  delete: 'Delete', edit: 'Edit', create: 'New',
  confirm: 'Confirm', back: 'Back', next: 'Next',
  loading: 'Loading...', noData: 'No data', all: 'All',
  allBranches: 'All Branches',
  // Auth
  email: 'Email', password: 'Password', signIn: 'Sign in',
  emailRequired: 'Please enter email and password',
  invalidCredentials: 'Invalid email or password',
  loggingIn: 'Signing in...',
  welcome: 'Welcome!',
  demoAdmin: 'Admin: admin@firma.de / admin123',
  demoUser: 'User: nutzer@firma.de / nutzer123',
  // Transfers
  newTransfer: 'New Transfer', sender: 'Sender', receiver: 'Receiver',
  amount: 'Amount', currency: 'Currency', fee: 'Fee',
  status: 'Status', branch: 'Branch', pickupTime: 'Pickup Time',
  senderName: 'Sender Name', senderPhone: 'Sender Phone',
  receiverName: 'Receiver Name', receiverCountry: 'Receiver Country',
  receiverPhone: 'Receiver Phone',
  totalTransfers: 'Transfers total', allStatuses: 'All Statuses',
  actions: 'Actions', details: 'Details', close: 'Close',
  createTransfer: 'Create Transfer',
  requiredField: 'is required field', mustBePositive: 'must be positive',
  statusUpdateError: 'Error updating status', transferCreated: 'Transfer created',
  creationError: 'Error creating transfer', confirmCancel: 'really cancel?',
  cancelled: 'cancelled', cancelError: 'Cancellation failed',
  template: 'Template', importPreview: 'Import Preview', rows: 'rows', moreRows: 'more',
  noTransfers: 'No transfers', page: 'Page', of: 'of',
  employee: 'Employee', note: 'Note',
  // Customers
  firstName: 'First Name', lastName: 'Last Name', phone: 'Phone', idNumber: 'ID Number',
  transferCount: 'Transfers', newCustomer: 'New Customer', noCustomers: 'No customers',
  // CSV messages
  exported: 'records exported', templateDownloaded: 'Template downloaded',
  csvEmpty: 'CSV is empty', missingColumns: 'Missing columns:',
  importFailed: 'Import failed', importDone: 'Import complete',
  rowsLoaded: 'rows loaded — please review',
  customerUpdated: 'Customer updated', customerCreated: 'Customer created',
  transferCreatedOk: 'Transfer created',
  // Dashboard
  activeLocations: 'Active branches', recentTransfers: 'Recent Transfers',
  viewAll: 'View all', branches: 'Branches',
  todayTransfers: 'Total Transfers', todayRevenue: 'Revenue today',
  pending: 'Pending', waitingForProcessing: 'Waiting for processing',
  totalRevenue: 'total',
  // Exchange
  newExchange: 'New Exchange', customerGives: 'Customer gives',
  customerGets: 'Customer gets', rate: 'Rate', margin: 'Margin',
  grossAmount: 'Gross Amount', customerPayout: 'Customer Payout', profit: 'Profit',
  from: 'From', to: 'To', customerAmount: 'Customer Amount',
  setBy: 'Set By', date: 'Date', fromCurrency: 'From Currency', toCurrency: 'To Currency',
  customerName: 'Customer name (optional)',
  active: 'Active', inactive: 'Inactive',
  activeRates: 'Active Exchange Rates', addRate: 'Add Rate',
  newExchangeModal: 'New Exchange', newRateModal: 'New Exchange Rate',
  noRates: 'No rates', noExchanges: 'No exchanges',
  exchangeSuccess: 'Exchange successful!', rateCreated: 'Rate created',
  rateDeleted: 'Rate deleted', confirmDeleteRate: 'Really delete rate?',
  todayTransactions: 'Today Transactions', todayProfit: 'Today Profit',
  totalVolume: 'Total Volume', exchangeRates: 'Exchange Rates',
  cashBalances: 'Cash Balances', history: 'History',
  confirmExchange: 'Confirm Exchange',
  // Settings
  feeRules: 'Fee Rules', country: 'Country', type: 'Type', value: 'Value',
  role: 'Role', createUser: 'Create', newUser: 'New User',
  users: 'Users', currencies: 'Currencies',
  roleAdmin: 'Admin', roleBranchManager: 'Branch Manager', roleEmployee: 'Employee',
  // Cash
  cashbookOverview: 'Cashbook & Branch Overview',
  cashMovements: 'Cash Movements', noEntries: 'No entries',
  activeBranches: 'Active branches',
  // Reports
  revenueOverview: 'Revenue & Profit Overview', today: 'Today',
  totalFees: 'Total Fees', totalProfit: 'Total Profit',
  totalVolumeStat: 'Total Volume',
  // Audit
  totalEntries: 'entries total', user: 'User', action: 'Action', entity: 'Entity',
  // Cash
  deposit: 'Deposit', withdraw: 'Withdraw', dayClose: 'Day Close',
  balance: 'Balance', journal: 'Journal',
  // Export
  exportOptions: 'Export Options', exportFilters: 'Filters',
  selectStatuses: 'Select Statuses', dateFrom: 'Date From', dateTo: 'Date To',
  exportSelected: 'Export', exportAll: 'Export All', exportWithFilters: 'Filtered Export',
  paidOutBy: 'Paid Out By', createdBy: 'Created By',
  // Branches
  manageBranches: 'Branch Management', newBranch: 'New Branch',
  branchManager: 'Branch Manager', initialBalance: 'Initial Balance',
  noBranches: 'No branches yet', branchCreated: 'Branch created',
  branchDeleted: 'Branch deleted', branchUpdated: 'Branch updated',
  branchName: 'Branch Name', branchCity: 'City', branchAddress: 'Address', branchPhone: 'Phone',
  confirmDeleteBranch: 'Really delete this branch?',
  endOfDayBalance: 'End-of-Day Balance', manager: 'Manager',
  employeeCount: 'Employees', noneAssigned: '—',
};


const AR: typeof EN = {
  dashboard: 'لوحة التحكم', transfers: 'التحويلات', customers: 'العملاء',
  cash: 'الخزنة والفروع', exchange: 'صرف العملات',
  reports: 'التقارير', settings: 'الإعدادات', audit: 'سجل المراقبة',
  logout: 'تسجيل الخروج',
  search: 'بحث...', save: 'حفظ', cancel: 'إلغاء',
  delete: 'حذف', edit: 'تعديل', create: 'إنشاء جديد',
  confirm: 'تأكيد', back: 'رجوع', next: 'التالي',
  loading: 'جار التحميل...', noData: 'لا توجد بيانات', all: 'الكل',
  allBranches: 'جميع الفروع',
  email: 'البريد الإلكتروني', password: 'كلمة المرور', signIn: 'تسجيل الدخول',
  emailRequired: 'يرجى إدخال البريد الإلكتروني وكلمة المرور',
  invalidCredentials: 'بريد إلكتروني أو كلمة مرور غير صحيحة',
  loggingIn: 'جار تسجيل الدخول...',
  welcome: 'مرحبا!',
  demoAdmin: 'المدير: admin@firma.de / admin123',
  demoUser: 'المستخدم: nutzer@firma.de / nutzer123',
  newTransfer: 'تحويل جديد', sender: 'المرسل', receiver: 'المستلم',
  amount: 'المبلغ', currency: 'العملة', fee: 'الرسوم',
  status: 'الحالة', branch: 'الفرع', pickupTime: 'وقت الاستلام',
  senderName: 'اسم المرسل', senderPhone: 'هاتف المرسل',
  receiverName: 'اسم المستلم', receiverCountry: 'بلد المستلم',
  receiverPhone: 'هاتف المستلم',
  totalTransfers: 'إجمالي التحويلات', allStatuses: 'جميع الحالات',
  actions: 'الإجراءات', details: 'التفاصيل', close: 'إغلاق',
  createTransfer: 'إنشاء تحويل',
  requiredField: 'حقل مطلوب', mustBePositive: 'يجب أن يكون إيجابياً',
  statusUpdateError: 'خطأ في تحديث الحالة', transferCreated: 'تم إنشاء التحويل',
  creationError: 'خطأ في الإنشاء', confirmCancel: 'هل تريد الإلغاء بالفعل؟',
  cancelled: 'تم الإلغاء', cancelError: 'فشل الإلغاء',
  template: 'نموذج', importPreview: 'معاينة الاستيراد', rows: 'صفوف', moreRows: 'إضافي',
  noTransfers: 'لا توجد تحويلات', page: 'صفحة', of: 'من',
  employee: 'الموظف', note: 'ملاحظة',
  // Customers
  firstName: 'الاسم الأول', lastName: 'الاسم الأخير', phone: 'الهاتف', idNumber: 'رقم الهوية',
  transferCount: 'التحويلات', newCustomer: 'عميل جديد', noCustomers: 'لا يوجد عملاء',
  // CSV messages
  exported: 'سجل تم تصديره', templateDownloaded: 'تم تنزيل النموذج',
  csvEmpty: 'ملف CSV فارغ', missingColumns: 'أعمدة مفقودة:',
  importFailed: 'فشل الاستيراد', importDone: 'اكتمل الاستيراد',
  rowsLoaded: 'صف محمّل — يرجى المراجعة',
  customerUpdated: 'تم تحديث العميل', customerCreated: 'تم إنشاء العميل',
  transferCreatedOk: 'تم إنشاء التحويل',
  // Dashboard
  activeLocations: 'الفروع النشطة', recentTransfers: 'التحويلات الأخيرة',
  viewAll: 'عرض الكل', branches: 'الفروع',
  todayTransfers: 'إجمالي التحويلات', todayRevenue: 'الإيرادات اليوم',
  pending: 'معلق', waitingForProcessing: 'في انتظار المعالجة',
  totalRevenue: 'الإجمالي',
  // Exchange
  newExchange: 'صرف جديد', customerGives: 'العميل يعطي',
  customerGets: 'العميل يستلم', rate: 'سعر الصرف', margin: 'الهامش',
  grossAmount: 'المبلغ الإجمالي', customerPayout: 'مبلغ العميل', profit: 'الربح',
  from: 'من', to: 'إلى', customerAmount: 'مبلغ العميل',
  setBy: 'تعيين بواسطة', date: 'التاريخ', fromCurrency: 'من عملة', toCurrency: 'إلى عملة',
  customerName: 'اسم العميل (اختياري)',
  active: 'نشط', inactive: 'غير نشط',
  activeRates: 'أسعار الصرف النشطة', addRate: 'إضافة سعر',
  newExchangeModal: 'صرف جديد', newRateModal: 'سعر صرف جديد',
  noRates: 'لا توجد أسعار', noExchanges: 'لا توجد معاملات',
  exchangeSuccess: 'تم الصرف بنجاح!', rateCreated: 'تم إنشاء السعر',
  rateDeleted: 'تم حذف السعر', confirmDeleteRate: 'هل تريد حذف السعر؟',
  todayTransactions: 'معاملات اليوم', todayProfit: 'ربح اليوم',
  totalVolume: 'الحجم الإجمالي', exchangeRates: 'أسعار الصرف',
  cashBalances: 'أرصدة الخزنة', history: 'السجل',
  confirmExchange: 'تأكيد الصرف',
  // Settings
  feeRules: 'قواعد الرسوم', country: 'البلد', type: 'النوع', value: 'القيمة',
  role: 'الدور', createUser: 'إنشاء', newUser: 'مستخدم جديد',
  users: 'المستخدمون', currencies: 'العملات',
  roleAdmin: 'مدير النظام', roleBranchManager: 'مدير الفرع', roleEmployee: 'موظف',
  // Cash
  cashbookOverview: 'دفتر الخزنة ونظرة عامة على الفروع',
  cashMovements: 'تحركات الخزنة', noEntries: 'لا توجد إدخالات',
  activeBranches: 'الفروع النشطة',
  // Reports
  revenueOverview: 'نظرة عامة على الإيرادات والأرباح', today: 'اليوم',
  totalFees: 'إجمالي الرسوم', totalProfit: 'إجمالي الربح',
  totalVolumeStat: 'الحجم الإجمالي',
  // Audit
  totalEntries: 'إجمالي الإدخالات', user: 'المستخدم', action: 'الإجراء', entity: 'الكيان',
  // Cash
  deposit: 'إيداع', withdraw: 'سحب', dayClose: 'إغلاق اليوم',
  balance: 'رصيد الخزنة', journal: 'دفتر الخزنة',
  // Export
  exportOptions: 'خيارات التصدير', exportFilters: 'تصفية',
  selectStatuses: 'تحديد الحالات', dateFrom: 'من تاريخ', dateTo: 'إلى تاريخ',
  exportSelected: 'تصدير', exportAll: 'تصدير الكل', exportWithFilters: 'تصدير مصفّى',
  paidOutBy: 'صرفه بواسطة', createdBy: 'أنشأه بواسطة',
  // Branches
  manageBranches: 'إدارة الفروع', newBranch: 'فرع جديد',
  branchManager: 'مدير الفرع', initialBalance: 'الرصيد الابتدائي',
  noBranches: 'لا توجد فروع بعد', branchCreated: 'تم إنشاء الفرع',
  branchDeleted: 'تم حذف الفرع', branchUpdated: 'تم تحديث الفرع',
  branchName: 'اسم الفرع', branchCity: 'المدينة', branchAddress: 'العنوان', branchPhone: 'الهاتف',
  confirmDeleteBranch: 'هل تريد حذف هذا الفرع؟',
  endOfDayBalance: 'رصيد نهاية اليوم', manager: 'المدير',
  employeeCount: 'الموظفون', noneAssigned: '—',
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private _lang = signal<Lang>((localStorage.getItem('gt_lang') as Lang) || 'en');
  readonly lang  = this._lang.asReadonly();
  readonly isRtl = computed(() => this._lang() === 'ar');
  readonly t     = computed(() => this._lang() === 'ar' ? AR : EN);

  setLang(lang: Lang) {
    this._lang.set(lang);
    localStorage.setItem('gt_lang', lang);
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
}
