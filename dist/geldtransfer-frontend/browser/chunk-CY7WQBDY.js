import {
  AuthService
} from "./chunk-GJ6YEAFB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-S44ARYWC.js";
import {
  ToastService
} from "./chunk-Q3T46Q4O.js";
import {
  BranchService,
  CashService
} from "./chunk-DWG6BYJQ.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IURLCCSA.js";

// src/app/features/cash/cash.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CashComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275property("value", b_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r3.name);
  }
}
function CashComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_6_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBranch, $event) || (ctx_r1.selectedBranch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CashComponent_Conditional_6_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadBalance());
    });
    \u0275\u0275repeaterCreate(2, CashComponent_Conditional_6_For_3_Template, 2, 2, "option", 23, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBranch);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.branches());
  }
}
function CashComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("in", e_r4.type === "CASH_IN")("out", e_r4.type === "CASH_OUT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", e_r4.type === "CASH_IN" ? "+" : "\u2212", "\u20AC ", \u0275\u0275pipeBind2(3, 8, e_r4.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r4.note || e_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 11, e_r4.createdAt, "dd.MM HH:mm"));
  }
}
function CashComponent_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "Keine Eintr\xE4ge");
    \u0275\u0275elementEnd();
  }
}
function CashComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "span", 27);
    \u0275\u0275elementStart(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", b_r5.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(9, 5, b_r5.cashBalance, "1.0-0"), "");
  }
}
function CashComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function CashComponent_Conditional_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(false));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function CashComponent_Conditional_47_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "Einzahlung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function CashComponent_Conditional_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "label", 39);
    \u0275\u0275text(10, "Betrag (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_47_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 38)(13, "label", 39);
    \u0275\u0275text(14, "Notiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_47_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.note, $event) || (ctx_r1.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 42)(17, "button", 43);
    \u0275\u0275listener("click", function CashComponent_Conditional_47_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(false));
    });
    \u0275\u0275text(18, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 16);
    \u0275\u0275listener("click", function CashComponent_Conditional_47_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDeposit());
    });
    \u0275\u0275text(20, "Einzahlen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.note);
  }
}
function CashComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function CashComponent_Conditional_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(false));
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function CashComponent_Conditional_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "span", 35);
    \u0275\u0275text(4, "Auszahlung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function CashComponent_Conditional_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "label", 39);
    \u0275\u0275text(10, "Betrag (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_48_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 38)(13, "label", 39);
    \u0275\u0275text(14, "Notiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_48_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.note, $event) || (ctx_r1.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 42)(17, "button", 43);
    \u0275\u0275listener("click", function CashComponent_Conditional_48_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(false));
    });
    \u0275\u0275text(18, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 17);
    \u0275\u0275listener("click", function CashComponent_Conditional_48_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doWithdraw());
    });
    \u0275\u0275text(20, "Auszahlen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.note);
  }
}
var CashComponent = class _CashComponent {
  constructor(svc, branchSvc, toast, i18n, auth) {
    this.svc = svc;
    this.branchSvc = branchSvc;
    this.toast = toast;
    this.i18n = i18n;
    this.auth = auth;
    this.balance = signal(0);
    this.journal = signal([]);
    this.branches = signal([]);
    this.showDeposit = signal(false);
    this.showWithdraw = signal(false);
    this.amount = 0;
    this.note = "";
    this.selectedBranch = "";
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.branchSvc.getAll().subscribe((b) => {
      this.branches.set(b);
      if (this.auth.isAdmin() && b.length > 0) {
        this.selectedBranch = b[0].name;
      }
    });
    this.loadBalance();
    this.svc.getJournal().subscribe((r) => this.journal.set(r.data));
  }
  loadBalance() {
    const branch = this.auth.isAdmin() ? this.selectedBranch : this.auth.user()?.branch ?? "";
    if (branch) {
      this.svc.getBalance(branch).subscribe((r) => this.balance.set(r.balance));
    }
  }
  getBranch() {
    return this.auth.isAdmin() ? this.selectedBranch : this.auth.user()?.branch ?? "";
  }
  doDeposit() {
    const branch = this.getBranch();
    if (!branch) {
      this.toast.error("Bitte Filiale ausw\xE4hlen");
      return;
    }
    if (this.amount <= 0) {
      this.toast.error("Betrag muss positiv sein");
      return;
    }
    this.svc.deposit({ amount: this.amount, note: this.note, branch }).subscribe({
      next: () => {
        this.toast.success("Einzahlung erfolgreich");
        this.showDeposit.set(false);
        this.reload();
      },
      error: (e) => this.toast.error(e.error?.message || "Fehler")
    });
  }
  doWithdraw() {
    const branch = this.getBranch();
    if (!branch) {
      this.toast.error("Bitte Filiale ausw\xE4hlen");
      return;
    }
    if (this.amount <= 0) {
      this.toast.error("Betrag muss positiv sein");
      return;
    }
    this.svc.withdraw({ amount: this.amount, note: this.note, branch }).subscribe({
      next: () => {
        this.toast.success("Auszahlung erfolgreich");
        this.showWithdraw.set(false);
        this.reload();
      },
      error: (e) => this.toast.error(e.error?.message || "Fehler")
    });
  }
  reload() {
    this.loadBalance();
    this.svc.getJournal().subscribe((r) => this.journal.set(r.data));
    this.branchSvc.getAll().subscribe((b) => this.branches.set(b));
  }
  static {
    this.\u0275fac = function CashComponent_Factory(t) {
      return new (t || _CashComponent)(\u0275\u0275directiveInject(CashService), \u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashComponent, selectors: [["app-cash"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 14, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [2, "margin-bottom", "1rem"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "green"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-sub"], [1, "kpi-icon", "blue"], [1, "cash-grid"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "action-btns"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [2, "margin-top", "1rem"], [1, "journal-entry"], [1, "text-muted", 2, "text-align", "center", "padding", "1rem"], [1, "modal-backdrop"], [1, "form-control", 2, "max-width", "250px", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "entry-amount"], [1, "text-muted", 2, "flex", "1", "font-size", ".8rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "color-dot"], [2, "flex", "1"], [2, "font-weight", "600", "font-size", ".875rem"], [2, "font-size", ".75rem", "color", "var(--muted)"], [2, "font-family", "'Syne',sans-serif", "font-weight", "700", "color", "var(--accent2)"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"]], template: function CashComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Kassenbuch & Filial\xFCbersicht");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, CashComponent_Conditional_6_Template, 4, 1, "div", 3);
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
        \u0275\u0275text(10, "\u{1F4B6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "div", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 10);
        \u0275\u0275text(21, "\u{1F3E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "div", 7);
        \u0275\u0275text(24, "Filialen aktiv");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "span", 14);
        \u0275\u0275text(31, "Kassenbewegungen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 15)(33, "button", 16);
        \u0275\u0275listener("click", function CashComponent_Template_button_click_33_listener() {
          return ctx.showDeposit.set(true);
        });
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 17);
        \u0275\u0275listener("click", function CashComponent_Template_button_click_35_listener() {
          return ctx.showWithdraw.set(true);
        });
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 18);
        \u0275\u0275repeaterCreate(38, CashComponent_For_39_Template, 9, 14, "div", 19, _forTrack0, false, CashComponent_ForEmpty_40_Template, 2, 0, "p", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 12)(42, "div", 13)(43, "span", 14);
        \u0275\u0275text(44, "Filialen");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(45, CashComponent_For_46_Template, 10, 8, "div", 19, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(47, CashComponent_Conditional_47_Template, 21, 2, "div", 21)(48, CashComponent_Conditional_48_Template, 21, 2, "div", 21);
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().cash);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(6, ctx.auth.isAdmin() ? 6 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().balance);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(16, 11, ctx.balance(), "1.0-0"), "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedBranch || ((tmp_4_0 = ctx.auth.user()) == null ? null : tmp_4_0.branch) || "Alle Filialen");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.branches().length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\uFF0B ", ctx.t().deposit, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2212 ", ctx.t().withdraw, "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.journal());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.branches());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(47, ctx.showDeposit() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(48, ctx.showWithdraw() ? 48 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n.cash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.balance-big[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: var(--accent2);\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .75rem;\n  margin-top: 1rem;\n}\n.journal-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem .75rem;\n  border-radius: var(--radius-sm);\n  background: var(--bg);\n  margin-bottom: .4rem;\n}\n.entry-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.entry-amount.in[_ngcontent-%COMP%] {\n  color: var(--accent2);\n}\n.entry-amount.out[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.color-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .cash-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cash.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashComponent, { className: "CashComponent", filePath: "src\\app\\features\\cash\\cash.component.ts", lineNumber: 132 });
})();
export {
  CashComponent
};
//# sourceMappingURL=chunk-CY7WQBDY.js.map
