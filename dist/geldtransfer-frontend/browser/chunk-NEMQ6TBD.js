import {
  AuthService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-E6WC37XB.js";
import {
  CommonModule,
  I18nService,
  computed,
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
} from "./chunk-ULJ2OLKO.js";

// src/app/shared/components/layout/layout.component.ts
function LayoutComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_41_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(1, " \u{1F4B1} ");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "a", 29);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_41_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(5, " \u{1F4CA} ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.t().exchange);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t().reports);
  }
}
function LayoutComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "ADMINISTRATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 30);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_42_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275text(3, " \u2699\uFE0F ");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 31);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_42_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r3);
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
    this.roleBadge = computed(() => {
      const role = this.auth.user()?.role;
      if (role === "admin")
        return "Admin";
      if (role === "branch_manager")
        return "Manager";
      return "Employee";
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 22, consts: [[1, "sidebar-overlay", 3, "click"], [1, "shell"], [1, "sidebar"], [1, "sidebar-logo"], [1, "logo-text"], [1, "logo-accent"], [1, "logo-badge"], [1, "user-card"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-branch"], [1, "sidebar-nav"], [1, "nav-section"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/transfers", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/customers", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/cash", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "lang-toggle"], [3, "click"], [1, "logout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "hamburger", 3, "click"], [1, "topbar-title"], [1, "topbar-right"], [1, "topbar-user"], [1, "content"], ["routerLink", "/exchange", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/reports", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["routerLink", "/audit", "routerLinkActive", "active", 1, "nav-item", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) {
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
        \u0275\u0275template(41, LayoutComponent_Conditional_41_Template, 8, 2)(42, LayoutComponent_Conditional_42_Template, 10, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 18)(44, "button", 19);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_44_listener() {
          return ctx.i18n.setLang("en");
        });
        \u0275\u0275text(45, "EN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 19);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_46_listener() {
          return ctx.i18n.setLang("ar");
        });
        \u0275\u0275text(47, "AR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "button", 20);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_48_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 21)(51, "header", 22)(52, "button", 23);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_52_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(53, "span")(54, "span")(55, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 24);
        \u0275\u0275text(57, "GeldTransfer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 25)(59, "span", 26);
        \u0275\u0275text(60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "main", 27);
        \u0275\u0275element(62, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_16_0;
        \u0275\u0275classProp("open", ctx.sidebarOpen());
        \u0275\u0275advance();
        \u0275\u0275classProp("rtl", ctx.i18n.isRtl());
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.sidebarOpen());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.roleBadge());
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
        \u0275\u0275advance();
        \u0275\u0275conditional(41, ctx.auth.isAdminOrManager() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.auth.isAdmin() ? 42 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "en");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "ar");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" \u{1F6AA} ", ctx.t().logout, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate((tmp_16_0 = ctx.auth.user()) == null ? null : tmp_16_0.name);
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], styles: ['\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 15, 30, .55);\n  z-index: 199;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.sidebar-overlay.open[_ngcontent-%COMP%] {\n  display: block;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.shell.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  background: #0C1123;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 200;\n  transition: transform var(--transition-slow);\n  overflow-y: auto;\n  border-right: 1px solid rgba(255, 255, 255, .06);\n}\n.rtl[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n  border-right: none;\n  border-left: 1px solid rgba(255, 255, 255, .06);\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.35rem 1.1rem;\n  display: flex;\n  align-items: center;\n  gap: .65rem;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -.02em;\n}\n.logo-accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.logo-badge[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  font-weight: 700;\n  background: rgba(29, 106, 255, .22);\n  color: #7EB4FF;\n  padding: .15rem .45rem;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  border: 1px solid rgba(29, 106, 255, .25);\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .8rem;\n  padding: 1rem 1.35rem;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #5B9BFF);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .82rem;\n  font-weight: 700;\n  flex-shrink: 0;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(29, 106, 255, .35);\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  font-weight: 600;\n  letter-spacing: -.01em;\n}\n.user-branch[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  color: rgba(255, 255, 255, .38);\n  margin-top: .05rem;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .65rem 0;\n  overflow-y: auto;\n}\n.nav-section[_ngcontent-%COMP%] {\n  font-size: .6rem;\n  font-weight: 700;\n  letter-spacing: .12em;\n  color: rgba(255, 255, 255, .25);\n  padding: 1.1rem 1.35rem .4rem;\n  text-transform: uppercase;\n  font-family: "Inter", sans-serif;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .7rem;\n  padding: .62rem 1.35rem;\n  color: rgba(255, 255, 255, .55);\n  font-size: .875rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all var(--transition);\n  border-left: 3px solid transparent;\n  cursor: pointer;\n  letter-spacing: -.005em;\n}\n.rtl[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .05);\n  color: rgba(255, 255, 255, .9);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(29, 106, 255, .13);\n  color: #7EB4FF;\n  border-left-color: var(--accent);\n  font-weight: 600;\n}\n.rtl[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  border-left-color: transparent;\n  border-right-color: var(--accent);\n}\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: .6rem;\n  font-weight: 700;\n  background: var(--accent2);\n  color: #fff;\n  padding: .1rem .42rem;\n  border-radius: 4px;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.lang-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  padding: 1rem 1.35rem;\n  border-top: 1px solid rgba(255, 255, 255, .07);\n}\n.lang-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .38rem;\n  border-radius: var(--radius-xs);\n  background: rgba(255, 255, 255, .07);\n  border: 1.5px solid transparent;\n  color: rgba(255, 255, 255, .45);\n  font-size: .82rem;\n  font-weight: 700;\n  transition: all var(--transition);\n  font-family: "Inter", sans-serif;\n}\n.lang-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: rgba(29, 106, 255, .18);\n  border-color: rgba(29, 106, 255, .45);\n  color: #7EB4FF;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  margin: 0 .9rem 1rem;\n  padding: .62rem 1rem;\n  background: rgba(255, 59, 92, .08);\n  border: 1px solid rgba(255, 59, 92, .22);\n  color: #FF8FA8;\n  border-radius: var(--radius-sm);\n  font-size: .875rem;\n  font-weight: 600;\n  text-align: left;\n  transition: all var(--transition);\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  letter-spacing: -.005em;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 59, 92, .16);\n  color: #FFB0C0;\n}\n.main[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.rtl[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: var(--bg2);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 1.75rem;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 3px rgba(10, 15, 30, .05);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  padding: .4rem;\n  cursor: pointer;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--ink);\n  border-radius: 2px;\n  transition: all var(--transition);\n}\n.topbar-title[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 1.05rem;\n  font-weight: 700;\n  letter-spacing: -.02em;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n}\n.topbar-user[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  color: var(--muted);\n  background: var(--bg3);\n  padding: .35rem .85rem;\n  border-radius: 99px;\n  border: 1px solid var(--border);\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem 2.25rem;\n}\n.dash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.branch-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.branch-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem .75rem;\n  border-radius: var(--radius-sm);\n  background: var(--bg);\n  transition: background var(--transition);\n}\n.branch-row[_ngcontent-%COMP%]:hover {\n  background: #eef4ff;\n}\n.branch-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.branch-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: .1rem;\n}\n.branch-name[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  font-weight: 600;\n}\n.branch-city[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  color: var(--muted);\n}\n.branch-balance[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: .95rem;\n  font-weight: 700;\n  color: var(--accent2);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .4rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .rtl[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .dash-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\shared\\components\\layout\\layout.component.ts", lineNumber: 113 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-NEMQ6TBD.js.map
