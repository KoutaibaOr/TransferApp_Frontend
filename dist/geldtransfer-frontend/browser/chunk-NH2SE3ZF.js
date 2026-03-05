import {
  AuthService
} from "./chunk-XRHKFZIX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-KTZ56RQ7.js";
import {
  ToastService
} from "./chunk-FY6WX3KZ.js";
import {
  ExchangeService
} from "./chunk-SYZVRE4M.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  I18nService,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KWYNHGYO.js";

// src/app/features/exchange/exchange.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.branch;
var _forTrack2 = ($index, $item) => $item.currency;
function ExchangeComponent_Conditional_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_40_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(true));
    });
    \u0275\u0275text(1, "\uFF0B Kurs hinzuf\xFCgen");
    \u0275\u0275elementEnd();
  }
}
function ExchangeComponent_Conditional_40_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Aktionen");
    \u0275\u0275elementEnd();
  }
}
function ExchangeComponent_Conditional_40_For_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 25);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_40_For_24_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRate(r_r4.id));
    });
    \u0275\u0275text(2, "L\xF6schen");
    \u0275\u0275elementEnd()();
  }
}
function ExchangeComponent_Conditional_40_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 22);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ExchangeComponent_Conditional_40_For_24_Conditional_17_Template, 3, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.fromCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.toCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, r_r4.rate, "1.4-4"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r4.marginPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.setBy);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(r_r4.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.active ? "Aktiv" : "Inaktiv");
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r1.auth.isAdmin() ? 17 : -1);
  }
}
function ExchangeComponent_Conditional_40_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26)(2, "div", 27)(3, "div", 28);
    \u0275\u0275text(4, "\u{1F4B1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Keine Kurse");
    \u0275\u0275elementEnd()()()();
  }
}
function ExchangeComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "Aktive Wechselkurse");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExchangeComponent_Conditional_40_Conditional_4_Template, 2, 0, "button", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "table")(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Von");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Nach");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Kurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Marge %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Gesetzt von");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ExchangeComponent_Conditional_40_Conditional_21_Template, 2, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, ExchangeComponent_Conditional_40_For_24_Template, 18, 12, "tr", null, _forTrack0, false, ExchangeComponent_Conditional_40_ForEmpty_25_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r1.auth.isAdmin() ? 4 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275conditional(21, ctx_r1.auth.isAdmin() ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rates());
  }
}
function ExchangeComponent_Conditional_41_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, item_r5.balance, "1.2-2"));
  }
}
function ExchangeComponent_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275repeaterCreate(5, ExchangeComponent_Conditional_41_For_2_For_6_Template, 6, 5, "div", 32, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r6.branch);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(b_r6.items);
  }
}
function ExchangeComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, ExchangeComponent_Conditional_41_For_2_Template, 7, 1, "div", 29, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groupedBalances());
  }
}
function ExchangeComponent_Conditional_42_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 23);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 36);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 23);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 10, e_r7.fromAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.fromCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 13, e_r7.customerPayout, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.toCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 16, e_r7.customerPayout, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 19, e_r7.exchangeRate, "1.4-4"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(22, 22, e_r7.profit, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 25, e_r7.createdAt, "dd.MM.yy HH:mm"));
  }
}
function ExchangeComponent_Conditional_42_ForEmpty_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37)(2, "div", 27)(3, "div", 28);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Keine Umtausch-Transaktionen");
    \u0275\u0275elementEnd()()()();
  }
}
function ExchangeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 19)(2, "table")(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Von");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Nach");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Kundenbetrag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Kurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Filiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Datum");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, ExchangeComponent_Conditional_42_For_23_Template, 28, 28, "tr", null, _forTrack0, false, ExchangeComponent_Conditional_42_ForEmpty_24_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.exchanges());
  }
}
function ExchangeComponent_Conditional_43_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275property("value", r_r9.fromCurrency);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.fromCurrency);
  }
}
function ExchangeComponent_Conditional_43_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275property("value", r_r10.toCurrency);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.toCurrency);
  }
}
function ExchangeComponent_Conditional_43_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 59)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 59)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 59)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 60);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 61)(20, "span", 22);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 62);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 59)(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 63);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, ctx_r1.preview().rate, "1.4-4"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().grossAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 15, ctx_r1.preview().grossAmount, "1.2-2"), " ", ctx_r1.exDto.toCurrency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Marge (", ctx_r1.preview().marginPercent, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(18, 18, ctx_r1.preview().fee, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().customerPayout);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 21, ctx_r1.preview().customerPayout, "1.2-2"), " ", ctx_r1.exDto.toCurrency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().profit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(30, 24, ctx_r1.preview().profit, "1.2-2"), "");
  }
}
function ExchangeComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExchange.set(false));
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "span", 41);
    \u0275\u0275text(4, "Neuer Umtausch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExchange.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43)(8, "div", 44)(9, "div", 45)(10, "label", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 47)(13, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_43_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.fromAmount, $event) || (ctx_r1.exDto.fromAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ExchangeComponent_Conditional_43_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcPreview());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_43_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.fromCurrency, $event) || (ctx_r1.exDto.fromCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ExchangeComponent_Conditional_43_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcPreview());
    });
    \u0275\u0275repeaterCreate(15, ExchangeComponent_Conditional_43_For_16_Template, 2, 2, "option", 50, _forTrack0);
    \u0275\u0275elementStart(17, "option", 51);
    \u0275\u0275text(18, "EUR");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 52);
    \u0275\u0275text(20, "\u21C5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 45)(22, "label", 46);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 47);
    \u0275\u0275element(25, "input", 53);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementStart(27, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_43_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.toCurrency, $event) || (ctx_r1.exDto.toCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ExchangeComponent_Conditional_43_Template_select_change_27_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcPreview());
    });
    \u0275\u0275repeaterCreate(28, ExchangeComponent_Conditional_43_For_29_Template, 2, 2, "option", 50, _forTrack0);
    \u0275\u0275elementStart(30, "option", 51);
    \u0275\u0275text(31, "EUR");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(32, ExchangeComponent_Conditional_43_Conditional_32_Template, 31, 27, "div", 54);
    \u0275\u0275elementStart(33, "div", 45)(34, "label", 46);
    \u0275\u0275text(35, "Kundenname (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_43_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.customerName, $event) || (ctx_r1.exDto.customerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 56)(38, "button", 57);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_43_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExchange.set(false));
    });
    \u0275\u0275text(39, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 58);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_43_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeExchange());
    });
    \u0275\u0275text(41, " \u2713 Umtausch best\xE4tigen ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.t().customerGives);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.fromAmount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.fromCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeRates());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.t().customerGets);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(26, 9, (tmp_6_0 = ctx_r1.preview()) == null ? null : tmp_6_0.customerPayout, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.toCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeRates());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(32, ctx_r1.preview() ? 32 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.customerName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.preview());
  }
}
function ExchangeComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(false));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "span", 41);
    \u0275\u0275text(4, "Neuer Wechselkurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_44_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43)(8, "div", 65)(9, "div", 45)(10, "label", 46);
    \u0275\u0275text(11, "Von W\xE4hrung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_44_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.fromCurrency, $event) || (ctx_r1.rateDto.fromCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 45)(14, "label", 46);
    \u0275\u0275text(15, "Nach W\xE4hrung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_44_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.toCurrency, $event) || (ctx_r1.rateDto.toCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 45)(18, "label", 46);
    \u0275\u0275text(19, "Kurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_44_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.rate, $event) || (ctx_r1.rateDto.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 45)(22, "label", 46);
    \u0275\u0275text(23, "Marge %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_44_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.marginPercent, $event) || (ctx_r1.rateDto.marginPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 56)(26, "button", 57);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_44_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(false));
    });
    \u0275\u0275text(27, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 3);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_44_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createRate());
    });
    \u0275\u0275text(29, "Kurs anlegen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.fromCurrency);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.toCurrency);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.marginPercent);
  }
}
var ExchangeComponent = class _ExchangeComponent {
  constructor(svc, auth, toast, i18n) {
    this.svc = svc;
    this.auth = auth;
    this.toast = toast;
    this.i18n = i18n;
    this.tab = signal("rates");
    this.rates = signal([]);
    this.activeRates = signal([]);
    this.balances = signal([]);
    this.exchanges = signal([]);
    this.stats = signal(null);
    this.preview = signal(null);
    this.showExchange = signal(false);
    this.showNewRate = signal(false);
    this.exDto = { fromCurrency: "EUR", toCurrency: "MAD", fromAmount: 0, customerName: "" };
    this.fromCurrencies = computed(() => [...new Set(this.activeRates().map((r) => r.fromCurrency))]);
    this.toCurrencies = computed(() => [...new Set(this.activeRates().map((r) => r.toCurrency))]);
    this.rateDto = { fromCurrency: "", toCurrency: "", rate: 0, marginPercent: 1.5 };
    this.groupedBalances = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const b of this.balances()) {
        if (!map.has(b.branch))
          map.set(b.branch, { branch: b.branch, items: [] });
        map.get(b.branch).items.push(b);
      }
      return [...map.values()];
    });
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.svc.getRates().subscribe((r) => this.rates.set(r));
    this.svc.getActiveRates().subscribe((r) => this.activeRates.set(r));
    this.svc.getBalances().subscribe((b) => this.balances.set(b));
    this.svc.getExchanges().subscribe((r) => this.exchanges.set(r.data));
    this.svc.getStats().subscribe((s) => this.stats.set(s));
  }
  calcPreview() {
    if (!this.exDto.fromAmount || !this.exDto.fromCurrency || !this.exDto.toCurrency)
      return;
    this.svc.preview(this.exDto.fromCurrency, this.exDto.toCurrency, this.exDto.fromAmount).subscribe((p) => this.preview.set(p));
  }
  executeExchange() {
    this.svc.execute(__spreadProps(__spreadValues({}, this.exDto), { branch: this.auth.user()?.branch ?? "Berlin-Mitte" })).subscribe({
      next: () => {
        this.toast.success("Umtausch erfolgreich!");
        this.showExchange.set(false);
        this.preview.set(null);
        this.exDto = { fromCurrency: "EUR", toCurrency: "MAD", fromAmount: 0, customerName: "" };
        this.svc.getExchanges().subscribe((r) => this.exchanges.set(r.data));
        this.svc.getStats().subscribe((s) => this.stats.set(s));
      },
      error: () => this.toast.error("Fehler beim Umtausch")
    });
  }
  deleteRate(id) {
    if (!confirm("Kurs wirklich l\xF6schen?"))
      return;
    this.svc.deleteRate(id).subscribe({
      next: () => {
        this.toast.success("Kurs gel\xF6scht");
        this.svc.getRates().subscribe((r) => this.rates.set(r));
      },
      error: () => this.toast.error("Fehler beim L\xF6schen")
    });
  }
  createRate() {
    this.svc.createRate(this.rateDto).subscribe({
      next: () => {
        this.toast.success("Kurs angelegt");
        this.showNewRate.set(false);
        this.svc.getRates().subscribe((r) => this.rates.set(r));
      },
      error: () => this.toast.error("Fehler beim Anlegen")
    });
  }
  fmt(n) {
    if (n == null)
      return "\u2014";
    return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(n);
  }
  static {
    this.\u0275fac = function ExchangeComponent_Factory(t) {
      return new (t || _ExchangeComponent)(\u0275\u0275directiveInject(ExchangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExchangeComponent, selectors: [["app-exchange"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 16, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "kpi-grid", 2, "margin-bottom", "1.5rem"], [1, "kpi-card"], [1, "kpi-icon", "purple"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-icon", "green"], [1, "kpi-icon", "blue"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "card", 2, "padding", "0"], [1, "balances-grid"], [1, "modal-backdrop"], [1, "card-header", 2, "padding", "1.25rem 1.5rem"], [1, "card-title"], [1, "btn", "btn-ghost", "btn-sm"], [1, "table-wrap"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "currency-badge"], [1, "fw-600"], [1, "text-muted"], [1, "badge"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["colspan", "7"], [1, "empty-state"], [1, "empty-icon"], [1, "card", "branch-balance-card"], [1, "card-header"], [1, "balance-list"], [1, "balance-row"], [1, "balance-amount"], [1, "ref"], [1, "currency-badge", "sm"], [1, "text-ok", "fw-600"], ["colspan", "8"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "exchange-form"], [1, "form-group"], [1, "form-label"], [1, "amount-row"], ["type", "number", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", "currency-sel", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "EUR"], [1, "exchange-arrow"], ["readonly", "", 1, "form-control", 3, "value"], [1, "preview-box"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "preview-row"], [1, "text-warn"], [1, "preview-row", "highlight"], [1, "fw-600", "text-ok"], [1, "text-accent", "fw-600"], [1, "modal", 3, "click"], [1, "form-grid"], ["placeholder", "EUR", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "MAD", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.0001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ExchangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Wechselkurse & Umtausch-Transaktionen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_6_listener() {
          return ctx.showExchange.set(true);
        });
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6);
        \u0275\u0275text(11, "\u{1F4B1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div")(13, "div", 7);
        \u0275\u0275text(14, "Heute Transaktionen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 9);
        \u0275\u0275text(19, "\u{1F4B6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div")(21, "div", 7);
        \u0275\u0275text(22, "Heute Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 5)(26, "div", 10);
        \u0275\u0275text(27, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div")(29, "div", 7);
        \u0275\u0275text(30, "Gesamt Volumen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 8);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 11)(34, "button", 12);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_34_listener() {
          return ctx.tab.set("rates");
        });
        \u0275\u0275text(35, "Wechselkurse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 12);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_36_listener() {
          return ctx.tab.set("balances");
        });
        \u0275\u0275text(37, "Kassenbest\xE4nde");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 12);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_38_listener() {
          return ctx.tab.set("history");
        });
        \u0275\u0275text(39, "Verlauf");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, ExchangeComponent_Conditional_40_Template, 26, 3, "div", 13)(41, ExchangeComponent_Conditional_41_Template, 3, 0, "div", 14)(42, ExchangeComponent_Conditional_42_Template, 25, 1, "div", 13)(43, ExchangeComponent_Conditional_43_Template, 42, 12, "div", 15)(44, ExchangeComponent_Conditional_44_Template, 30, 4, "div", 15);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().exchange);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\uFF0B ", ctx.t().newExchange, "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.todayTransactions) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.todayProfit), "");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_4_0 = ctx.stats()) == null ? null : tmp_4_0.totalVolume), "");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "rates");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "balances");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "history");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(40, ctx.tab() === "rates" ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(41, ctx.tab() === "balances" ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.tab() === "history" ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(43, ctx.showExchange() ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(44, ctx.showNewRate() ? 44 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: var(--muted);\n  margin-top: .1rem;\n}\n.balances-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n  margin-top: 1.5rem;\n}\n.balance-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.balance-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5rem .75rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  transition: background var(--transition);\n}\n.balance-row[_ngcontent-%COMP%]:hover {\n  background: #eef4ff;\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-weight: 700;\n  font-size: .95rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg2);\n  border-radius: var(--radius);\n  border: 1.5px solid var(--border);\n  padding: 1.5rem;\n  box-shadow: var(--shadow);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.exchange-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .75rem;\n}\n.amount-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n}\n.currency-sel[_ngcontent-%COMP%] {\n  max-width: 90px;\n  flex-shrink: 0;\n}\n.exchange-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  color: var(--muted);\n  padding: .25rem 0;\n  margin: .5rem 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--ink2);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: .65rem .9rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border);\n  background: var(--bg);\n  font-size: .9rem;\n  color: var(--ink);\n  font-family: inherit;\n  transition: border-color var(--transition), box-shadow var(--transition);\n  width: 100%;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(29, 106, 255, .1);\n}\n.preview-box[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  margin-top: .5rem;\n}\n.preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: .875rem;\n  padding: .3rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.preview-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.preview-row.highlight[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  margin: 0 -.5rem;\n  padding: .5rem .5rem;\n  border-radius: var(--radius-sm);\n  border-bottom: none;\n  margin-top: .25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .45rem;\n  padding: .55rem 1.2rem;\n  border-radius: var(--radius-sm);\n  font-size: .875rem;\n  font-weight: 600;\n  border: none;\n  transition: all var(--transition);\n  white-space: nowrap;\n  line-height: 1;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #155de0;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(29, 106, 255, .3);\n}\n@media (max-width: 768px) {\n  .balances-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=exchange.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExchangeComponent, { className: "ExchangeComponent", filePath: "src\\app\\features\\exchange\\exchange.component.ts", lineNumber: 261 });
})();
export {
  ExchangeComponent
};
//# sourceMappingURL=chunk-NH2SE3ZF.js.map
