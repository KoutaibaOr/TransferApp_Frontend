import {
  AuthService,
  Router
} from "./chunk-TISKMDVW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CGP6EU4X.js";
import {
  ToastService
} from "./chunk-ZPKBI57O.js";
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
} from "./chunk-JMQHDAED.js";

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
      this.error.set(this.i18n.t().emailRequired);
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().welcome);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        console.error("\u274C LOGIN ERROR:", err);
        console.error("Status:", err.status, "Message:", err.error?.message || err.message);
        this.error.set(this.i18n.t().invalidCredentials);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 13, consts: [[1, "login-page"], [1, "login-card"], [1, "login-logo"], [1, "accent"], [1, "login-sub"], [1, "login-form"], [1, "form-group"], [1, "form-label"], ["type", "email", "placeholder", "admin@firma.de", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "login-error"], [1, "btn", "btn-primary", "w-full", 3, "click", "disabled"], [1, "demo-hint"], [1, "lang-row"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(21, "div", 12)(22, "p");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 13)(27, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
          return ctx.i18n.setLang("en");
        });
        \u0275\u0275text(28, "EN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_29_listener() {
          return ctx.i18n.setLang("ar");
        });
        \u0275\u0275text(30, "AR");
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
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? ctx.i18n.t().loggingIn : ctx.i18n.t().signIn, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.i18n.t().demoAdmin);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.i18n.t().demoUser);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "en");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.i18n.lang() === "ar");
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #080D1A;\n  background-image:\n    radial-gradient(\n      ellipse 80% 50% at 20% 40%,\n      rgba(29, 106, 255, .12) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 60% 40% at 80% 70%,\n      rgba(0, 196, 140, .08) 0%,\n      transparent 60%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: rgba(18, 25, 45, .95);\n  border: 1px solid rgba(255, 255, 255, .1);\n  border-radius: 20px;\n  padding: 2.75rem;\n  width: 100%;\n  max-width: 430px;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, .55), inset 0 1px 0 rgba(255, 255, 255, .07);\n  animation: slideUp .28s cubic-bezier(.34, 1.2, .64, 1);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\n.login-logo[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 2.1rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: .25rem;\n  letter-spacing: -.04em;\n}\n.login-logo[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.login-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .38);\n  font-size: .875rem;\n  margin-bottom: 2.25rem;\n  font-weight: 400;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .05);\n  border-color: rgba(255, 255, 255, .1);\n  color: #fff;\n  box-shadow: none;\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  background: rgba(255, 255, 255, .08);\n  box-shadow: 0 0 0 3.5px rgba(29, 106, 255, .18);\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, .22);\n}\n.login-card[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .45);\n}\n.login-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: .82rem;\n  font-size: 1rem;\n  margin-top: .35rem;\n  border-radius: var(--radius-sm);\n}\n.login-error[_ngcontent-%COMP%] {\n  background: rgba(255, 59, 92, .12);\n  border: 1px solid rgba(255, 59, 92, .28);\n  color: #FF8FA8;\n  padding: .7rem 1rem;\n  border-radius: var(--radius-sm);\n  font-size: .85rem;\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n.demo-hint[_ngcontent-%COMP%] {\n  margin-top: 1.75rem;\n  padding: 1.1rem;\n  background: rgba(255, 255, 255, .04);\n  border: 1px solid rgba(255, 255, 255, .07);\n  border-radius: var(--radius-sm);\n  display: flex;\n  flex-direction: column;\n  gap: .35rem;\n}\n.demo-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: rgba(255, 255, 255, .35);\n}\n.demo-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .65);\n  background: transparent;\n  font-size: .82rem;\n  padding: 0;\n}\n.lang-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  margin-top: 1.1rem;\n}\n.lang-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .48rem;\n  border-radius: var(--radius-xs);\n  background: rgba(255, 255, 255, .06);\n  border: 1.5px solid transparent;\n  color: rgba(255, 255, 255, .38);\n  font-size: .82rem;\n  font-weight: 700;\n  transition: all var(--transition);\n  font-family: "Inter", sans-serif;\n}\n.lang-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: rgba(29, 106, 255, .2);\n  border-color: rgba(29, 106, 255, .5);\n  color: #7EB4FF;\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n    border-radius: 16px;\n  }\n  .login-logo[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login.component.ts", lineNumber: 59 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QPQUJU6I.js.map
