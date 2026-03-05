import {
  AuthService,
  Router
} from "./chunk-XRHKFZIX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KTZ56RQ7.js";
import {
  ToastService
} from "./chunk-FY6WX3KZ.js";
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
} from "./chunk-KWYNHGYO.js";

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
      error: () => {
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
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--ink);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #131929;\n  border: 1.5px solid rgba(255, 255, 255, .08);\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, .5);\n  animation: slideUp .25s ease;\n}\n.login-logo[_ngcontent-%COMP%] {\n  font-family: "Syne", sans-serif;\n  font-size: 2rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: .2rem;\n}\n.login-logo[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.login-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .4);\n  font-size: .875rem;\n  margin-bottom: 2rem;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .06);\n  border-color: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  background: rgba(255, 255, 255, .1);\n}\n.login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, .25);\n}\n.login-card[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .5);\n}\n.login-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: .75rem;\n  font-size: 1rem;\n  margin-top: .5rem;\n}\n.login-error[_ngcontent-%COMP%] {\n  background: rgba(255, 59, 92, .12);\n  border: 1px solid rgba(255, 59, 92, .3);\n  color: #FF7A92;\n  padding: .65rem .9rem;\n  border-radius: var(--radius-sm);\n  font-size: .85rem;\n}\n.demo-hint[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, .04);\n  border-radius: var(--radius-sm);\n  display: flex;\n  flex-direction: column;\n  gap: .3rem;\n}\n.demo-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: rgba(255, 255, 255, .4);\n}\n.demo-hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .7);\n  background: transparent;\n  font-size: .8rem;\n  padding: 0;\n}\n.lang-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  margin-top: 1rem;\n}\n.lang-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .45rem;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, .06);\n  border: 1.5px solid transparent;\n  color: rgba(255, 255, 255, .4);\n  font-size: .8rem;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.lang-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: rgba(29, 106, 255, .2);\n  border-color: var(--accent);\n  color: #7EB4FF;\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .login-logo[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login.component.ts", lineNumber: 59 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-TQZFQQTI.js.map
