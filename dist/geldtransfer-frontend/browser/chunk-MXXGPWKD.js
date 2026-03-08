import {
  FormsModule
} from "./chunk-CGS34HBP.js";
import {
  TransferService
} from "./chunk-VGG2M6MY.js";
import {
  CommonModule,
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ULJ2OLKO.js";

// src/app/features/reports/reports.component.ts
var ReportsComponent = class _ReportsComponent {
  constructor(svc, i18n) {
    this.svc = svc;
    this.i18n = i18n;
    this.stats = signal(null);
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.svc.getStats().subscribe((s) => this.stats.set(s));
  }
  fmt(n) {
    if (n == null)
      return "\u2014";
    return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(n);
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(t) {
      return new (t || _ReportsComponent)(\u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 15, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "blue"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-icon", "green"], [1, "kpi-icon", "orange"], [1, "kpi-icon", "purple"], [1, "card", "mt-3"], [1, "card-header"], [1, "card-title"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5);
        \u0275\u0275text(9, "\u{1F4B3}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div")(11, "div", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 4)(16, "div", 8);
        \u0275\u0275text(17, "\u{1F4B6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div")(19, "div", 6);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 4)(24, "div", 9);
        \u0275\u0275text(25, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div")(27, "div", 6);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 7);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 4)(32, "div", 10);
        \u0275\u0275text(33, "\u{1F4C8}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div")(35, "div", 6);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 7);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 11)(40, "div", 12)(41, "span", 13);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 3)(44, "div", 4)(45, "div", 5);
        \u0275\u0275text(46, "\u{1F4B3}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div")(48, "div", 6);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 7);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 4)(53, "div", 8);
        \u0275\u0275text(54, "\u{1F4B6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div")(56, "div", 6);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 7);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_5_0;
        let tmp_7_0;
        let tmp_9_0;
        let tmp_12_0;
        let tmp_14_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().reports);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().revenueOverview);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().totalTransfers);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.total) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().totalVolumeStat);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_5_0 = ctx.stats()) == null ? null : tmp_5_0.totalAmount), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().totalFees);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_7_0 = ctx.stats()) == null ? null : tmp_7_0.totalFee), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().totalProfit);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_9_0 = ctx.stats()) == null ? null : tmp_9_0.totalProfit), "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.t().today);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().todayTransfers);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_12_0 = (tmp_12_0 = ctx.stats()) == null ? null : tmp_12_0.todayCount) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().todayRevenue);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.fmt((tmp_14_0 = ctx.stats()) == null ? null : tmp_14_0.todayAmount), "");
      }
    }, dependencies: [CommonModule, FormsModule], styles: ["\n\n.report-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src\\app\\features\\reports\\reports.component.ts", lineNumber: 37 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-MXXGPWKD.js.map
