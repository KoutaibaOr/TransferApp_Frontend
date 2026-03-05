import {
  AuthService,
  RouterLink
} from "./chunk-GJ6YEAFB.js";
import {
  BranchService,
  TransferService
} from "./chunk-DWG6BYJQ.js";
import {
  CommonModule,
  DecimalPipe,
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IURLCCSA.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(8, 7, t_r1.amount, "1.0-0"), " ", t_r1.currency, "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + t_r1.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.status);
  }
}
function DashboardComponent_ForEmpty_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "Keine Transfers");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", b_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r2.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(9, 5, b_r2.cashBalance, "1.0-0"), "");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(transferSvc, branchSvc, auth, i18n) {
    this.transferSvc = transferSvc;
    this.branchSvc = branchSvc;
    this.auth = auth;
    this.i18n = i18n;
    this.stats = signal(null);
    this.recentTransfers = signal([]);
    this.branches = signal([]);
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.transferSvc.getStats().subscribe((s) => this.stats.set(s));
    this.transferSvc.getAll({ limit: 8 }).subscribe((r) => this.recentTransfers.set(r.data));
    this.branchSvc.getAll().subscribe((b) => this.branches.set(b));
  }
  formatNum(n) {
    if (n == null)
      return "\u2014";
    return new Intl.NumberFormat("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(TransferService), \u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 9, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "blue"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-sub"], [1, "kpi-icon", "green"], [1, "kpi-icon", "orange"], [1, "kpi-icon", "purple"], [1, "dash-grid"], [1, "card"], [1, "card-header"], [1, "card-title"], ["routerLink", "/transfers", 1, "btn", "btn-ghost", "btn-sm"], [1, "table-wrap"], ["routerLink", "/cash", 1, "btn", "btn-ghost", "btn-sm"], [1, "branch-list"], [1, "branch-row"], [1, "ref"], [1, "fw-600"], [1, "badge"], ["colspan", "4", 1, "text-muted", 2, "text-align", "center", "padding", "2rem"], [1, "branch-dot"], [1, "branch-info"], [1, "branch-name"], [1, "branch-city", "text-muted"], [1, "branch-balance"]], template: function DashboardComponent_Template(rf, ctx) {
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
        \u0275\u0275text(12, "Gesamt Transfers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 4)(18, "div", 9);
        \u0275\u0275text(19, "\u{1F4B6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div")(21, "div", 6);
        \u0275\u0275text(22, "Einnahmen heute");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 4)(28, "div", 10);
        \u0275\u0275text(29, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div")(31, "div", 6);
        \u0275\u0275text(32, "Ausstehend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 7);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 8);
        \u0275\u0275text(36, "Warten auf Bearbeitung");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 4)(38, "div", 11);
        \u0275\u0275text(39, "\u{1F3E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div")(41, "div", 6);
        \u0275\u0275text(42, "Filialen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 7);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 8);
        \u0275\u0275text(46, "Aktive Standorte");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div", 12)(48, "div", 13)(49, "div", 14)(50, "span", 15);
        \u0275\u0275text(51, "Letzte Transfers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "a", 16);
        \u0275\u0275text(53, "Alle anzeigen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 17)(55, "table")(56, "thead")(57, "tr")(58, "th");
        \u0275\u0275text(59, "Ref");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Absender");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th");
        \u0275\u0275text(63, "Betrag");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "tbody");
        \u0275\u0275repeaterCreate(67, DashboardComponent_For_68_Template, 12, 10, "tr", null, _forTrack0, false, DashboardComponent_ForEmpty_69_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "div", 13)(71, "div", 14)(72, "span", 15);
        \u0275\u0275text(73, "Filialen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "a", 18);
        \u0275\u0275text(75, "Details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 19);
        \u0275\u0275repeaterCreate(77, DashboardComponent_For_78_Template, 10, 8, "div", 20, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.t().dashboard);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Willkommen zur\xFCck, ", (tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.name, "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.totalCount) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", (tmp_3_0 = (tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.todayCount) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0, " heute");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.formatNum((tmp_4_0 = ctx.stats()) == null ? null : tmp_4_0.todayRevenue), "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u20AC ", ctx.formatNum((tmp_5_0 = ctx.stats()) == null ? null : tmp_5_0.totalRevenue), " gesamt");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate((tmp_6_0 = (tmp_6_0 = ctx.stats()) == null ? null : tmp_6_0.pendingCount) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "\u2014");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.branches().length);
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.recentTransfers());
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.branches());
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 102 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-WN6BSCF5.js.map
