import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-S44ARYWC.js";
import {
  ToastService
} from "./chunk-Q3T46Q4O.js";
import {
  SettingsService
} from "./chunk-DWG6BYJQ.js";
import {
  CommonModule,
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IURLCCSA.js";

// src/app/features/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SettingsComponent_Conditional_10_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "button", 13);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_10_For_22_Template_button_click_14_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteFeeRule(r_r2.id));
    });
    \u0275\u0275text(15, "L\xF6schen");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.currency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r2.value, "", r_r2.type === "PERCENT" ? "%" : " \u20AC", "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(r_r2.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.active ? "Aktiv" : "Inaktiv");
  }
}
function SettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Geb\xFChrenregeln");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9)(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Land");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "W\xE4hrung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Typ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Wert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Aktionen");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, SettingsComponent_Conditional_10_For_22_Template, 16, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.feeRules());
  }
}
function SettingsComponent_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r5.email, " \xB7 ", (tmp_13_0 = u_r5.branch) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "Admin", "");
    \u0275\u0275advance();
    \u0275\u0275classMap(u_r5.role === "admin" ? "badge-in_progress" : "badge-created");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.role);
    \u0275\u0275advance();
    \u0275\u0275classMap(u_r5.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.active ? "Aktiv" : "Inaktiv");
  }
}
function SettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 14)(2, "span", 8);
    \u0275\u0275text(3, "Benutzer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(true));
    });
    \u0275\u0275text(5, "\uFF0B Neuer Benutzer");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, SettingsComponent_Conditional_11_For_7_Template, 12, 10, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.users());
  }
}
function SettingsComponent_Conditional_12_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r6.flag, " ", c_r6.code, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.symbol);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(c_r6.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.active ? "Aktiv" : "Inaktiv");
  }
}
function SettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9)(2, "table")(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Symbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SettingsComponent_Conditional_12_For_15_Template, 11, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.currencies());
  }
}
function SettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(false));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4, "Neuer Benutzer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "label", 28);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_13_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.name, $event) || (ctx_r2.newUser.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "label", 28);
    \u0275\u0275text(14, "E-Mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_13_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.email, $event) || (ctx_r2.newUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 27)(17, "label", 28);
    \u0275\u0275text(18, "Passwort");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_13_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.password, $event) || (ctx_r2.newUser.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 27)(21, "label", 28);
    \u0275\u0275text(22, "Rolle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_13_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.role, $event) || (ctx_r2.newUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 32);
    \u0275\u0275text(25, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 33);
    \u0275\u0275text(27, "Admin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 27)(29, "label", 28);
    \u0275\u0275text(30, "Filiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_13_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.branch, $event) || (ctx_r2.newUser.branch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 35)(33, "button", 36);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(false));
    });
    \u0275\u0275text(34, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 37);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createUser());
    });
    \u0275\u0275text(36, "Anlegen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.role);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.branch);
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(svc, toast, i18n) {
    this.svc = svc;
    this.toast = toast;
    this.i18n = i18n;
    this.tab = signal("fees");
    this.feeRules = signal([]);
    this.users = signal([]);
    this.currencies = signal([]);
    this.showNewUser = signal(false);
    this.newUser = { name: "", email: "", password: "", role: "user", branch: "" };
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.svc.getFeeRules().subscribe((r) => this.feeRules.set(r));
    this.svc.getUsers().subscribe((u) => this.users.set(u));
    this.svc.getCurrencies().subscribe((c) => this.currencies.set(c));
  }
  deleteFeeRule(id) {
    if (!confirm("L\xF6schen?"))
      return;
    this.svc.deleteFeeRule(id).subscribe({
      next: () => {
        this.toast.success("Gel\xF6scht");
        this.svc.getFeeRules().subscribe((r) => this.feeRules.set(r));
      },
      error: () => this.toast.error("Fehler")
    });
  }
  createUser() {
    this.svc.createUser(this.newUser).subscribe({
      next: () => {
        this.toast.success("Benutzer angelegt");
        this.showNewUser.set(false);
        this.svc.getUsers().subscribe((u) => this.users.set(u));
      },
      error: () => this.toast.error("Fehler")
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 11, consts: [[1, "page-header"], [1, "page-title"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "card", 2, "padding", "0"], [1, "card"], [1, "modal-backdrop"], [1, "card-header", 2, "padding", "1.25rem 1.5rem"], [1, "card-title"], [1, "table-wrap"], [1, "fw-600"], [1, "badge", "badge-created"], [1, "badge"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "card-header"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "user-row"], [1, "u-avatar"], [2, "flex", "1"], [1, "fw-600", 2, "font-size", ".875rem"], [2, "font-size", ".75rem", "color", "var(--muted)"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "user"], ["value", "admin"], ["placeholder", "Berlin-Mitte", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_4_listener() {
          return ctx.tab.set("fees");
        });
        \u0275\u0275text(5, "Geb\xFChrenregeln");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_6_listener() {
          return ctx.tab.set("users");
        });
        \u0275\u0275text(7, "Benutzer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_8_listener() {
          return ctx.tab.set("currencies");
        });
        \u0275\u0275text(9, "W\xE4hrungen");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, SettingsComponent_Conditional_10_Template, 23, 0, "div", 4)(11, SettingsComponent_Conditional_11_Template, 8, 0, "div", 5)(12, SettingsComponent_Conditional_12_Template, 16, 0, "div", 4)(13, SettingsComponent_Conditional_13_Template, 37, 5, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().settings);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "fees");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "users");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "currencies");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(10, ctx.tab() === "fees" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.tab() === "users" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.tab() === "currencies" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.showNewUser() ? 13 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  margin-bottom: .4rem;\n}\n.u-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .75rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n@media (max-width:900px) {\n  .settings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\features\\settings\\settings.component.ts", lineNumber: 111 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-6AZ5DLB3.js.map
