import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-S44ARYWC.js";
import {
  ToastService
} from "./chunk-Q3T46Q4O.js";
import {
  CustomerService
} from "./chunk-DWG6BYJQ.js";
import {
  CommonModule,
  I18nService,
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
} from "./chunk-IURLCCSA.js";

// src/app/features/customers/customers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CustomersComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "code");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "button", 12);
    \u0275\u0275listener("click", function CustomersComponent_For_29_Template_button_click_15_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(c_r2));
    });
    \u0275\u0275text(16, "\u270F\uFE0F Bearbeiten");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r2.firstName, " ", c_r2.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.idNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.branch);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.transferCount);
  }
}
function CustomersComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275text(4, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Keine Kunden");
    \u0275\u0275elementEnd()()()();
  }
}
function CustomersComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "div", 23)(10, "label", 24);
    \u0275\u0275text(11, "Vorname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_31_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editDto.firstName, $event) || (ctx_r2.editDto.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label", 24);
    \u0275\u0275text(15, "Nachname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_31_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editDto.lastName, $event) || (ctx_r2.editDto.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "label", 24);
    \u0275\u0275text(19, "Telefon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_31_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editDto.phone, $event) || (ctx_r2.editDto.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "label", 24);
    \u0275\u0275text(23, "Ausweis-Nr.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_31_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editDto.idNumber, $event) || (ctx_r2.editDto.idNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "button", 27);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_31_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.set(null));
    });
    \u0275\u0275text(27, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 3);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_31_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(29, "Speichern");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.selected().firstName, " ", ctx_r2.selected().lastName, "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDto.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDto.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDto.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDto.idNumber);
  }
}
function CustomersComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNew.set(false));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_32_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4, "Neuer Kunde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNew.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "div", 23)(10, "label", 24);
    \u0275\u0275text(11, "Vorname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_32_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDto.firstName, $event) || (ctx_r2.newDto.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label", 24);
    \u0275\u0275text(15, "Nachname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_32_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDto.lastName, $event) || (ctx_r2.newDto.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "label", 24);
    \u0275\u0275text(19, "Telefon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_32_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDto.phone, $event) || (ctx_r2.newDto.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "label", 24);
    \u0275\u0275text(23, "Ausweis-Nr.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_32_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newDto.idNumber, $event) || (ctx_r2.newDto.idNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "button", 27);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_32_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNew.set(false));
    });
    \u0275\u0275text(27, "Abbrechen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 3);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_32_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.create());
    });
    \u0275\u0275text(29, "Anlegen");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDto.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDto.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDto.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newDto.idNumber);
  }
}
var CustomersComponent = class _CustomersComponent {
  constructor(svc, toast, i18n) {
    this.svc = svc;
    this.toast = toast;
    this.i18n = i18n;
    this.customers = signal([]);
    this.selected = signal(null);
    this.showNew = signal(false);
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
  save() {
    const id = this.selected().id;
    this.svc.update(id, this.editDto).subscribe({
      next: (updated) => {
        this.customers.update((list) => list.map((c) => c.id === updated.id ? updated : c));
        this.toast.success("Kunde aktualisiert");
        this.selected.set(null);
      },
      error: () => this.toast.error("Fehler beim Speichern")
    });
  }
  create() {
    this.svc.create(this.newDto).subscribe({
      next: () => {
        this.toast.success("Kunde angelegt");
        this.showNew.set(false);
        this.load();
      },
      error: () => this.toast.error("Fehler beim Anlegen")
    });
  }
  static {
    this.\u0275fac = function CustomersComponent_Factory(t) {
      return new (t || _CustomersComponent)(\u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "filters-bar"], ["type", "search", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "modal-backdrop"], [1, "fw-600"], [1, "text-muted"], [1, "badge", "badge-created"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["colspan", "6"], [1, "empty-state"], [1, "empty-icon"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"]], template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function CustomersComponent_Template_button_click_6_listener() {
          return ctx.showNew.set(true);
        });
        \u0275\u0275text(7, "\uFF0B Neuer Kunde");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function CustomersComponent_Template_input_input_9_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "table")(13, "thead")(14, "tr")(15, "th");
        \u0275\u0275text(16, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Telefon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Ausweis-Nr.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Filiale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Transfers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Aktionen");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "tbody");
        \u0275\u0275repeaterCreate(28, CustomersComponent_For_29_Template, 17, 6, "tr", null, _forTrack0, false, CustomersComponent_ForEmpty_30_Template, 7, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(31, CustomersComponent_Conditional_31_Template, 30, 6, "div", 8)(32, CustomersComponent_Conditional_32_Template, 30, 4, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().customers);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.customers().length, " Kunden");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", ctx.t().search);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.customers());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(31, ctx.selected() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.showNew() ? 32 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=customers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src\\app\\features\\customers\\customers.component.ts", lineNumber: 127 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=chunk-P5BHBBOV.js.map
