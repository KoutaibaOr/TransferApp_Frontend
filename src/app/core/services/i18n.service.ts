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
  totalTransfers: 'Transfers total', allStatuses: 'All Statuses',
  actions: 'Actions', details: 'Details', close: 'Close',
  createTransfer: 'Create Transfer',
  requiredField: 'is required field', mustBePositive: 'must be positive',
  statusUpdateError: 'Error updating status', transferCreated: 'Transfer created',
  creationError: 'Error creating transfer', confirmCancel: 'really cancel?',
  cancelled: 'cancelled', cancelError: 'Cancellation failed',
  // Exchange
  newExchange: 'New Exchange', customerGives: 'Customer gives',
  customerGets: 'Customer gets', rate: 'Rate', margin: 'Margin',
  grossAmount: 'Gross Amount', customerPayout: 'Customer Payout', profit: 'Profit',
  // Cash
  deposit: 'Deposit', withdraw: 'Withdraw', dayClose: 'Day Close',
  balance: 'Balance', journal: 'Journal',
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
  totalTransfers: 'إجمالي التحويلات', allStatuses: 'جميع الحالات',
  actions: 'الإجراءات', details: 'التفاصيل', close: 'إغلاق',
  createTransfer: 'إنشاء تحويل',
  requiredField: 'حقل مطلوب', mustBePositive: 'يجب أن يكون إيجابياً',
  statusUpdateError: 'خطأ في تحديث الحالة', transferCreated: 'تم إنشاء التحويل',
  creationError: 'خطأ في الإنشاء', confirmCancel: 'هل تريد الإلغاء بالفعل؟',
  cancelled: 'تم الإلغاء', cancelError: 'فشل الإلغاء',
  newExchange: 'صرف جديد', customerGives: 'العميل يعطي',
  customerGets: 'العميل يستلم', rate: 'سعر الصرف', margin: 'الهامش',
  grossAmount: 'المبلغ الإجمالي', customerPayout: 'مبلغ العميل', profit: 'الربح',
  deposit: 'إيداع', withdraw: 'سحب', dayClose: 'إغلاق اليوم',
  balance: 'رصيد الخزنة', journal: 'دفتر الخزنة',
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
