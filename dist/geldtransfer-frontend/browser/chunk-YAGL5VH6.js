import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CGS34HBP.js";
import {
  AuditService
} from "./chunk-VGG2M6MY.js";
import {
  CommonModule,
  DatePipe,
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ULJ2OLKO.js";

// src/app/features/audit/audit.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AuditComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "code", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.user);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.entity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.entityId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.ipAddress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 6, a_r2.createdAt, "dd.MM.yy HH:mm"));
  }
}
function AuditComponent_ForEmpty_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.t().noEntries);
  }
}
var AuditComponent = class _AuditComponent {
  constructor(svc, i18n) {
    this.svc = svc;
    this.i18n = i18n;
    this.logs = signal([]);
    this.total = signal(0);
    this.search = "";
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    const p = {};
    if (this.search)
      p["search"] = this.search;
    this.svc.getAll(p).subscribe((r) => {
      this.logs.set(r.data);
      this.total.set(r.total);
    });
  }
  static {
    this.\u0275fac = function AuditComponent_Factory(t) {
      return new (t || _AuditComponent)(\u0275\u0275directiveInject(AuditService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditComponent, selectors: [["app-audit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 10, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters-bar"], ["type", "search", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "fw-600"], [1, "badge", "badge-created"], [1, "text-muted"], [2, "font-size", ".75rem", "color", "var(--accent)"], ["colspan", "6"], [1, "empty-state"], [1, "empty-icon"]], template: function AuditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 3)(7, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function AuditComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AuditComponent_Template_input_input_7_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "table")(11, "thead")(12, "tr")(13, "th");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "IP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "tbody");
        \u0275\u0275repeaterCreate(26, AuditComponent_For_27_Template, 16, 9, "tr", null, _forTrack0, false, AuditComponent_ForEmpty_28_Template, 7, 1, "tr");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().audit);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.total(), " ", ctx.t().totalEntries, "");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", ctx.t().search);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().user);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().action);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().entity);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().date);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.logs());
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditComponent, { className: "AuditComponent", filePath: "src\\app\\features\\audit\\audit.component.ts", lineNumber: 47 });
})();
export {
  AuditComponent
};
//# sourceMappingURL=chunk-YAGL5VH6.js.map
