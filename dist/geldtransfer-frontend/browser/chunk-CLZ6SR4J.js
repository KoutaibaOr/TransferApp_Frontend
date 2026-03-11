import {
  CsvService
} from "./chunk-JY3243JI.js";
import {
  AuthService
} from "./chunk-32X4P3PF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-F2GSEQJM.js";
import {
  ToastService
} from "./chunk-AE6XUB22.js";
import {
  ExchangeService
} from "./chunk-3YIH5T6Q.js";
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
  ɵɵrepeaterTrackByIdentity,
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
} from "./chunk-C4ZRXIER.js";

// src/app/features/exchange/exchange.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.branch;
var _forTrack2 = ($index, $item) => $item.currency;
function ExchangeComponent_Conditional_45_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_45_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\uFF0B ", ctx_r1.t().addRate, "");
  }
}
function ExchangeComponent_Conditional_45_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t().actions);
  }
}
function ExchangeComponent_Conditional_45_For_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 26);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_45_For_24_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRate(r_r4.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().delete);
  }
}
function ExchangeComponent_Conditional_45_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ExchangeComponent_Conditional_45_For_24_Conditional_17_Template, 3, 1, "td");
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
    \u0275\u0275textInterpolate(r_r4.active ? ctx_r1.t().active : ctx_r1.t().inactive);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r1.auth.isAdmin() ? 17 : -1);
  }
}
function ExchangeComponent_Conditional_45_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4, "\u{1F4B1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().noRates);
  }
}
function ExchangeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExchangeComponent_Conditional_45_Conditional_4_Template, 2, 1, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "table")(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ExchangeComponent_Conditional_45_Conditional_21_Template, 2, 1, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, ExchangeComponent_Conditional_45_For_24_Template, 18, 12, "tr", null, _forTrack0, false, ExchangeComponent_Conditional_45_ForEmpty_25_Template, 7, 1, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().activeRates);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.auth.isAdmin() ? 4 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().from);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().to);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.t().margin, " %");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().setBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().status);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r1.auth.isAdmin() ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rates());
  }
}
function ExchangeComponent_Conditional_46_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
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
function ExchangeComponent_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275repeaterCreate(5, ExchangeComponent_Conditional_46_For_2_For_6_Template, 6, 5, "div", 33, _forTrack2);
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
function ExchangeComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, ExchangeComponent_Conditional_46_For_2_Template, 7, 1, "div", 30, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groupedBalances());
  }
}
function ExchangeComponent_Conditional_47_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementStart(12, "span", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 23);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 24);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 38);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 35);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 24);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 11, e_r7.fromAmount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.fromCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 14, e_r7.customerPayout, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.toCurrency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 17, e_r7.customerPayout, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 20, e_r7.exchangeRate, "1.4-4"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(22, 23, e_r7.profit, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r7.employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 26, e_r7.createdAt, "dd.MM.yy HH:mm"));
  }
}
function ExchangeComponent_Conditional_47_ForEmpty_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().noExchanges);
  }
}
function ExchangeComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "table")(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, ExchangeComponent_Conditional_47_For_30_Template, 30, 29, "tr", null, _forTrack0, false, ExchangeComponent_Conditional_47_ForEmpty_31_Template, 7, 1, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().history);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.exchanges().length, " ", ctx_r1.t().totalTransfers, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.t().from);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().to);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().customerAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().profit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().date);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.exchanges());
  }
}
function ExchangeComponent_Conditional_48_Conditional_17_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r10 = ctx.$implicit;
    \u0275\u0275property("value", b_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r10);
  }
}
function ExchangeComponent_Conditional_48_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "label", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_48_Conditional_17_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.exportOpts.branch, $event) || (ctx_r1.exportOpts.branch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ExchangeComponent_Conditional_48_Conditional_17_For_7_Template, 2, 2, "option", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().branch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exportOpts.branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().allBranches);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.exchangeBranches());
  }
}
function ExchangeComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExportModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExportModal.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "div", 46)(9, "div", 47)(10, "label", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_48_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exportOpts.dateFrom, $event) || (ctx_r1.exportOpts.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 47)(14, "label", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_48_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exportOpts.dateTo, $event) || (ctx_r1.exportOpts.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, ExchangeComponent_Conditional_48_Conditional_17_Template, 8, 3, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 50)(19, "button", 51);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_48_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExportModal.set(false));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 5);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_48_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runFilteredExport());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2B07 ", ctx_r1.t().exportOptions, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.t().dateFrom);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exportOpts.dateFrom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().dateTo);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exportOpts.dateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r1.auth.isAdminOrManager() ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B07 ", ctx_r1.t().exportSelected, "");
  }
}
function ExchangeComponent_Conditional_49_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    \u0275\u0275property("value", r_r12.fromCurrency);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.fromCurrency);
  }
}
function ExchangeComponent_Conditional_49_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r1.t().minAmountError, "");
  }
}
function ExchangeComponent_Conditional_49_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275property("value", r_r13.toCurrency);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r13.toCurrency);
  }
}
function ExchangeComponent_Conditional_49_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 66)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 66)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 66)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 67);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 68)(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 69);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 66)(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 70);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 13, ctx_r1.preview().rate, "1.4-4"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().grossAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 16, ctx_r1.preview().grossAmount, "1.2-2"), " ", ctx_r1.exDto.toCurrency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.t().margin, " (", ctx_r1.preview().marginPercent, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212 ", \u0275\u0275pipeBind2(18, 19, ctx_r1.preview().fee, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().customerPayout);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 22, ctx_r1.preview().customerPayout, "1.2-2"), " ", ctx_r1.exDto.toCurrency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().profit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(30, 25, ctx_r1.preview().profit, "1.2-2"), "");
  }
}
function ExchangeComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExchange.set(false));
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExchange.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "div", 56)(9, "div", 47)(10, "label", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 57)(13, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_49_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.fromAmount, $event) || (ctx_r1.exDto.fromAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ExchangeComponent_Conditional_49_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcPreview());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_49_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.fromCurrency, $event) || (ctx_r1.exDto.fromCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ExchangeComponent_Conditional_49_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcPreview());
    });
    \u0275\u0275repeaterCreate(15, ExchangeComponent_Conditional_49_For_16_Template, 2, 2, "option", 54, _forTrack0);
    \u0275\u0275elementStart(17, "option", 60);
    \u0275\u0275text(18, "EUR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, ExchangeComponent_Conditional_49_Conditional_19_Template, 2, 1, "p", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 62);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_49_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swapCurrencies());
    });
    \u0275\u0275text(21, "\u21C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 47)(23, "label", 48);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 57);
    \u0275\u0275element(26, "input", 63);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementStart(28, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_49_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.toCurrency, $event) || (ctx_r1.exDto.toCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ExchangeComponent_Conditional_49_Template_select_change_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcPreview());
    });
    \u0275\u0275repeaterCreate(29, ExchangeComponent_Conditional_49_For_30_Template, 2, 2, "option", 54, _forTrack0);
    \u0275\u0275elementStart(31, "option", 60);
    \u0275\u0275text(32, "EUR");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(33, ExchangeComponent_Conditional_49_Conditional_33_Template, 31, 28, "div", 64);
    \u0275\u0275elementStart(34, "div", 47)(35, "label", 48);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_49_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.exDto.customerName, $event) || (ctx_r1.exDto.customerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 50)(39, "button", 51);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_49_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showExchange.set(false));
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 65);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_49_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeExchange());
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().newExchangeModal);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.t().customerGives);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("input-error", ctx_r1.exDto.fromAmount > 0 && ctx_r1.exDto.fromAmount < 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.fromAmount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.fromCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeRates());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(19, ctx_r1.exDto.fromAmount > 0 && ctx_r1.exDto.fromAmount < 1 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.t().swapCurrencies);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().customerGets);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(27, 17, (tmp_10_0 = ctx_r1.preview()) == null ? null : tmp_10_0.customerPayout, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.toCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.activeRates());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(33, ctx_r1.preview() ? 33 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().customerName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.exDto.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.preview() || ctx_r1.exDto.fromAmount < 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r1.t().confirmExchange, " ");
  }
}
function ExchangeComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(false));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "div", 46)(9, "div", 47)(10, "label", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_50_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.fromCurrency, $event) || (ctx_r1.rateDto.fromCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 47)(14, "label", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_50_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.toCurrency, $event) || (ctx_r1.rateDto.toCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 47)(18, "label", 48);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_50_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.rate, $event) || (ctx_r1.rateDto.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 47)(22, "label", 48);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ExchangeComponent_Conditional_50_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rateDto.marginPercent, $event) || (ctx_r1.rateDto.marginPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 50)(26, "button", 51);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_50_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewRate.set(false));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 5);
    \u0275\u0275listener("click", function ExchangeComponent_Conditional_50_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createRate());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().newRateModal);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.t().fromCurrency);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.fromCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().toCurrency);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.toCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().rate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.rate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.t().margin, " %");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rateDto.marginPercent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().addRate);
  }
}
var EXCHANGE_EXPORT_HEADERS = [
  { key: "ref", label: "Reference" },
  { key: "branch", label: "Branch" },
  { key: "employee", label: "Employee" },
  { key: "customerName", label: "Customer Name" },
  { key: "customerIdNumber", label: "Customer ID" },
  { key: "fromCurrency", label: "From Currency" },
  { key: "fromAmount", label: "Amount Given" },
  { key: "toCurrency", label: "To Currency" },
  { key: "customerPayout", label: "Amount Received" },
  { key: "exchangeRate", label: "Exchange Rate" },
  { key: "marginPercent", label: "Margin %" },
  { key: "fee", label: "Fee" },
  { key: "profit", label: "Profit EUR" },
  { key: "createdAt", label: "Date" }
];
var ExchangeComponent = class _ExchangeComponent {
  constructor(svc, auth, toast, i18n, csv) {
    this.svc = svc;
    this.auth = auth;
    this.toast = toast;
    this.i18n = i18n;
    this.csv = csv;
    this.tab = signal("rates");
    this.rates = signal([]);
    this.activeRates = signal([]);
    this.balances = signal([]);
    this.exchanges = signal([]);
    this.stats = signal(null);
    this.preview = signal(null);
    this.showExchange = signal(false);
    this.showNewRate = signal(false);
    this.showExportModal = signal(false);
    this.exDto = { fromCurrency: "EUR", toCurrency: "MAD", fromAmount: 0, customerName: "" };
    this.exportOpts = { dateFrom: "", dateTo: "", branch: "" };
    this.fromCurrencies = computed(() => [...new Set(this.activeRates().map((r) => r.fromCurrency))]);
    this.toCurrencies = computed(() => [...new Set(this.activeRates().map((r) => r.toCurrency))]);
    this.exchangeBranches = computed(() => [...new Set(this.exchanges().map((e) => e.branch).filter(Boolean))]);
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
    this.svc.getBalances().subscribe((b) => {
      const userBranch = this.auth.user()?.branch;
      if (this.auth.isManager() && userBranch) {
        this.balances.set(b.filter((x) => x.branch === userBranch));
      } else {
        this.balances.set(b);
      }
    });
    const exchangeParams = this.auth.isManager() && this.auth.user()?.branch ? { branch: this.auth.user().branch } : {};
    this.svc.getExchanges(exchangeParams).subscribe((r) => this.exchanges.set(r.data));
    this.svc.getStats().subscribe((s) => this.stats.set(s));
  }
  calcPreview() {
    if (!this.exDto.fromAmount || this.exDto.fromAmount < 1 || !this.exDto.fromCurrency || !this.exDto.toCurrency) {
      this.preview.set(null);
      return;
    }
    this.svc.preview(this.exDto.fromCurrency, this.exDto.toCurrency, this.exDto.fromAmount).subscribe((p) => this.preview.set(p));
  }
  swapCurrencies() {
    const tmp = this.exDto.fromCurrency;
    this.exDto.fromCurrency = this.exDto.toCurrency;
    this.exDto.toCurrency = tmp;
    this.preview.set(null);
    if (this.exDto.fromAmount >= 1)
      this.calcPreview();
  }
  exportAll() {
    const p = { limit: 9999 };
    if (this.auth.isManager() && this.auth.user()?.branch)
      p["branch"] = this.auth.user().branch;
    this.svc.getExchanges(p).subscribe((r) => {
      const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      this.csv.export(r.data, EXCHANGE_EXPORT_HEADERS, `exchanges_all_${date}`);
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
    });
  }
  runFilteredExport() {
    const p = { limit: 9999 };
    if (this.exportOpts.dateFrom)
      p["dateFrom"] = this.exportOpts.dateFrom;
    if (this.exportOpts.dateTo)
      p["dateTo"] = this.exportOpts.dateTo;
    if (this.exportOpts.branch)
      p["branch"] = this.exportOpts.branch;
    else if (this.auth.isManager() && this.auth.user()?.branch)
      p["branch"] = this.auth.user().branch;
    this.svc.getExchanges(p).subscribe((r) => {
      const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      this.csv.export(r.data, EXCHANGE_EXPORT_HEADERS, `exchanges_${date}`);
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
      this.showExportModal.set(false);
    });
  }
  executeExchange() {
    this.svc.execute(__spreadProps(__spreadValues({}, this.exDto), { branch: this.auth.user()?.branch ?? "Berlin-Mitte" })).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().exchangeSuccess);
        this.showExchange.set(false);
        this.preview.set(null);
        this.exDto = { fromCurrency: "EUR", toCurrency: "MAD", fromAmount: 0, customerName: "" };
        this.svc.getExchanges().subscribe((r) => this.exchanges.set(r.data));
        this.svc.getStats().subscribe((s) => this.stats.set(s));
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  deleteRate(id) {
    if (!confirm(this.i18n.t().confirmDeleteRate))
      return;
    this.svc.deleteRate(id).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().rateDeleted);
        this.svc.getRates().subscribe((r) => this.rates.set(r));
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  createRate() {
    this.svc.createRate(this.rateDto).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().rateCreated);
        this.showNewRate.set(false);
        this.svc.getRates().subscribe((r) => this.rates.set(r));
      },
      error: () => this.toast.error(this.i18n.t().creationError)
    });
  }
  fmt(n) {
    if (n == null)
      return "\u2014";
    return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(n);
  }
  static {
    this.\u0275fac = function ExchangeComponent_Factory(t) {
      return new (t || _ExchangeComponent)(\u0275\u0275directiveInject(ExchangeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(CsvService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExchangeComponent, selectors: [["app-exchange"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 27, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "kpi-grid", 2, "margin-bottom", "1.5rem"], [1, "kpi-card"], [1, "kpi-icon", "purple"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-icon", "green"], [1, "kpi-icon", "blue"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "card", 2, "padding", "0"], [1, "balances-grid"], [1, "modal-backdrop"], [1, "card-header", 2, "padding", "1.25rem 1.5rem"], [1, "card-title"], [1, "btn", "btn-ghost", "btn-sm"], [1, "table-wrap"], [1, "currency-badge"], [1, "fw-600"], [1, "text-muted"], [1, "badge"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["colspan", "7"], [1, "empty-state"], [1, "empty-icon"], [1, "card", "branch-balance-card"], [1, "card-header"], [1, "balance-list"], [1, "balance-row"], [1, "balance-amount"], [1, "text-muted", 2, "font-size", ".8rem"], [1, "ref"], [1, "currency-badge", "sm"], [1, "text-ok", "fw-600"], ["colspan", "8"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "modal", "modal-lg", 3, "click"], [1, "exchange-form"], [1, "amount-row"], ["type", "number", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", "currency-sel", 3, "ngModelChange", "change", "ngModel"], ["value", "EUR"], [2, "color", "var(--red)", "font-size", ".78rem", "margin-top", ".35rem"], ["type", "button", 1, "btn", "btn-ghost", "exchange-swap-btn", 3, "click", "title"], ["readonly", "", 1, "form-control", 3, "value"], [1, "preview-box"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "preview-row"], [1, "text-warn"], [1, "preview-row", "highlight"], [1, "fw-600", "text-ok"], [1, "text-accent", "fw-600"], ["placeholder", "EUR", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "MAD", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.0001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ExchangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_7_listener() {
          return ctx.showExportModal.set(true);
        });
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_9_listener() {
          return ctx.exportAll();
        });
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_11_listener() {
          return ctx.showExchange.set(true);
        });
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "div", 8);
        \u0275\u0275text(16, "\u{1F4B1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div")(18, "div", 9);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 7)(23, "div", 11);
        \u0275\u0275text(24, "\u{1F4B6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div")(26, "div", 9);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 7)(31, "div", 12);
        \u0275\u0275text(32, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div")(34, "div", 9);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 10);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 13)(39, "button", 14);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_39_listener() {
          return ctx.tab.set("rates");
        });
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 14);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_41_listener() {
          return ctx.tab.set("balances");
        });
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 14);
        \u0275\u0275listener("click", function ExchangeComponent_Template_button_click_43_listener() {
          return ctx.tab.set("history");
        });
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, ExchangeComponent_Conditional_45_Template, 26, 10, "div", 15)(46, ExchangeComponent_Conditional_46_Template, 3, 0, "div", 16)(47, ExchangeComponent_Conditional_47_Template, 32, 12, "div", 15)(48, ExchangeComponent_Conditional_48_Template, 23, 8, "div", 17)(49, ExchangeComponent_Conditional_49_Template, 43, 20, "div", 17)(50, ExchangeComponent_Conditional_50_Template, 30, 11, "div", 17);
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_8_0;
        let tmp_10_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().exchange);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.t().exchangeRates, " & ", ctx.t().history, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u2B07 ", ctx.t().exportWithFilters, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2B07 ", ctx.t().exportAll, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\uFF0B ", ctx.t().newExchange, "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().todayTransactions);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_6_0 = (tmp_6_0 = ctx.stats()) == null ? null : tmp_6_0.todayTransactions) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "\u2014");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().todayProfit);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_8_0 = ctx.stats()) == null ? null : tmp_8_0.todayProfit), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().totalVolume);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_10_0 = ctx.stats()) == null ? null : tmp_10_0.totalVolume), "");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "rates");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().exchangeRates);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.tab() === "balances");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().cashBalances);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.tab() === "history");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().history);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.tab() === "rates" ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(46, ctx.tab() === "balances" ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(47, ctx.tab() === "history" ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(48, ctx.showExportModal() ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(49, ctx.showExchange() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(50, ctx.showNewRate() ? 50 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: var(--muted);\n  margin-top: .1rem;\n}\n.balances-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n  margin-top: 1.5rem;\n}\n.balance-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.balance-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5rem .75rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  transition: background var(--transition);\n}\n.balance-row[_ngcontent-%COMP%]:hover {\n  background: #eef4ff;\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-weight: 700;\n  font-size: .95rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg2);\n  border-radius: var(--radius);\n  border: 1.5px solid var(--border);\n  padding: 1.5rem;\n  box-shadow: var(--shadow);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.exchange-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .75rem;\n}\n.amount-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n}\n.currency-sel[_ngcontent-%COMP%] {\n  max-width: 90px;\n  flex-shrink: 0;\n}\n.exchange-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  color: var(--muted);\n  padding: .25rem 0;\n  margin: .5rem 0;\n}\n.exchange-swap-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 1.3rem;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  background: var(--bg2);\n  color: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition);\n  padding: 0;\n}\n.exchange-swap-btn[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n  color: #fff;\n  border-color: var(--accent);\n  transform: rotate(180deg);\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: var(--red) !important;\n  box-shadow: 0 0 0 3px rgba(255, 59, 92, .12) !important;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--ink2);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: .65rem .9rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border);\n  background: var(--bg);\n  font-size: .9rem;\n  color: var(--ink);\n  font-family: inherit;\n  transition: border-color var(--transition), box-shadow var(--transition);\n  width: 100%;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(29, 106, 255, .1);\n}\n.preview-box[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n  margin-top: .5rem;\n}\n.preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: .875rem;\n  padding: .3rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.preview-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.preview-row.highlight[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  margin: 0 -.5rem;\n  padding: .5rem .5rem;\n  border-radius: var(--radius-sm);\n  border-bottom: none;\n  margin-top: .25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .45rem;\n  padding: .55rem 1.2rem;\n  border-radius: var(--radius-sm);\n  font-size: .875rem;\n  font-weight: 600;\n  border: none;\n  transition: all var(--transition);\n  white-space: nowrap;\n  line-height: 1;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #155de0;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(29, 106, 255, .3);\n}\n@media (max-width: 768px) {\n  .balances-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=exchange.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExchangeComponent, { className: "ExchangeComponent", filePath: "src\\app\\features\\exchange\\exchange.component.ts", lineNumber: 331 });
})();
export {
  ExchangeComponent
};
//# sourceMappingURL=chunk-CLZ6SR4J.js.map
