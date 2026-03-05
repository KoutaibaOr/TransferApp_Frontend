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
  TransferService
} from "./chunk-SYZVRE4M.js";
import {
  CommonModule,
  DecimalPipe,
  I18nService,
  NgForOf,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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

// src/app/features/transfers/transfers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransfersComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function TransfersComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    \u0275\u0275property("value", b_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2);
  }
}
function TransfersComponent_For_41_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function TransfersComponent_For_41_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const tr_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.advance(tr_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tr_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2192 ", ctx_r2.nextStatus(tr_r5.status), " ");
  }
}
function TransfersComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function TransfersComponent_For_41_Template_button_click_21_listener() {
      const tr_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(tr_r5));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, TransfersComponent_For_41_Conditional_23_Template, 2, 1, "button", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tr_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tr_r5.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r5.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r5.receiverName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(10, 12, tr_r5.amount, "1.2-2"), " ", tr_r5.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(13, 15, tr_r5.fee, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + tr_r5.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tr_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r5.branch);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t().details);
    \u0275\u0275advance();
    \u0275\u0275conditional(23, ctx_r2.nextStatus(tr_r5.status) ? 23 : -1);
  }
}
function TransfersComponent_ForEmpty_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.t().noData);
  }
}
function TransfersComponent_Conditional_50_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "Notiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selected().note);
  }
}
function TransfersComponent_Conditional_50_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_50_Conditional_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.advance(ctx_r2.selected());
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Status \u2192 ", ctx_r2.nextStatus(ctx_r2.selected().status), " ");
  }
}
function TransfersComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "div", 33)(9, "div", 34)(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "span", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 34)(20, "span", 35);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 34)(26, "span", 35);
    \u0275\u0275text(27, "Geb\xFChr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 34)(32, "span", 35);
    \u0275\u0275text(33, "Gewinn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 36);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 34)(38, "span", 35);
    \u0275\u0275text(39, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 19);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 34)(43, "span", 35);
    \u0275\u0275text(44, "Filiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 34)(48, "span", 35);
    \u0275\u0275text(49, "Mitarbeiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 34)(53, "span", 35);
    \u0275\u0275text(54, "Abholzeit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, TransfersComponent_Conditional_50_Conditional_57_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 37)(59, "button", 38);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_50_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, TransfersComponent_Conditional_50_Conditional_61_Template, 2, 1, "button", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selected().ref);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.t().sender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selected().senderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().receiver);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selected().receiverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 19, ctx_r2.selected().amount, "1.2-2"), " ", ctx_r2.selected().currency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(30, 22, ctx_r2.selected().fee, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(36, 25, ctx_r2.selected().profit, "1.2-2"), "");
    \u0275\u0275advance(5);
    \u0275\u0275classMap("badge-" + ctx_r2.selected().status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selected().status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selected().branch);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selected().employee);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selected().pickupTime);
    \u0275\u0275advance();
    \u0275\u0275conditional(57, ctx_r2.selected().note ? 57 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().close);
    \u0275\u0275advance();
    \u0275\u0275conditional(61, ctx_r2.nextStatus(ctx_r2.selected().status) ? 61 : -1);
  }
}
function TransfersComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNew.set(false));
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_51_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_51_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNew.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "div", 41)(9, "div", 42)(10, "label", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_51_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTr.senderName, $event) || (ctx_r2.newTr.senderName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "label", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_51_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTr.senderPhone, $event) || (ctx_r2.newTr.senderPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "label", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_51_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTr.receiverName, $event) || (ctx_r2.newTr.receiverName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 42)(22, "label", 43);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_51_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTr.receiverCountry, $event) || (ctx_r2.newTr.receiverCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 42)(26, "label", 43);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_51_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTr.amount, $event) || (ctx_r2.newTr.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 42)(30, "label", 43);
    \u0275\u0275text(31, "W\xE4hrung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_51_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newTr.currency, $event) || (ctx_r2.newTr.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "MAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "TRY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option");
    \u0275\u0275text(40, "EUR");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "div", 37)(42, "button", 38);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_51_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNew.set(false));
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 3);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_51_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createTransfer());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t().newTransfer);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.t().senderName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTr.senderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().senderPhone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTr.senderPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().receiverName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTr.receiverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTr.receiverCountry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().amount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTr.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTr.currency);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().createTransfer);
  }
}
var STATUS_FLOW = {
  DRAFT: "CREATED",
  CREATED: "IN_PROGRESS",
  IN_PROGRESS: "COMPLETED",
  COMPLETED: "PAID_OUT",
  PAID_OUT: null,
  CANCELLED: null
};
var TransfersComponent = class _TransfersComponent {
  constructor(svc, auth, toast, i18n) {
    this.svc = svc;
    this.auth = auth;
    this.toast = toast;
    this.i18n = i18n;
    this.transfers = signal([]);
    this.selected = signal(null);
    this.showNew = signal(false);
    this.total = signal(0);
    this.page = signal(1);
    this.limit = 20;
    this.search = "";
    this.filterStatus = "";
    this.filterBranch = "";
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.limit)));
    this.statuses = ["CREATED", "IN_PROGRESS", "COMPLETED", "PAID_OUT", "CANCELLED"];
    this.branches = [];
    this.newTr = { senderName: "", senderPhone: "", receiverName: "", receiverCountry: "", amount: 0, currency: "MAD" };
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    const p = { page: this.page(), limit: this.limit };
    if (this.search)
      p["search"] = this.search;
    if (this.filterStatus)
      p["status"] = this.filterStatus;
    if (this.filterBranch)
      p["branch"] = this.filterBranch;
    this.svc.getAll(p).subscribe((r) => {
      this.transfers.set(r.data);
      this.total.set(r.total);
      const bs = [...new Set(r.data.map((t) => t.branch))];
      if (this.branches.length === 0)
        this.branches = bs;
    });
  }
  setPage(p) {
    this.page.set(p);
    this.load();
  }
  select(t) {
    this.selected.set(t);
  }
  openNew() {
    this.showNew.set(true);
  }
  nextStatus(s) {
    return STATUS_FLOW[s];
  }
  advance(tr) {
    const next = this.nextStatus(tr.status);
    if (!next)
      return;
    this.svc.updateStatus(tr.id, next).subscribe({
      next: (updated) => {
        this.transfers.update((list) => list.map((t) => t.id === updated.id ? updated : t));
        this.toast.success(`Status -> ${next}`);
      },
      error: () => this.toast.error(this.t().statusUpdateError)
    });
  }
  createTransfer() {
    if (!this.newTr.senderName?.trim()) {
      this.toast.error(this.t().senderName + " " + this.t().requiredField);
      return;
    }
    if (!this.newTr.receiverName?.trim()) {
      this.toast.error(this.t().receiverName + " " + this.t().requiredField);
      return;
    }
    if (!this.newTr.amount || this.newTr.amount <= 0) {
      this.toast.error(this.t().amount + " " + this.t().mustBePositive);
      return;
    }
    this.svc.create(this.newTr).subscribe({
      next: () => {
        this.toast.success(this.t().transferCreated);
        this.showNew.set(false);
        this.load();
      },
      error: (e) => this.toast.error(e.error?.message || this.t().creationError)
    });
  }
  // FIX 5: Stornierung
  cancel(tr) {
    if (!confirm("Transfer " + tr.ref + " " + this.t().confirmCancel))
      return;
    this.svc.cancel(tr.id).subscribe({
      next: (updated) => {
        this.transfers.update((list) => list.map((t) => t.id === updated.id ? updated : t));
        this.toast.success(tr.ref + " " + this.t().cancelled);
      },
      error: (e) => this.toast.error(e.error?.message || this.t().cancelError)
    });
  }
  static {
    this.\u0275fac = function TransfersComponent_Factory(t) {
      return new (t || _TransfersComponent)(\u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfersComponent, selectors: [["app-transfers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 26, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "filters-bar"], ["type", "search", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "text-muted", 2, "font-size", ".85rem"], [1, "modal-backdrop"], [3, "value"], [1, "ref"], [1, "fw-600"], [1, "text-muted"], [1, "badge"], [1, "actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["colspan", "8"], [1, "empty-state"], [1, "empty-icon"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "detail-grid"], [1, "detail-row"], [1, "detail-label"], [1, "text-ok"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-success"], [1, "btn", "btn-success", 3, "click"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Morocco", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function TransfersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_6_listener() {
          return ctx.openNew();
        });
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function TransfersComponent_Template_input_input_9_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function TransfersComponent_Template_select_change_10_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(11, "option", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, TransfersComponent_option_13_Template, 2, 2, "option", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Template_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterBranch, $event) || (ctx.filterBranch = $event);
          return $event;
        });
        \u0275\u0275listener("change", function TransfersComponent_Template_select_change_14_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(15, "option", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, TransfersComponent_option_17_Template, 2, 2, "option", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "table")(21, "thead")(22, "tr")(23, "th");
        \u0275\u0275text(24, "Ref");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275repeaterCreate(40, TransfersComponent_For_41_Template, 24, 18, "tr", null, _forTrack0, false, TransfersComponent_ForEmpty_42_Template, 7, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 11)(44, "button", 12);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_44_listener() {
          return ctx.setPage(ctx.page() - 1);
        });
        \u0275\u0275text(45, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 13);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 12);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_48_listener() {
          return ctx.setPage(ctx.page() + 1);
        });
        \u0275\u0275text(49, "\u203A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(50, TransfersComponent_Conditional_50_Template, 62, 28, "div", 14)(51, TransfersComponent_Conditional_51_Template, 46, 14, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().transfers);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.total(), " ", ctx.t().totalTransfers, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\uFF0B ", ctx.t().newTransfer, "");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", ctx.t().search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().allStatuses);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filterBranch);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().allBranches);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.branches);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.t().sender);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().receiver);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().amount);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().fee);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().status);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().branch);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().actions);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.transfers());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.page() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Seite ", ctx.page(), " von ", ctx.totalPages(), "");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.page() >= ctx.totalPages());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(50, ctx.selected() ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(51, ctx.showNew() ? 51 : -1);
      }
    }, dependencies: [CommonModule, NgForOf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: var(--muted);\n  margin-top: .1rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .75rem;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--ink2);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: .65rem .9rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border);\n  background: var(--bg);\n  font-size: .9rem;\n  color: var(--ink);\n  font-family: inherit;\n  transition: border-color var(--transition), box-shadow var(--transition);\n  width: 100%;\n}\n.filters-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(29, 106, 255, .1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: .875rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ink);\n  color: #fff;\n  padding: .75rem 1rem;\n  text-align: left;\n  font-size: .75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  white-space: nowrap;\n}\n[dir=rtl][_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  transition: background var(--transition);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: .75rem 1rem;\n  color: var(--ink2);\n  vertical-align: middle;\n}\n.ref-code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: .78rem;\n  color: var(--accent);\n  background: #eef4ff;\n  padding: .15rem .45rem;\n  border-radius: 4px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .3rem;\n  padding: .25rem .65rem;\n  border-radius: 100px;\n  font-size: .72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  white-space: nowrap;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #F4F5FA;\n  color: var(--muted);\n}\n.badge-created[_ngcontent-%COMP%] {\n  background: #EEF4FF;\n  color: var(--accent);\n}\n.badge-in_progress[_ngcontent-%COMP%] {\n  background: #FFF5E6;\n  color: var(--warn);\n}\n.badge-completed[_ngcontent-%COMP%] {\n  background: #E6FBF5;\n  color: var(--accent2);\n}\n.badge-paid_out[_ngcontent-%COMP%] {\n  background: #F0E6FF;\n  color: var(--purple);\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #FFE6EA;\n  color: var(--red);\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #E6FBF5;\n  color: var(--accent2);\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: #FFE6EA;\n  color: var(--red);\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: #EEF4FF;\n  color: var(--accent);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: #FFF5E6;\n  color: var(--warn);\n}\n.badge-neutral[_ngcontent-%COMP%] {\n  background: #F4F5FA;\n  color: var(--muted);\n}\n.currency-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: .2rem .55rem;\n  border-radius: 6px;\n  background: #EEF4FF;\n  color: var(--accent);\n  font-size: .75rem;\n  font-weight: 700;\n  letter-spacing: .04em;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 15, 30, .5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  animation: fadeIn .15s ease;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg2);\n  border-radius: var(--radius);\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: slideUp .2s ease;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal-xl[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1.5px solid var(--border);\n  position: sticky;\n  top: 0;\n  background: var(--bg2);\n  z-index: 1;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1.5px solid var(--border);\n  display: flex;\n  gap: .75rem;\n  justify-content: flex-end;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .75rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: .5rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .45rem;\n  padding: .55rem 1.2rem;\n  border-radius: var(--radius-sm);\n  font-size: .875rem;\n  font-weight: 600;\n  border: none;\n  transition: all var(--transition);\n  white-space: nowrap;\n  line-height: 1;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #155de0;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(29, 106, 255, .3);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--accent2);\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #00aa79;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--red);\n  color: #fff;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #e0002f;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1.5px solid var(--border);\n  color: var(--ink2);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: #f0f5ff;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: .35rem .85rem;\n  font-size: .8rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: var(--muted);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ink2);\n  margin-bottom: .5rem;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .form-grid[_ngcontent-%COMP%], .form-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+6), tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+6) {\n    display: none;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-backdrop[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n}\n/*# sourceMappingURL=transfers.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfersComponent, { className: "TransfersComponent", filePath: "src\\app\\features\\transfers\\transfers.component.ts", lineNumber: 176 });
})();
export {
  TransfersComponent
};
//# sourceMappingURL=chunk-GRI53GKE.js.map
