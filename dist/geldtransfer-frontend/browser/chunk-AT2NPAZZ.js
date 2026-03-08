import {
  CsvService
} from "./chunk-DADFMUAW.js";
import {
  AuthService
} from "./chunk-TISKMDVW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CGP6EU4X.js";
import {
  ToastService
} from "./chunk-ZPKBI57O.js";
import {
  TransferService
} from "./chunk-BLC44EQZ.js";
import {
  CommonModule,
  DecimalPipe,
  I18nService,
  NgForOf,
  __async,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JMQHDAED.js";

// src/app/features/transfers/transfers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransfersComponent_Conditional_19_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Sender Name"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Receiver Name"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Amount"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Currency"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Receiver Country"]);
  }
}
function TransfersComponent_Conditional_19_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u2026 ", ctx_r3.importPreview().length - 8, " ", ctx_r3.t().moreRows, "");
  }
}
function TransfersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "button", 5);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.importPreview.set([]));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmImport());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 16)(10, "table")(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "#");
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
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, TransfersComponent_Conditional_19_For_27_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, TransfersComponent_Conditional_19_Conditional_28_Template, 2, 2, "p", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("\u{1F4E5} ", ctx_r3.t().importPreview, " \u2014 ", ctx_r3.importPreview().length, " ", ctx_r3.t().rows, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r3.t().confirm, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r3.t().sender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().receiver);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().receiverCountry);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.importPreview().slice(0, 8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(28, ctx_r3.importPreview().length > 8 ? 28 : -1);
  }
}
function TransfersComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function TransfersComponent_Conditional_26_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    \u0275\u0275property("value", b_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r9);
  }
}
function TransfersComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_26_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterBranch, $event) || (ctx_r3.filterBranch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TransfersComponent_Conditional_26_Template_select_change_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.load());
    });
    \u0275\u0275elementStart(1, "option", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TransfersComponent_Conditional_26_option_3_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterBranch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().allBranches);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.branches);
  }
}
function TransfersComponent_For_52_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TransfersComponent_For_52_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const tr_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.advance(tr_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tr_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 ", ctx_r3.nextStatus(tr_r11.status), "");
  }
}
function TransfersComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 31);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 32)(23, "button", 5);
    \u0275\u0275listener("click", function TransfersComponent_For_52_Template_button_click_23_listener() {
      const tr_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.select(tr_r11));
    });
    \u0275\u0275text(24, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, TransfersComponent_For_52_Conditional_25_Template, 2, 1, "button", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tr_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tr_r11.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r11.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r11.receiverName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(10, 12, tr_r11.amount, "1.2-2"), " ", tr_r11.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(13, 15, tr_r11.fee, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + tr_r11.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tr_r11.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r11.branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tr_r11.employee);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(25, ctx_r3.nextStatus(tr_r11.status) ? 25 : -1);
  }
}
function TransfersComponent_ForEmpty_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34)(2, "div", 35)(3, "div", 36);
    \u0275\u0275text(4, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.t().noTransfers);
  }
}
function TransfersComponent_Conditional_61_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 46)(1, "input", 53);
    \u0275\u0275listener("change", function TransfersComponent_Conditional_61_For_13_Template_input_change_1_listener() {
      const s_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleExportStatus(s_r15));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.exportOpts.statuses.includes(s_r15));
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + s_r15.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r15);
  }
}
function TransfersComponent_Conditional_61_Conditional_25_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r17 = ctx.$implicit;
    \u0275\u0275property("value", b_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r17);
  }
}
function TransfersComponent_Conditional_61_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "label", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_61_Conditional_25_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.exportOpts.branch, $event) || (ctx_r3.exportOpts.branch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, TransfersComponent_Conditional_61_Conditional_25_For_7_Template, 2, 2, "option", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().branch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.exportOpts.branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().allBranches);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.branches);
  }
}
function TransfersComponent_Conditional_61_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r3.exportOpts.dateFrom, " ");
  }
}
function TransfersComponent_Conditional_61_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \u2192 ", ctx_r3.exportOpts.dateTo, " ");
  }
}
function TransfersComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showExportModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_61_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showExportModal.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "div", 43)(9, "label", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 45);
    \u0275\u0275repeaterCreate(12, TransfersComponent_Conditional_61_For_13_Template, 4, 4, "label", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 47);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_61_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectAllStatuses());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 48)(17, "div", 43)(18, "label", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_61_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.exportOpts.dateFrom, $event) || (ctx_r3.exportOpts.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 43)(22, "label", 44);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_61_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.exportOpts.dateTo, $event) || (ctx_r3.exportOpts.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, TransfersComponent_Conditional_61_Conditional_25_Template, 8, 3, "div", 43);
    \u0275\u0275elementStart(26, "p", 50);
    \u0275\u0275text(27);
    \u0275\u0275template(28, TransfersComponent_Conditional_61_Conditional_28_Template, 1, 1)(29, TransfersComponent_Conditional_61_Conditional_29_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 51)(31, "button", 52);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_61_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showExportModal.set(false));
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 7);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_61_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.runFilteredExport());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2B07 ", ctx_r3.t().exportOptions, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.t().selectStatuses);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.statuses);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().all);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.t().dateFrom);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.exportOpts.dateFrom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().dateTo);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.exportOpts.dateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, ctx_r3.auth.isAdminOrManager() ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r3.t().exportFilters, ": ", ctx_r3.exportOpts.statuses.length, " ", ctx_r3.t().selectStatuses, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(28, ctx_r3.exportOpts.dateFrom ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(29, ctx_r3.exportOpts.dateTo ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2B07 ", ctx_r3.t().exportSelected, "");
  }
}
function TransfersComponent_Conditional_62_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selected().note);
  }
}
function TransfersComponent_Conditional_62_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_62_Conditional_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.advance(ctx_r3.selected());
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Status \u2192 ", ctx_r3.nextStatus(ctx_r3.selected().status), "");
  }
}
function TransfersComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_62_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "div", 55)(9, "div", 56)(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 56)(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 56)(20, "span", 57);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 27);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 56)(26, "span", 57);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 56)(32, "span", 57);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 58);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 56)(38, "span", 57);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 30);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 56)(43, "span", 57);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 56)(48, "span", 57);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, TransfersComponent_Conditional_62_Conditional_52_Template, 5, 2, "div", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 51)(54, "button", 52);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_62_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, TransfersComponent_Conditional_62_Conditional_56_Template, 2, 1, "button", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selected().ref);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.t().sender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selected().senderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().receiver);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selected().receiverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 23, ctx_r3.selected().amount, "1.2-2"), " ", ctx_r3.selected().currency, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.t().fee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(30, 26, ctx_r3.selected().fee, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.t().profit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(36, 29, ctx_r3.selected().profit, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.t().status);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + ctx_r3.selected().status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selected().status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().branch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selected().branch);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().employee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selected().employee);
    \u0275\u0275advance();
    \u0275\u0275conditional(52, ctx_r3.selected().note ? 52 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().close);
    \u0275\u0275advance();
    \u0275\u0275conditional(56, ctx_r3.nextStatus(ctx_r3.selected().status) ? 56 : -1);
  }
}
function TransfersComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNew.set(false));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_63_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_63_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNew.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "div", 48)(9, "div", 43)(10, "label", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_63_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTr.senderName, $event) || (ctx_r3.newTr.senderName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 43)(14, "label", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_63_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTr.senderPhone, $event) || (ctx_r3.newTr.senderPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 43)(18, "label", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_63_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTr.receiverName, $event) || (ctx_r3.newTr.receiverName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 43)(22, "label", 44);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_63_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTr.receiverCountry, $event) || (ctx_r3.newTr.receiverCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 43)(26, "label", 44);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_63_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTr.amount, $event) || (ctx_r3.newTr.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 43)(30, "label", 44);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Conditional_63_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newTr.currency, $event) || (ctx_r3.newTr.currency = $event);
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
    \u0275\u0275elementStart(41, "div", 51)(42, "button", 52);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_63_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNew.set(false));
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 7);
    \u0275\u0275listener("click", function TransfersComponent_Conditional_63_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createTransfer());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.t().newTransfer);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.t().senderName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTr.senderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().senderPhone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTr.senderPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().receiverName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTr.receiverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().receiverCountry);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTr.receiverCountry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().amount);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTr.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().currency);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTr.currency);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r3.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().createTransfer);
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
var EXPORT_HEADERS = [
  { key: "ref", label: "Reference" },
  { key: "senderName", label: "Sender Name" },
  { key: "senderPhone", label: "Sender Phone" },
  { key: "senderIdNumber", label: "Sender ID" },
  { key: "receiverName", label: "Receiver Name" },
  { key: "receiverPhone", label: "Receiver Phone" },
  { key: "receiverCountry", label: "Receiver Country" },
  { key: "amount", label: "Amount" },
  { key: "currency", label: "Currency" },
  { key: "fee", label: "Fee EUR" },
  { key: "profit", label: "Profit EUR" },
  { key: "status", label: "Status" },
  { key: "branch", label: "Branch" },
  { key: "employee", label: "Created By Employee" },
  { key: "createdAt", label: "Created At" },
  { key: "updatedAt", label: "Last Updated" }
];
var IMPORT_TEMPLATE = [
  { key: "Sender Name", label: "Sender Name" },
  { key: "Sender Phone", label: "Sender Phone" },
  { key: "Receiver Name", label: "Receiver Name" },
  { key: "Receiver Phone", label: "Receiver Phone" },
  { key: "Receiver Country", label: "Receiver Country" },
  { key: "Amount", label: "Amount" },
  { key: "Currency", label: "Currency" }
];
var TransfersComponent = class _TransfersComponent {
  constructor(svc, auth, toast, i18n, csv) {
    this.svc = svc;
    this.auth = auth;
    this.toast = toast;
    this.i18n = i18n;
    this.csv = csv;
    this.transfers = signal([]);
    this.selected = signal(null);
    this.showNew = signal(false);
    this.showExportModal = signal(false);
    this.importPreview = signal([]);
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
    this.exportOpts = { statuses: ["CREATED", "IN_PROGRESS", "COMPLETED", "PAID_OUT", "CANCELLED"], dateFrom: "", dateTo: "", branch: "" };
    this.t = this.i18n.t;
  }
  ngOnInit() {
    if (this.auth.isManager() && this.auth.user()?.branch) {
      this.filterBranch = this.auth.user().branch ?? "";
      this.exportOpts.branch = this.filterBranch;
    }
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
      if (!this.branches.length)
        this.branches = [...new Set(r.data.map((t) => t.branch))];
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
  // ── CSV EXPORT ───────────────────────────────────────────────
  exportCsv() {
    const p = { limit: 9999 };
    if (this.auth.isManager() && this.auth.user()?.branch)
      p["branch"] = this.auth.user().branch;
    this.svc.getAll(p).subscribe((r) => {
      this.csv.export(r.data, EXPORT_HEADERS, "transfers_all");
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
    });
  }
  // ── FILTERED EXPORT (Smart Export Modal) ────────────────────
  runFilteredExport() {
    this.svc.exportFiltered({
      statuses: this.exportOpts.statuses,
      dateFrom: this.exportOpts.dateFrom || void 0,
      dateTo: this.exportOpts.dateTo || void 0,
      branch: this.exportOpts.branch || void 0,
      limit: 9999
    }).subscribe((r) => {
      const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const statusTag = this.exportOpts.statuses.length < 5 ? this.exportOpts.statuses.join("_").toLowerCase() : "all";
      this.csv.export(r.data, EXPORT_HEADERS, `transfers_${statusTag}_${date}`);
      this.toast.success(`${r.data.length} ${this.i18n.t().exported}`);
      this.showExportModal.set(false);
    });
  }
  toggleExportStatus(s) {
    const idx = this.exportOpts.statuses.indexOf(s);
    if (idx >= 0)
      this.exportOpts.statuses = this.exportOpts.statuses.filter((x) => x !== s);
    else
      this.exportOpts.statuses = [...this.exportOpts.statuses, s];
  }
  selectAllStatuses() {
    this.exportOpts.statuses = [...this.statuses];
  }
  // ── VORLAGE ──────────────────────────────────────────────────
  downloadTemplate() {
    this.csv.downloadTemplate(IMPORT_TEMPLATE, "transfers_import");
    this.toast.info(this.i18n.t().templateDownloaded);
  }
  // ── CSV IMPORT ───────────────────────────────────────────────
  importCsv(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      event.target.value = "";
      try {
        const rows = yield this.csv.import(file);
        if (!rows.length) {
          this.toast.error(this.i18n.t().csvEmpty);
          return;
        }
        const required = ["Sender Name", "Receiver Name", "Amount", "Currency"];
        const missing = required.filter((f) => !(f in rows[0]));
        if (missing.length) {
          this.toast.error(`${this.i18n.t().missingColumns} ${missing.join(", ")}`);
          return;
        }
        this.importPreview.set(rows);
        this.toast.info(`${rows.length} ${this.i18n.t().rowsLoaded}`);
      } catch (e) {
        this.toast.error(e.message ?? this.i18n.t().importFailed);
      }
    });
  }
  confirmImport() {
    const rows = this.importPreview();
    let ok = 0, fail = 0;
    let idx = 0;
    const next = () => {
      if (idx >= rows.length) {
        this.toast.success(`Import: ${ok} \u2713  ${fail} \u2717`);
        this.importPreview.set([]);
        this.load();
        return;
      }
      const r = rows[idx++];
      this.svc.create({
        senderName: r["Sender Name"] || "",
        senderPhone: r["Sender Phone"] || "",
        receiverName: r["Receiver Name"] || "",
        receiverPhone: r["Receiver Phone"] || "",
        receiverCountry: r["Receiver Country"] || "",
        amount: parseFloat(r["Amount"] || "0"),
        currency: r["Currency"] || "EUR"
      }).subscribe({ next: () => {
        ok++;
        next();
      }, error: () => {
        fail++;
        next();
      } });
    };
    next();
  }
  advance(tr) {
    const next = this.nextStatus(tr.status);
    if (!next)
      return;
    this.svc.updateStatus(tr.id, next).subscribe({
      next: (u) => {
        this.transfers.update((l) => l.map((t) => t.id === u.id ? u : t));
        this.toast.success(`Status \u2192 ${next}`);
      },
      error: () => this.toast.error("Fehler beim Status-Update")
    });
  }
  createTransfer() {
    this.svc.create(this.newTr).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().transferCreated);
        this.showNew.set(false);
        this.load();
      },
      error: () => this.toast.error(this.i18n.t().creationError)
    });
  }
  static {
    this.\u0275fac = function TransfersComponent_Factory(t) {
      return new (t || _TransfersComponent)(\u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(CsvService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfersComponent, selectors: [["app-transfers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 32, consts: [["csvInput", ""], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "file", "accept", ".csv", 2, "display", "none", 3, "change"], [1, "btn", "btn-primary", 3, "click"], [1, "card", "import-preview"], [1, "filters-bar"], ["type", "search", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "ngModel"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "text-muted", 2, "font-size", ".85rem"], [1, "modal-backdrop"], [1, "card-header"], [1, "card-title"], [2, "display", "flex", "gap", ".5rem"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "text-muted", 2, "padding", ".75rem 1rem", "font-size", ".8rem"], [1, "text-muted"], [1, "fw-600"], [3, "value"], [1, "ref"], [1, "badge"], [1, "text-muted", 2, "font-size", ".8rem"], [1, "actions"], [1, "btn", "btn-success", "btn-sm"], ["colspan", "9"], [1, "empty-state"], [1, "empty-icon"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], [2, "display", "flex", "flex-wrap", "wrap", "gap", ".5rem", "margin-top", ".4rem"], [2, "display", "flex", "align-items", "center", "gap", ".35rem", "font-size", ".85rem", "cursor", "pointer"], [1, "btn", "btn-ghost", "btn-sm", 2, "margin-top", ".5rem", "font-size", ".75rem", 3, "click"], [1, "form-grid"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "font-size", ".78rem", "color", "var(--muted)", "margin-top", ".35rem"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "detail-grid"], [1, "detail-row"], [1, "detail-label"], [1, "text-ok"], [1, "btn", "btn-success"], [1, "btn", "btn-success", 3, "click"], ["placeholder", "Morocco", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function TransfersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showExportModal.set(true));
        });
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportCsv());
        });
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          const csvInput_r2 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(csvInput_r2.click());
        });
        \u0275\u0275text(12, "\u2B06 CSV Import");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 6, 0);
        \u0275\u0275listener("change", function TransfersComponent_Template_input_change_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.importCsv($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 5);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.downloadTemplate());
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openNew());
        });
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(19, TransfersComponent_Conditional_19_Template, 29, 11, "div", 8);
        \u0275\u0275elementStart(20, "div", 9)(21, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function TransfersComponent_Template_input_input_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.load());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function TransfersComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function TransfersComponent_Template_select_change_22_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.load());
        });
        \u0275\u0275elementStart(23, "option", 12);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, TransfersComponent_option_25_Template, 2, 2, "option", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, TransfersComponent_Conditional_26_Template, 4, 3, "select", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "table")(30, "thead")(31, "tr")(32, "th");
        \u0275\u0275text(33, "Ref");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275repeaterCreate(51, TransfersComponent_For_52_Template, 26, 18, "tr", null, _forTrack0, false, TransfersComponent_ForEmpty_53_Template, 7, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 17)(55, "button", 18);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setPage(ctx.page() - 1));
        });
        \u0275\u0275text(56, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 19);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "button", 18);
        \u0275\u0275listener("click", function TransfersComponent_Template_button_click_59_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setPage(ctx.page() + 1));
        });
        \u0275\u0275text(60, "\u203A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(61, TransfersComponent_Conditional_61_Template, 35, 15, "div", 20)(62, TransfersComponent_Conditional_62_Template, 57, 32, "div", 20)(63, TransfersComponent_Conditional_63_Template, 46, 15, "div", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().transfers);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.total(), " ", ctx.t().totalTransfers, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u2B07 ", ctx.t().exportWithFilters, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2B07 ", ctx.t().exportAll, "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\u{1F4CB} ", ctx.t().template, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\uFF0B ", ctx.t().newTransfer, "");
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.importPreview().length ? 19 : -1);
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
        \u0275\u0275conditional(26, ctx.auth.isAdminOrManager() ? 26 : -1);
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
        \u0275\u0275textInterpolate(ctx.t().employee);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().actions);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.transfers());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.page() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate4("", ctx.t().page, " ", ctx.page(), " ", ctx.t().of, " ", ctx.totalPages(), "");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.page() >= ctx.totalPages());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(61, ctx.showExportModal() ? 61 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(62, ctx.selected() ? 62 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(63, ctx.showNew() ? 63 : -1);
      }
    }, dependencies: [CommonModule, NgForOf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: var(--muted);\n  margin-top: .1rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .75rem;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--ink2);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: .65rem .9rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border);\n  background: var(--bg);\n  font-size: .9rem;\n  color: var(--ink);\n  font-family: inherit;\n  transition: border-color var(--transition), box-shadow var(--transition);\n  width: 100%;\n}\n.filters-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(29, 106, 255, .1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: .875rem;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ink);\n  color: #fff;\n  padding: .75rem 1rem;\n  text-align: left;\n  font-size: .75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  white-space: nowrap;\n}\n[dir=rtl][_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  transition: background var(--transition);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: .75rem 1rem;\n  color: var(--ink2);\n  vertical-align: middle;\n}\n.ref-code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: .78rem;\n  color: var(--accent);\n  background: #eef4ff;\n  padding: .15rem .45rem;\n  border-radius: 4px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .3rem;\n  padding: .25rem .65rem;\n  border-radius: 100px;\n  font-size: .72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  white-space: nowrap;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #F4F5FA;\n  color: var(--muted);\n}\n.badge-created[_ngcontent-%COMP%] {\n  background: #EEF4FF;\n  color: var(--accent);\n}\n.badge-in_progress[_ngcontent-%COMP%] {\n  background: #FFF5E6;\n  color: var(--warn);\n}\n.badge-completed[_ngcontent-%COMP%] {\n  background: #E6FBF5;\n  color: var(--accent2);\n}\n.badge-paid_out[_ngcontent-%COMP%] {\n  background: #F0E6FF;\n  color: var(--purple);\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #FFE6EA;\n  color: var(--red);\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #E6FBF5;\n  color: var(--accent2);\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: #FFE6EA;\n  color: var(--red);\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: #EEF4FF;\n  color: var(--accent);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: #FFF5E6;\n  color: var(--warn);\n}\n.badge-neutral[_ngcontent-%COMP%] {\n  background: #F4F5FA;\n  color: var(--muted);\n}\n.currency-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: .2rem .55rem;\n  border-radius: 6px;\n  background: #EEF4FF;\n  color: var(--accent);\n  font-size: .75rem;\n  font-weight: 700;\n  letter-spacing: .04em;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 15, 30, .5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  animation: fadeIn .15s ease;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg2);\n  border-radius: var(--radius);\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg);\n  animation: slideUp .2s ease;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.modal-xl[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1.5px solid var(--border);\n  position: sticky;\n  top: 0;\n  background: var(--bg2);\n  z-index: 1;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1.5px solid var(--border);\n  display: flex;\n  gap: .75rem;\n  justify-content: flex-end;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .75rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: .5rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .45rem;\n  padding: .55rem 1.2rem;\n  border-radius: var(--radius-sm);\n  font-size: .875rem;\n  font-weight: 600;\n  border: none;\n  transition: all var(--transition);\n  white-space: nowrap;\n  line-height: 1;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #155de0;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(29, 106, 255, .3);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--accent2);\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #00aa79;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--red);\n  color: #fff;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #e0002f;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1.5px solid var(--border);\n  color: var(--ink2);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: #f0f5ff;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: .35rem .85rem;\n  font-size: .8rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: var(--muted);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ink2);\n  margin-bottom: .5rem;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .form-grid[_ngcontent-%COMP%], .form-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+6), tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+6) {\n    display: none;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-backdrop[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n}\n/*# sourceMappingURL=transfers.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfersComponent, { className: "TransfersComponent", filePath: "src\\app\\features\\transfers\\transfers.component.ts", lineNumber: 271 });
})();
export {
  TransfersComponent
};
//# sourceMappingURL=chunk-AT2NPAZZ.js.map
