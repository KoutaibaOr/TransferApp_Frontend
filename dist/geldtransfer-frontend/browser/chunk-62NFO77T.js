import {
  CsvService
} from "./chunk-NJWTPYWK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CGS34HBP.js";
import {
  ToastService
} from "./chunk-3NXWHVXJ.js";
import {
  CustomerService
} from "./chunk-VGG2M6MY.js";
import {
  CommonModule,
  I18nService,
  __async,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ULJ2OLKO.js";

// src/app/features/customers/customers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CustomersComponent_Conditional_17_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "code");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["First Name"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Last Name"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Phone"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5["ID Number"]);
  }
}
function CustomersComponent_Conditional_17_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u2026 ", ctx_r3.importPreview().length - 8, " ", ctx_r3.t().moreRows, "");
  }
}
function CustomersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 5);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.importPreview.set([]));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmImport());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "table")(11, "thead")(12, "tr")(13, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, CustomersComponent_Conditional_17_For_25_Template, 12, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, CustomersComponent_Conditional_17_Conditional_26_Template, 2, 2, "p", 18);
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
    \u0275\u0275textInterpolate(ctx_r3.t().firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().idNumber);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.importPreview().slice(0, 8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(26, ctx_r3.importPreview().length > 8 ? 26 : -1);
  }
}
function CustomersComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "code");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "button", 5);
    \u0275\u0275listener("click", function CustomersComponent_For_39_Template_button_click_15_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.select(c_r8));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r8.firstName, " ", c_r8.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r8.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r8.idNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r8.branch);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r8.transferCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u270F\uFE0F ", ctx_r3.t().edit, "");
  }
}
function CustomersComponent_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.t().noCustomers);
  }
}
function CustomersComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_41_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31)(9, "div", 32)(10, "label", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_41_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editDto.firstName, $event) || (ctx_r3.editDto.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 32)(14, "label", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_41_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editDto.lastName, $event) || (ctx_r3.editDto.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "label", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_41_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editDto.phone, $event) || (ctx_r3.editDto.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 32)(22, "label", 33);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_41_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editDto.idNumber, $event) || (ctx_r3.editDto.idNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 35)(26, "button", 36);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_41_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected.set(null));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 7);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_41_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r3.selected().firstName, " ", ctx_r3.selected().lastName, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.t().firstName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editDto.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().lastName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editDto.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().phone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editDto.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().idNumber);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editDto.idNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().save);
  }
}
function CustomersComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNew.set(false));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_42_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_42_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNew.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31)(9, "div", 32)(10, "label", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_42_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newDto.firstName, $event) || (ctx_r3.newDto.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 32)(14, "label", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_42_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newDto.lastName, $event) || (ctx_r3.newDto.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "label", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_42_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newDto.phone, $event) || (ctx_r3.newDto.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 32)(22, "label", 33);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_42_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newDto.idNumber, $event) || (ctx_r3.newDto.idNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 35)(26, "button", 36);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_42_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showNew.set(false));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 7);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_42_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.create());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.t().newCustomer);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.t().firstName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newDto.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().lastName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newDto.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().phone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newDto.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().idNumber);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newDto.idNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.t().create);
  }
}
var EXPORT_HEADERS = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "phone", label: "Phone" },
  { key: "idNumber", label: "ID Number" },
  { key: "branch", label: "Branch" },
  { key: "transferCount", label: "Transfers" }
];
var IMPORT_TEMPLATE = [
  { key: "First Name", label: "First Name" },
  { key: "Last Name", label: "Last Name" },
  { key: "Phone", label: "Phone" },
  { key: "ID Number", label: "ID Number" }
];
var CustomersComponent = class _CustomersComponent {
  constructor(svc, toast, i18n, csv) {
    this.svc = svc;
    this.toast = toast;
    this.i18n = i18n;
    this.csv = csv;
    this.customers = signal([]);
    this.selected = signal(null);
    this.showNew = signal(false);
    this.importPreview = signal([]);
    this.search = "";
    this.editDto = {};
    this.newDto = { firstName: "", lastName: "", phone: "", idNumber: "" };
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    const p = {};
    if (this.search)
      p["search"] = this.search;
    this.svc.getAll(p).subscribe((c) => this.customers.set(c));
  }
  select(c) {
    this.selected.set(c);
    this.editDto = { firstName: c.firstName, lastName: c.lastName, phone: c.phone, idNumber: c.idNumber };
  }
  // ── CSV EXPORT ───────────────────────────────────────────────
  exportCsv() {
    this.csv.export(this.customers(), EXPORT_HEADERS, "customers");
    this.toast.success(`${this.customers().length} ${this.i18n.t().exported}`);
  }
  // ── VORLAGE ──────────────────────────────────────────────────
  downloadTemplate() {
    this.csv.downloadTemplate(IMPORT_TEMPLATE, "customers_import");
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
        const required = ["First Name", "Last Name"];
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
        firstName: r["First Name"] || "",
        lastName: r["Last Name"] || "",
        phone: r["Phone"] || "",
        idNumber: r["ID Number"] || ""
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
  save() {
    this.svc.update(this.selected().id, this.editDto).subscribe({
      next: (u) => {
        this.customers.update((l) => l.map((c) => c.id === u.id ? u : c));
        this.toast.success(this.i18n.t().customerUpdated);
        this.selected.set(null);
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  create() {
    this.svc.create(this.newDto).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().customerCreated);
        this.showNew.set(false);
        this.load();
      },
      error: () => this.toast.error(this.i18n.t().creationError)
    });
  }
  static {
    this.\u0275fac = function CustomersComponent_Factory(t) {
      return new (t || _CustomersComponent)(\u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(CsvService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 16, consts: [["csvInput", ""], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "file", "accept", ".csv", 2, "display", "none", 3, "change"], [1, "btn", "btn-primary", 3, "click"], [1, "card", 2, "margin-bottom", "1.5rem"], [1, "filters-bar"], ["type", "search", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "modal-backdrop"], [1, "card-header"], [1, "card-title"], [2, "display", "flex", "gap", ".5rem"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "text-muted", 2, "padding", ".75rem 1rem", "font-size", ".8rem"], [1, "text-muted"], [1, "fw-600"], [1, "badge", "badge-created"], ["colspan", "6"], [1, "empty-state"], [1, "empty-icon"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"]], template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function CustomersComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportCsv());
        });
        \u0275\u0275text(8, "\u2B07 CSV Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function CustomersComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const csvInput_r2 = \u0275\u0275reference(12);
          return \u0275\u0275resetView(csvInput_r2.click());
        });
        \u0275\u0275text(10, "\u2B06 CSV Import");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6, 0);
        \u0275\u0275listener("change", function CustomersComponent_Template_input_change_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.importCsv($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 5);
        \u0275\u0275listener("click", function CustomersComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.downloadTemplate());
        });
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function CustomersComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showNew.set(true));
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, CustomersComponent_Conditional_17_Template, 27, 10, "div", 8);
        \u0275\u0275elementStart(18, "div", 9)(19, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function CustomersComponent_Template_input_input_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.load());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "table")(23, "thead")(24, "tr")(25, "th");
        \u0275\u0275text(26, "Name");
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
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "tbody");
        \u0275\u0275repeaterCreate(38, CustomersComponent_For_39_Template, 17, 7, "tr", null, _forTrack0, false, CustomersComponent_ForEmpty_40_Template, 7, 1, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(41, CustomersComponent_Conditional_41_Template, 30, 12, "div", 13)(42, CustomersComponent_Conditional_42_Template, 30, 11, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().customers);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.customers().length, " ", ctx.t().customers, "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("\u{1F4CB} ", ctx.t().template, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\uFF0B ", ctx.t().newCustomer, "");
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.importPreview().length ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", ctx.t().search);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.t().phone);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().idNumber);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().branch);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().transferCount);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().actions);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.customers());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(41, ctx.selected() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.showNew() ? 42 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=customers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src\\app\\features\\customers\\customers.component.ts", lineNumber: 181 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=chunk-62NFO77T.js.map
