import {
  AuthService,
  Router
} from "./chunk-GJ6YEAFB.js";
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
  I18nService,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IURLCCSA.js";

// src/app/features/auth/login.component.ts
function LoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, toast, router, i18n) {
    this.auth = auth;
    this.toast = toast;
    this.router = router;
    this.i18n = i18n;
    this.email = "";
    this.password = "";
    this.loading = signal(false);
    this.error = signal("");
    if (this.auth.isLoggedIn())
      this.router.navigate(["/dashboard"]);
  }
  doLogin() {
    if (!this.email || !this.password) {
      this.error.set("Bitte E-Mail und Passwort eingeben");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        this.toast.success("Willkommen!");
        this.router.navigate(["/dashboard"]);
      },
      error: () => {
        this.error.set("Falsche E-Mail oder Passwort");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(I18nService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 11, consts: [[1, "login-page"], [1, "login-card"], [1, "login-logo"], [1, "accent"], [1, "login-sub"], [1, "login-form"], [1, "form-group"], [1, "form-label"], ["type", "email", "placeholder", "admin@firma.de", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "login-error"], [1, "btn", "btn-primary", "w-full", 3, "click", "disabled"], [1, "demo-hint"], [1, "lang-row"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        \u0275\u0275text(4, "Geld");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6, "Transfer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Management System");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_13_listener() {
          return ctx.doLogin();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_17_listener() {
          return ctx.doLogin();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, LoginComponent_Conditional_18_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_19_listener() {
          return ctx.doLogin();
        });
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "p")(23, "code");
        \u0275\u0275text(24, "admin@firma.de");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " / ");
        \u0275\u0275elementStart(26, "code");
        \u0275\u0275text(27, "admin123");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "p")(29, "code");
        \u0275\u0275text(30, "nutzer@firma.de");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " / ");
        \u0275\u0275elementStart(32, "code");
        \u0275\u0275text(33, "nutzer123");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 13)(35, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_35_listener() {
          return ctx.i18n.setLang("de");
        });
        \u0275\u0275text(36, "DE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_37_listener() {
          return ctx.i18n.setLang("ar");
        });
        \u0275\u0275text(38, "AR");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.i18n.t().email);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.i18n.t().password);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.error() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Anmelden..." : ctx.i18n.t().signIn, " ");
        \u0275\u0275advance(15);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "de");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "ar");
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  padding: 1.5rem;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--bg2);\n  border-radius: var(--radius);\n  border: 1.5px solid var(--border);\n  box-shadow: var(--shadow-lg);\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 420px;\n}\n.login-logo[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: .25rem;\n}\n.login-logo[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.login-sub[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: var(--muted);\n  margin-bottom: 2rem;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.login-error[_ngcontent-%COMP%] {\n  background: #FFE6EA;\n  color: var(--red);\n  border-radius: var(--radius-sm);\n  padding: .65rem 1rem;\n  font-size: .85rem;\n  font-weight: 600;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.demo-hint[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  border: 1px dashed var(--border);\n  font-size: .8rem;\n  color: var(--muted);\n  display: flex;\n  flex-direction: column;\n  gap: .3rem;\n}\n.demo-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--ink2);\n  font-weight: 600;\n  background: var(--bg2);\n  padding: 1px 5px;\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n.lang-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  margin-top: 1.25rem;\n  justify-content: center;\n}\n.lang-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: .3rem .9rem;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: none;\n  font-size: .8rem;\n  font-weight: 700;\n  color: var(--muted);\n  cursor: pointer;\n  transition: all var(--transition);\n}\n.lang-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #fff;\n  border-color: var(--accent);\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login.component.ts", lineNumber: 59 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-H2VLRP7I.js.map
