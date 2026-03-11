import {
  AuthService
} from "./chunk-32X4P3PF.js";
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
} from "./chunk-F2GSEQJM.js";
import {
  ToastService
} from "./chunk-AE6XUB22.js";
import {
  BranchService,
  CashService
} from "./chunk-3YIH5T6Q.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  I18nService,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMapInterpolate1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-C4ZRXIER.js";

// src/app/features/cash/cash.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.currency;
var _forTrack2 = ($index, $item) => $item.branch;
var _c0 = () => [];
function CashComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CashComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBankDeposit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function CashComponent_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDayClose());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\uF3E6 ", ctx_r1.t().newBankDeposit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uF4CB ", ctx_r1.t().openDayClose, "");
  }
}
function CashComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t().allBranches);
  }
}
function CashComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275property("value", b_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.name);
  }
}
function CashComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_8_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedBranch, $event) || (ctx_r1.selectedBranch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CashComponent_Conditional_8_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reload());
    });
    \u0275\u0275template(2, CashComponent_Conditional_8_Conditional_2_Template, 2, 1, "option", 20);
    \u0275\u0275repeaterCreate(3, CashComponent_Conditional_8_For_4_Template, 2, 2, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedBranch);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r1.auth.isAdmin() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.branches());
  }
}
function CashComponent_Conditional_54_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bal_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bal_r5.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, bal_r5.balance, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedBranch || ctx_r1.t().allBranches);
  }
}
function CashComponent_Conditional_54_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t().noData);
  }
}
function CashComponent_Conditional_54_For_9_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bal_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bal_r7.currency, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, bal_r7.amount, "1.0-0"));
  }
}
function CashComponent_Conditional_54_For_9_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(2, 1, b_r6.cashBalance, "1.0-0"), "");
  }
}
function CashComponent_Conditional_54_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275repeaterCreate(8, CashComponent_Conditional_54_For_9_For_9_Template, 6, 5, "div", 36, _forTrack1, false, CashComponent_Conditional_54_For_9_ForEmpty_10_Template, 3, 4, "span", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const b_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMapInterpolate1("width:12px;height:12px;border-radius:50%;background:", b_r6.color, ";flex-shrink:0;display:inline-block");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r6.city);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_14_0 = b_r6.balances) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : \u0275\u0275pureFunction0(6, _c0));
  }
}
function CashComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, CashComponent_Conditional_54_For_2_Template, 8, 6, "div", 23, _forTrack1, false, CashComponent_Conditional_54_ForEmpty_3_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26)(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, CashComponent_Conditional_54_For_9_Template, 11, 7, "div", 28, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.cashBalances());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().branches);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.branches());
  }
}
function CashComponent_Conditional_55_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 40);
    \u0275\u0275listener("click", function CashComponent_Conditional_55_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(true));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 41);
    \u0275\u0275listener("click", function CashComponent_Conditional_55_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(true));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.t().deposit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("- ", ctx_r1.t().withdraw, "");
  }
}
function CashComponent_Conditional_55_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.entryClass(e_r9.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r9.type);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pos", ctx_r1.isPositive(e_r9.type))("neg", !ctx_r1.isPositive(e_r9.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.isPositive(e_r9.type) ? "+" : "-", "", e_r9.currency, " ", \u0275\u0275pipeBind2(6, 12, e_r9.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r9.note || e_r9.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 15, e_r9.createdAt, "dd.MM HH:mm"));
  }
}
function CashComponent_Conditional_55_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t().noEntries);
  }
}
function CashComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CashComponent_Conditional_55_Conditional_4_Template, 5, 2, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, CashComponent_Conditional_55_For_6_Template, 12, 18, "div", 28, _forTrack0, false, CashComponent_Conditional_55_ForEmpty_7_Template, 2, 1, "p", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cashMovements);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.canBook() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.journal());
  }
}
function CashComponent_Conditional_56_For_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7, " / ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r10.currency, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 7, e_r10.expected, "1.0-0"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, e_r10.counted, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r10.diff >= 0 ? "diff-pos" : "diff-neg");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" (", e_r10.diff >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(13, 13, e_r10.diff, "1.0-0"), ")");
  }
}
function CashComponent_Conditional_56_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 32)(2, "div", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, CashComponent_Conditional_56_For_5_For_7_Template, 14, 16, "div", 48, _forTrack1);
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dc_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", dc_r11.date, " - ", dc_r11.branch, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dc_r11.createdBy);
    \u0275\u0275advance();
    \u0275\u0275repeater(dc_r11.entries);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(dc_r11.status === "closed" ? "badge-completed" : "badge-created");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dc_r11.status === "closed" ? ctx_r1.t().dayCloseClosed : ctx_r1.t().dayCloseOpen);
  }
}
function CashComponent_Conditional_56_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t().noDayCloses);
  }
}
function CashComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, CashComponent_Conditional_56_For_5_Template, 10, 6, "div", 46, _forTrack0, false, CashComponent_Conditional_56_ForEmpty_6_Template, 2, 1, "p", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().dayCloseHistory);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dayCloses());
  }
}
function CashComponent_Conditional_57_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 53);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 54);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(5, 4, p_r12.today, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(8, 7, p_r12.month, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(11, 10, p_r12.total, "1.2-2"), "");
  }
}
function CashComponent_Conditional_57_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().noProfit);
  }
}
function CashComponent_Conditional_57_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr", 56)(2, "td");
    \u0275\u0275text(3, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 57);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 57);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(6, 3, ctx_r1.sumField(ctx_r1.profitByBranch(), "today"), "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(9, 6, ctx_r1.sumField(ctx_r1.profitByBranch(), "month"), "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(12, 9, ctx_r1.sumField(ctx_r1.profitByBranch(), "total"), "1.2-2"), "");
  }
}
function CashComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 51)(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, CashComponent_Conditional_57_For_18_Template, 12, 13, "tr", null, _forTrack2, false, CashComponent_Conditional_57_ForEmpty_19_Template, 3, 1, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CashComponent_Conditional_57_Conditional_20_Template, 13, 12, "tfoot");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\uF4C8 ", ctx_r1.t().profitByBranch, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().profitToday);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().profitMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().profitTotal);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.profitByBranch());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(20, ctx_r1.profitByBranch().length > 0 ? 20 : -1);
  }
}
function CashComponent_Conditional_58_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("value", c_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14);
  }
}
function CashComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function CashComponent_Conditional_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(false));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CashComponent_Conditional_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function CashComponent_Conditional_58_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "div", 64)(9, "label", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_58_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.depositCurrency, $event) || (ctx_r1.depositCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(12, CashComponent_Conditional_58_For_13_Template, 2, 2, "option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64)(15, "label", 65);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_58_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 64)(19, "label", 65);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_58_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.note, $event) || (ctx_r1.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 68)(23, "button", 69);
    \u0275\u0275listener("click", function CashComponent_Conditional_58_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeposit.set(false));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 17);
    \u0275\u0275listener("click", function CashComponent_Conditional_58_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDeposit());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().deposit);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().currency);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.depositCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableCurrencies());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().amount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().note);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.note);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().deposit);
  }
}
function CashComponent_Conditional_59_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("value", c_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16);
  }
}
function CashComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function CashComponent_Conditional_59_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(false));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CashComponent_Conditional_59_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function CashComponent_Conditional_59_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "div", 64)(9, "label", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_59_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.depositCurrency, $event) || (ctx_r1.depositCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(12, CashComponent_Conditional_59_For_13_Template, 2, 2, "option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64)(15, "label", 65);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_59_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 64)(19, "label", 65);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_59_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.note, $event) || (ctx_r1.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 68)(23, "button", 69);
    \u0275\u0275listener("click", function CashComponent_Conditional_59_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showWithdraw.set(false));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 70);
    \u0275\u0275listener("click", function CashComponent_Conditional_59_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doWithdraw());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().withdraw);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().currency);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.depositCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableCurrencies());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().amount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().note);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.note);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().withdraw);
  }
}
function CashComponent_Conditional_60_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r18 = ctx.$implicit;
    \u0275\u0275property("value", b_r18.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r18.name);
  }
}
function CashComponent_Conditional_60_For_17_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("value", c_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r21);
  }
}
function CashComponent_Conditional_60_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_60_For_17_Template_select_ngModelChange_1_listener($event) {
      const entry_r20 = \u0275\u0275restoreView(_r19).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r20.currency, $event) || (entry_r20.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(2, CashComponent_Conditional_60_For_17_For_3_Template, 2, 2, "option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_60_For_17_Template_input_ngModelChange_4_listener($event) {
      const entry_r20 = \u0275\u0275restoreView(_r19).$implicit;
      \u0275\u0275twoWayBindingSet(entry_r20.amount, $event) || (entry_r20.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_For_17_Template_button_click_5_listener() {
      const i_r22 = \u0275\u0275restoreView(_r19).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bankDepositEntries.splice(i_r22, 1));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", entry_r20.currency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableCurrencies());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", entry_r20.amount);
  }
}
function CashComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBankDeposit.set(false));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBankDeposit.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "div", 64)(9, "label", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_60_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankDepositBranch, $event) || (ctx_r1.bankDepositBranch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(12, CashComponent_Conditional_60_For_13_Template, 2, 2, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 71);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, CashComponent_Conditional_60_For_17_Template, 7, 2, "div", 72, _forTrack1);
    \u0275\u0275elementStart(18, "button", 73);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bankDepositEntries.push({ currency: "USD", amount: 0 }));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 74)(21, "label", 65);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_60_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bankDepositNote, $event) || (ctx_r1.bankDepositNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 68)(25, "button", 69);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBankDeposit.set(false));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 17);
    \u0275\u0275listener("click", function CashComponent_Conditional_60_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doBankDeposit());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\uF3E6 ", ctx_r1.t().newBankDeposit, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().branch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankDepositBranch);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.branches());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cashPerCurrency);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.bankDepositEntries);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.t().addCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().bankDepositNote);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bankDepositNote);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().bankDeposit);
  }
}
function CashComponent_Conditional_61_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r24 = ctx.$implicit;
    \u0275\u0275property("value", b_r24.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r24.name);
  }
}
function CashComponent_Conditional_61_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 81)(4, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_61_For_31_Template_input_ngModelChange_4_listener($event) {
      const e_r26 = \u0275\u0275restoreView(_r25).$implicit;
      \u0275\u0275twoWayBindingSet(e_r26.counted, $event) || (e_r26.counted = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CashComponent_Conditional_61_For_31_Template_input_ngModelChange_4_listener() {
      const e_r26 = \u0275\u0275restoreView(_r25).$implicit;
      return \u0275\u0275resetView(e_r26.diff = e_r26.counted - e_r26.expected);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 84);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 81);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r26.currency);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", e_r26.counted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, e_r26.expected, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r26.diff >= 0 ? "diff-pos" : "diff-neg");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", e_r26.diff >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(10, 10, e_r26.diff, "1.2-2"), "");
  }
}
function CashComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function CashComponent_Conditional_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDayClose.set(false));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CashComponent_Conditional_61_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function CashComponent_Conditional_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDayClose.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "div", 64)(9, "label", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_61_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dayCloseBranch, $event) || (ctx_r1.dayCloseBranch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CashComponent_Conditional_61_Template_select_change_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prepareDayCloseEntries());
    });
    \u0275\u0275repeaterCreate(12, CashComponent_Conditional_61_For_13_Template, 2, 2, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64)(15, "label", 65);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_61_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dayCloseDate, $event) || (ctx_r1.dayCloseDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "table", 79)(19, "thead")(20, "tr", 80)(21, "th", 81);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 81);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 81);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 81);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, CashComponent_Conditional_61_For_31_Template, 11, 13, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 74)(33, "label", 65);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CashComponent_Conditional_61_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dayCloseNote, $event) || (ctx_r1.dayCloseNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 68)(37, "button", 69);
    \u0275\u0275listener("click", function CashComponent_Conditional_61_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDayClose.set(false));
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 18);
    \u0275\u0275listener("click", function CashComponent_Conditional_61_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDayClose());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\uF4CB ", ctx_r1.t().dayCloseTitle, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.t().branch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayCloseBranch);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.branches());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().dayCloseDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayCloseDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.t().currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u270F\uFE0F ", ctx_r1.t().physicalCount, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uF4BB ", ctx_r1.t().systemExpected, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().diff);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.dayCloseEntries);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().note);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayCloseNote);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t().dayCloseConfirm);
  }
}
var CashComponent = class _CashComponent {
  constructor(svc, branchSvc, toast, i18n, auth) {
    this.svc = svc;
    this.branchSvc = branchSvc;
    this.toast = toast;
    this.i18n = i18n;
    this.auth = auth;
    this.cashTab = signal("balances");
    this.cashBalances = signal([]);
    this.journal = signal([]);
    this.branches = signal([]);
    this.dayCloses = signal([]);
    this.profitByBranch = signal([]);
    this.showDeposit = signal(false);
    this.showWithdraw = signal(false);
    this.showBankDeposit = signal(false);
    this.showDayClose = signal(false);
    this.amount = 0;
    this.note = "";
    this.depositCurrency = "EUR";
    this.selectedBranch = "";
    this.bankDepositBranch = "";
    this.bankDepositNote = "";
    this.bankDepositEntries = [{ currency: "EUR", amount: 0 }];
    this.dayCloseBranch = "";
    this.dayCloseDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.dayCloseNote = "";
    this.dayCloseEntries = [];
    this.availableCurrencies = computed(() => ["EUR", "USD", "SYP", "LBP", "TRY", "EGP"]);
    this.totalEur = computed(() => this.cashBalances().find((b) => b.currency === "EUR")?.balance ?? 0);
    this.profitToday = computed(() => {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      return this.journal().filter((e) => e.type === "PROFIT" && e.createdAt.startsWith(today)).reduce((s, e) => s + e.amount, 0);
    });
    this.profitMonth = computed(() => {
      const month = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
      return this.journal().filter((e) => e.type === "PROFIT" && e.createdAt.startsWith(month)).reduce((s, e) => s + e.amount, 0);
    });
    this.isAdminOrManager = computed(() => this.auth.isAdmin() || this.auth.isManager());
    this.canBook = computed(() => {
      const u = this.auth.user();
      if (!u)
        return false;
      if (u.role === "admin")
        return true;
      if (u.role === "accountant")
        return !!u.canBook;
      return false;
    });
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.branchSvc.getAll().subscribe((b) => {
      this.branches.set(b);
      if (b.length > 0) {
        const userBranch = this.auth.user()?.branch;
        this.selectedBranch = userBranch ?? (this.auth.isAdmin() ? "" : b[0].name);
        this.bankDepositBranch = b[0].name;
        this.dayCloseBranch = b[0].name;
      }
    });
    this.reload();
  }
  reload() {
    const branch = this.selectedBranch;
    this.svc.getMultiBalances(branch).subscribe((r) => this.cashBalances.set(r));
    this.svc.getJournal({ branch }).subscribe((r) => this.journal.set(r.data));
    this.svc.getDayCloses(branch).subscribe((r) => this.dayCloses.set(r));
  }
  loadProfits() {
    this.svc.getProfits().subscribe((r) => this.profitByBranch.set(r));
  }
  sumField(arr, field) {
    return arr.reduce((s, item) => s + (item[field] ?? 0), 0);
  }
  entryClass(type) {
    if (["CASH_IN", "BANK_DEPOSIT"].includes(type))
      return "entry-in";
    if (["CASH_OUT", "TRANSFER_PAYOUT"].includes(type))
      return "entry-out";
    if (type === "EXCHANGE")
      return "entry-exchange";
    if (type === "PROFIT")
      return "entry-profit";
    return "";
  }
  isPositive(type) {
    return ["CASH_IN", "BANK_DEPOSIT", "PROFIT"].includes(type);
  }
  getBranch() {
    return this.selectedBranch || this.auth.user()?.branch || "";
  }
  openBankDeposit() {
    this.bankDepositEntries = [{ currency: "EUR", amount: 0 }];
    this.bankDepositNote = "";
    if (this.branches().length)
      this.bankDepositBranch = this.getBranch() || this.branches()[0].name;
    this.showBankDeposit.set(true);
  }
  openDayClose() {
    this.dayCloseBranch = this.getBranch() || (this.branches()[0]?.name ?? "");
    this.dayCloseDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.dayCloseNote = "";
    this.prepareDayCloseEntries();
    this.showDayClose.set(true);
  }
  prepareDayCloseEntries() {
    const branch = this.branches().find((b) => b.name === this.dayCloseBranch);
    const balances = branch?.balances ?? [{ currency: "EUR", amount: branch?.cashBalance ?? 0 }];
    this.dayCloseEntries = balances.map((b) => ({ currency: b.currency, expected: b.amount, counted: 0, diff: -b.amount }));
  }
  doDeposit() {
    const branch = this.getBranch();
    if (!branch || this.amount <= 0) {
      this.toast.error(this.i18n.t().mustBePositive);
      return;
    }
    this.svc.deposit({ amount: this.amount, currency: this.depositCurrency, note: this.note, branch }).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().deposit);
        this.showDeposit.set(false);
        this.amount = 0;
        this.note = "";
        this.reload();
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  doWithdraw() {
    const branch = this.getBranch();
    if (!branch || this.amount <= 0) {
      this.toast.error(this.i18n.t().mustBePositive);
      return;
    }
    this.svc.withdraw({ amount: this.amount, currency: this.depositCurrency, note: this.note, branch }).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().withdraw);
        this.showWithdraw.set(false);
        this.amount = 0;
        this.note = "";
        this.reload();
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  doBankDeposit() {
    const entries = this.bankDepositEntries.filter((e) => e.amount > 0);
    if (!entries.length) {
      this.toast.error(this.i18n.t().mustBePositive);
      return;
    }
    this.svc.bankDeposit({ branch: this.bankDepositBranch, entries, note: this.bankDepositNote }).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().bankDepositCreated);
        this.showBankDeposit.set(false);
        this.reload();
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  doDayClose() {
    this.svc.dayClose({ branch: this.dayCloseBranch, date: this.dayCloseDate, entries: this.dayCloseEntries, note: this.dayCloseNote }).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().dayCloseDone);
        this.showDayClose.set(false);
        this.reload();
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  static {
    this.\u0275fac = function CashComponent_Factory(t) {
      return new (t || _CashComponent)(\u0275\u0275directiveInject(CashService), \u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashComponent, selectors: [["app-cash"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 41, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [2, "display", "flex", "gap", ".5rem"], [2, "margin-bottom", "1rem"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "green"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-icon", "yellow"], [1, "kpi-icon", "purple"], [1, "kpi-icon", "blue"], [1, "cash-tabs"], [1, "c-tab", 3, "click"], [1, "card"], [1, "modal-backdrop"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "form-control", 2, "max-width", "250px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], [1, "currency-grid"], [1, "currency-card"], [1, "text-muted"], [1, "card", 2, "margin-top", "1.5rem"], [1, "card-header"], [1, "card-title"], [1, "journal-entry"], [1, "currency-code"], [1, "currency-amount"], [1, "currency-branch"], [2, "flex", "1"], [2, "font-weight", "600", "font-size", ".875rem"], [2, "font-size", ".75rem", "color", "var(--muted)"], [2, "text-align", "right"], [2, "font-size", ".8rem"], [2, "font-weight", "700", "color", "var(--accent2)"], [2, "color", "var(--muted)"], [1, "text-muted", 2, "text-align", "center", "padding", "1rem"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "entry-badge"], [1, "entry-amount"], [1, "text-muted", 2, "font-size", ".8rem", "margin-left", ".5rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "day-close-row"], [1, "fw-600", 2, "font-size", ".875rem"], [2, "text-align", "right", "margin-left", "1rem", "font-size", ".8rem"], [1, "badge"], [1, "fw-600"], [1, "table-wrap"], [2, "font-weight", "600"], [2, "text-align", "right", "color", "var(--accent2)", "font-weight", "600"], [2, "text-align", "right", "font-weight", "700", "font-size", "1rem"], ["colspan", "4", 1, "text-muted", 2, "text-align", "center", "padding", "1.5rem"], [2, "font-weight", "800", "background", "var(--surface)"], [2, "text-align", "right", "color", "var(--accent2)"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "form-label", 2, "margin-bottom", ".5rem"], [1, "bank-entry-row"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "form-group", 2, "margin-top", ".75rem"], [1, "form-control", 2, "width", "110px", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "width", "100%", "font-size", ".875rem", "margin-top", ".5rem"], [2, "color", "var(--muted)", "font-size", ".75rem"], [2, "padding", ".35rem"], [2, "padding", ".35rem", "font-weight", "700"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "form-control", 2, "height", "34px", "padding", ".25rem .5rem", 3, "ngModelChange", "ngModel"], [2, "padding", ".35rem", "color", "var(--muted)"]], template: function CashComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275template(7, CashComponent_Conditional_7_Template, 4, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, CashComponent_Conditional_8_Template, 5, 2, "div", 4);
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
        \u0275\u0275text(12, "\u20AC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div")(14, "div", 8);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 6)(20, "div", 10);
        \u0275\u0275text(21, "\uF4C8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "div", 8);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 9);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 6)(29, "div", 11);
        \u0275\u0275text(30, "\uF4B0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "div", 8);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 9);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 6)(38, "div", 12);
        \u0275\u0275text(39, "\uF3E6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div")(41, "div", 8);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 9);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 13)(46, "button", 14);
        \u0275\u0275listener("click", function CashComponent_Template_button_click_46_listener() {
          return ctx.cashTab.set("balances");
        });
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 14);
        \u0275\u0275listener("click", function CashComponent_Template_button_click_48_listener() {
          return ctx.cashTab.set("journal");
        });
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 14);
        \u0275\u0275listener("click", function CashComponent_Template_button_click_50_listener() {
          return ctx.cashTab.set("dayclose");
        });
        \u0275\u0275text(51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 14);
        \u0275\u0275listener("click", function CashComponent_Template_button_click_52_listener() {
          ctx.loadProfits();
          return ctx.cashTab.set("profits");
        });
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(54, CashComponent_Conditional_54_Template, 10, 2)(55, CashComponent_Conditional_55_Template, 8, 3, "div", 15)(56, CashComponent_Conditional_56_Template, 7, 2, "div", 15)(57, CashComponent_Conditional_57_Template, 21, 7, "div", 15)(58, CashComponent_Conditional_58_Template, 27, 9, "div", 16)(59, CashComponent_Conditional_59_Template, 27, 9, "div", 16)(60, CashComponent_Conditional_60_Template, 29, 9, "div", 16)(61, CashComponent_Conditional_61_Template, 41, 13, "div", 16);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().cash);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().cashbookOverview);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, ctx.canBook() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.isAdminOrManager() ? 8 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().totalCash);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(18, 32, ctx.totalEur(), "1.0-0"), "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().profitToday);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(27, 35, ctx.profitToday(), "1.2-2"), "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().profitMonth);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("EUR ", \u0275\u0275pipeBind2(36, 38, ctx.profitMonth(), "1.2-2"), "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().activeBranches);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.branches().length);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.cashTab() === "balances");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().cashPerCurrency);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.cashTab() === "journal");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().journal);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.cashTab() === "dayclose");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().dayCloseHistory);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.cashTab() === "profits");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\uF4C8 ", ctx.t().branchProfit, "");
        \u0275\u0275advance();
        \u0275\u0275conditional(54, ctx.cashTab() === "balances" ? 54 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(55, ctx.cashTab() === "journal" ? 55 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(56, ctx.cashTab() === "dayclose" ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(57, ctx.cashTab() === "profits" ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(58, ctx.showDeposit() ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(59, ctx.showWithdraw() ? 59 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(60, ctx.showBankDeposit() ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(61, ctx.showDayClose() ? 61 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n.cash-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  margin: 1rem 0;\n}\n.c-tab[_ngcontent-%COMP%] {\n  padding: .45rem 1rem;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  background: var(--surface);\n  cursor: pointer;\n  font-size: .85rem;\n  font-weight: 500;\n}\n.c-tab.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #fff;\n  border-color: var(--accent);\n}\n.currency-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 1rem;\n  margin: 1rem 0;\n}\n.currency-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 1rem 1.25rem;\n}\n.currency-code[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 700;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: .05em;\n}\n.currency-amount[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  color: var(--accent2);\n  margin: .15rem 0;\n}\n.currency-branch[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  color: var(--muted);\n}\n.journal-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem .75rem;\n  border-radius: var(--radius-sm);\n  background: var(--bg);\n  margin-bottom: .4rem;\n}\n.entry-badge[_ngcontent-%COMP%] {\n  font-size: .7rem;\n  font-weight: 700;\n  padding: .2rem .5rem;\n  border-radius: 999px;\n  text-transform: uppercase;\n}\n.entry-in[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.entry-out[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.entry-exchange[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.entry-profit[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #92400e;\n}\n.entry-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.pos[_ngcontent-%COMP%] {\n  color: var(--accent2);\n}\n.neg[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.diff-pos[_ngcontent-%COMP%] {\n  color: var(--accent2);\n  font-weight: 700;\n}\n.diff-neg[_ngcontent-%COMP%] {\n  color: var(--red);\n  font-weight: 700;\n}\n.day-close-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem .75rem;\n  border-radius: var(--radius-sm);\n  background: var(--bg);\n  margin-bottom: .4rem;\n}\n.bank-entry-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-bottom: .4rem;\n}\n@media (max-width:768px) {\n  .currency-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=cash.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashComponent, { className: "CashComponent", filePath: "src\\app\\features\\cash\\cash.component.ts", lineNumber: 348 });
})();
export {
  CashComponent
};
//# sourceMappingURL=chunk-JMKNUJZC.js.map
