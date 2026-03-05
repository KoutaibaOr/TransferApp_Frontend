import {
  AuthService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-XRHKFZIX.js";
import {
  CommonModule,
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KWYNHGYO.js";

// src/app/shared/components/layout/layout.component.ts
function LayoutComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "ADMINISTRATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 31);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_51_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(3, " \u2699\uFE0F ");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 32);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_51_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(7, " \u{1F4CB} ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.t().settings);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().audit);
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth, i18n) {
    this.auth = auth;
    this.i18n = i18n;
    this.sidebarOpen = signal(false);
    this.t = this.i18n.t;
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 23, consts: [[1, "sidebar-overlay", 3, "click"], [1, "shell"], [1, "sidebar"], [1, "sidebar-logo"], [1, "logo-text"], [1, "logo-accent"], [1, "logo-badge"], [1, "user-card"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-branch"], [1, "sidebar-nav"], [1, "nav-section"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/transfers", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/customers", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/cash", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/exchange", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "nav-badge"], ["routerLink", "/reports", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "lang-toggle"], [3, "click"], [1, "logout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "hamburger", 3, "click"], [1, "topbar-title"], [1, "topbar-right"], [1, "topbar-user"], [1, "content"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/audit", "routerLinkActive", "active", 1, "nav-item", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function LayoutComponent_Template_div_click_0_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "Geld");
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Transfer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "nav", 12)(19, "div", 13);
        \u0275\u0275text(20, "OVERVIEW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 14);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_21_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(22, " \u{1F3E0} ");
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 13);
        \u0275\u0275text(26, "TRANSFERS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 15);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_27_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(28, " \u{1F4B3} ");
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "a", 16);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_31_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(32, " \u{1F465} ");
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 13);
        \u0275\u0275text(36, "FINANZEN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 17);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_37_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(38, " \u{1F3E6} ");
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "a", 18);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_41_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(42, " \u{1F4B1} ");
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 19);
        \u0275\u0275text(46, "NEU");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "a", 20);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_47_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(48, " \u{1F4CA} ");
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(51, LayoutComponent_Conditional_51_Template, 10, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 21)(53, "button", 22);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_53_listener() {
          return ctx.i18n.setLang("en");
        });
        \u0275\u0275text(54, "EN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 22);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_55_listener() {
          return ctx.i18n.setLang("ar");
        });
        \u0275\u0275text(56, "AR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "button", 23);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_57_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 24)(60, "header", 25)(61, "button", 26);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_61_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(62, "span")(63, "span")(64, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 27);
        \u0275\u0275text(66, "GeldTransfer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 28)(68, "span", 29);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "main", 30);
        \u0275\u0275element(71, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_17_0;
        \u0275\u0275classProp("open", ctx.sidebarOpen());
        \u0275\u0275advance();
        \u0275\u0275classProp("rtl", ctx.i18n.isRtl());
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.sidebarOpen());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.auth.isAdmin() ? "Admin" : "User");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.auth.user()) == null ? null : tmp_4_0.initials);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_5_0 = ctx.auth.user()) == null ? null : tmp_5_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_6_0 = (tmp_6_0 = ctx.auth.user()) == null ? null : tmp_6_0.branch) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ctx.t().allBranches);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.t().dashboard);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().transfers);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.t().customers);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().cash);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.t().exchange);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.t().reports);
        \u0275\u0275advance();
        \u0275\u0275conditional(51, ctx.auth.isAdmin() ? 51 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "en");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "ar");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" \u{1F6AA} ", ctx.t().logout, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate((tmp_17_0 = ctx.auth.user()) == null ? null : tmp_17_0.name);
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], styles: ['\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 15, 30, .5);\n  z-index: 199;\n}\n.sidebar-overlay.open[_ngcontent-%COMP%] {\n  display: block;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.shell.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  background: var(--ink);\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 200;\n  transition: transform var(--transition);\n  overflow-y: auto;\n}\n.rtl[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.25rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: .6rem;\n  border-bottom: 1px solid rgba(255, 255, 255, .08);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #fff;\n}\n.logo-accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.logo-badge[_ngcontent-%COMP%] {\n  font-size: .65rem;\n  font-weight: 700;\n  background: rgba(29, 106, 255, .25);\n  color: #7EB4FF;\n  padding: .15rem .45rem;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, .08);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  color: #fff;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  font-weight: 600;\n}\n.user-branch[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  color: rgba(255, 255, 255, .45);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .75rem 0;\n  overflow-y: auto;\n}\n.nav-section[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  font-weight: 700;\n  letter-spacing: .1em;\n  color: rgba(255, 255, 255, .3);\n  padding: 1rem 1.25rem .4rem;\n  text-transform: uppercase;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .7rem;\n  padding: .65rem 1.25rem;\n  color: rgba(255, 255, 255, .6);\n  font-size: .875rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all var(--transition);\n  border-left: 3px solid transparent;\n  cursor: pointer;\n}\n.rtl[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .06);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(29, 106, 255, .15);\n  color: var(--accent);\n  border-left-color: var(--accent);\n}\n.rtl[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  border-left-color: transparent;\n  border-right-color: var(--accent);\n}\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: .6rem;\n  font-weight: 700;\n  background: var(--accent2);\n  color: #fff;\n  padding: .1rem .4rem;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.lang-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  padding: 1rem 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, .08);\n}\n.lang-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .35rem;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, .08);\n  border: 1.5px solid transparent;\n  color: rgba(255, 255, 255, .5);\n  font-size: .8rem;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.lang-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: rgba(29, 106, 255, .2);\n  border-color: var(--accent);\n  color: #7EB4FF;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem;\n  padding: .65rem 1rem;\n  background: rgba(255, 59, 92, .1);\n  border: 1.5px solid rgba(255, 59, 92, .25);\n  color: #FF7A92;\n  border-radius: var(--radius-sm);\n  font-size: .875rem;\n  font-weight: 600;\n  text-align: left;\n  transition: all var(--transition);\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 59, 92, .2);\n}\n.main[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.rtl[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: var(--bg2);\n  border-bottom: 1.5px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1.5rem;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  padding: .4rem;\n  cursor: pointer;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--ink);\n  border-radius: 2px;\n}\n.topbar-title[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.topbar-user[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: var(--muted);\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n}\n.dash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.branch-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.branch-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem .75rem;\n  border-radius: var(--radius-sm);\n  background: var(--bg);\n  transition: background var(--transition);\n}\n.branch-row[_ngcontent-%COMP%]:hover {\n  background: #eef4ff;\n}\n.branch-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.branch-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: .1rem;\n}\n.branch-name[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  font-weight: 600;\n}\n.branch-city[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  color: var(--muted);\n}\n.branch-balance[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: .95rem;\n  font-weight: 700;\n  color: var(--accent2);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .4rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .rtl[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .dash-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\shared\\components\\layout\\layout.component.ts", lineNumber: 112 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-B7UM2RQW.js.map
