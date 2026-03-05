import { Injectable, signal, computed } from '@angular/core';
import { Lang } from '../models';

const DE = {
  // Nav
  dashboard: 'Dashboard', transfers: 'Transfers', customers: 'Kunden',
  cash: 'Kasse & Filialen', exchange: 'Währungsumtausch',
  reports: 'Berichte', settings: 'Einstellungen', audit: 'Audit-Log',
  logout: 'Abmelden',
  // Common
  search: 'Suchen...', save: 'Speichern', cancel: 'Abbrechen',
  delete: 'Löschen', edit: 'Bearbeiten', create: 'Neu anlegen',
  confirm: 'Bestätigen', back: 'Zurück', next: 'Weiter',
  loading: 'Laden...', noData: 'Keine Daten', all: 'Alle',
  allBranches: 'Alle Filialen',
  // Auth
  email: 'E-Mail', password: 'Passwort', signIn: 'Anmelden',
  // Transfers
  newTransfer: 'Neuer Transfer', sender: 'Absender', receiver: 'Empfänger',
  amount: 'Betrag', currency: 'Währung', fee: 'Gebühr',
  status: 'Status', branch: 'Filiale', pickupTime: 'Abholzeit',
  senderName: 'Absender Name', senderPhone: 'Absender Telefon',
  receiverName: 'Empfänger Name', receiverCountry: 'Empfänger Land',
  // Exchange
  newExchange: 'Neuer Umtausch', customerGives: 'Kunde gibt',
  customerGets: 'Kunde bekommt', rate: 'Kurs', margin: 'Marge',
  grossAmount: 'Brutto', customerPayout: 'Auszahlung', profit: 'Gewinn',
  // Cash
  deposit: 'Einzahlung', withdraw: 'Auszahlung', dayClose: 'Tagesabschluss',
  balance: 'Kassenstand', journal: 'Kassenbuch',
};

const EN: typeof DE = {
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
  // Transfers
  newTransfer: 'New Transfer', sender: 'Sender', receiver: 'Receiver',
  amount: 'Amount', currency: 'Currency', fee: 'Fee',
  status: 'Status', branch: 'Branch', pickupTime: 'Pickup Time',
  senderName: 'Sender Name', senderPhone: 'Sender Phone',
  receiverName: 'Receiver Name', receiverCountry: 'Receiver Country',
  // Exchange
  newExchange: 'New Exchange', customerGives: 'Customer gives',
  customerGets: 'Customer gets', rate: 'Rate', margin: 'Margin',
  grossAmount: 'Gross Amount', customerPayout: 'Customer Payout', profit: 'Profit',
  // Cash
  deposit: 'Deposit', withdraw: 'Withdraw', dayClose: 'Day Close',
  balance: 'Balance', journal: 'Journal',
};


const AR: typeof DE = {
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
  newTransfer: 'تحويل جديد', sender: 'المرسل', receiver: 'المستلم',
  amount: 'المبلغ', currency: 'العملة', fee: 'الرسوم',
  status: 'الحالة', branch: 'الفرع', pickupTime: 'وقت الاستلام',
  senderName: 'اسم المرسل', senderPhone: 'هاتف المرسل',
  receiverName: 'اسم المستلم', receiverCountry: 'بلد المستلم',
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
  readonly t     = computed(() => {
    switch (this._lang()) {
      case 'ar': return AR;
      case 'en': return EN;
      default:    return DE;
    }
  });

  setLang(lang: Lang) {
    this._lang.set(lang);
    localStorage.setItem('gt_lang', lang);
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
}
