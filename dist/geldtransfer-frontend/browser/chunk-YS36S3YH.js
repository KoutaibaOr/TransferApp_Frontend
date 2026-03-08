import {
  AuthService
} from "./chunk-TISKMDVW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CGP6EU4X.js";
import {
  ToastService
} from "./chunk-ZPKBI57O.js";
import {
  BranchService,
  SettingsService
} from "./chunk-BLC44EQZ.js";
import {
  CommonModule,
  DecimalPipe,
  I18nService,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JMQHDAED.js";

// src/app/features/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SettingsComponent_Conditional_12_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "button", 13);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_12_For_22_Template_button_click_14_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteFeeRule(r_r2.id));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.currency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r2.value, "", r_r2.type === "PERCENT" ? "%" : " \u20AC", "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(r_r2.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.active ? ctx_r2.t().active : ctx_r2.t().inactive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().delete);
  }
}
function SettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9)(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, SettingsComponent_Conditional_12_For_22_Template, 16, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().feeRules);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.t().country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().actions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.feeRules());
  }
}
function SettingsComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 21);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_For_7_Template_button_click_12_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteUser(u_r6.id, u_r6.role, u_r6.name));
    });
    \u0275\u0275text(13, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const u_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r6.email, " \xB7 ", (tmp_13_0 = u_r6.branch) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "Admin", "");
    \u0275\u0275advance();
    \u0275\u0275classMap(u_r6.role === "admin" ? "badge-in_progress" : u_r6.role === "branch_manager" ? "badge-completed" : "badge-created");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.role === "admin" ? ctx_r2.t().roleAdmin : u_r6.role === "branch_manager" ? ctx_r2.t().roleBranchManager : ctx_r2.t().roleEmployee);
    \u0275\u0275advance();
    \u0275\u0275classMap(u_r6.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.active ? ctx_r2.t().active : ctx_r2.t().inactive);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.t().delete);
  }
}
function SettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 14)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(true));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, SettingsComponent_Conditional_13_For_7_Template, 14, 11, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().users);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uFF0B ", ctx_r2.t().newUser, "");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.users());
  }
}
function SettingsComponent_Conditional_14_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r7.flag, " ", c_r7.code, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.symbol);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(c_r7.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.active ? ctx_r2.t().active : ctx_r2.t().inactive);
  }
}
function SettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9)(2, "table")(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Symbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SettingsComponent_Conditional_14_For_15_Template, 11, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.currencies());
  }
}
function SettingsComponent_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 24);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t().noBranches);
  }
}
function SettingsComponent_Conditional_15_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_15_For_8_Template_button_click_15_listener() {
      const b_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteBranch(b_r10.id, b_r10.name));
    });
    \u0275\u0275text(16, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const b_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", b_r10.color || "var(--accent)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", b_r10.city, " \xB7 ", ctx_r2.t().manager, ": ", (tmp_13_0 = b_r10.managerName) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ctx_r2.t().noneAssigned, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC ", \u0275\u0275pipeBind2(10, 11, b_r10.cashBalance, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().balance);
    \u0275\u0275advance();
    \u0275\u0275classMap(b_r10.active ? "badge-completed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r10.active ? ctx_r2.t().active : ctx_r2.t().inactive);
  }
}
function SettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 14)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewBranch.set(true));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SettingsComponent_Conditional_15_Conditional_6_Template, 5, 1, "div", 22);
    \u0275\u0275repeaterCreate(7, SettingsComponent_Conditional_15_For_8_Template, 17, 14, "div", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().manageBranches);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uFF0B ", ctx_r2.t().newBranch, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, !ctx_r2.branches().length ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.branches());
  }
}
function SettingsComponent_Conditional_16_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    \u0275\u0275property("value", u_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r12.name, " (", u_r12.email, ")");
  }
}
function SettingsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewBranch.set(false));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewBranch.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36)(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newBranchDto.name, $event) || (ctx_r2.newBranchDto.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 37)(14, "label", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newBranchDto.city, $event) || (ctx_r2.newBranchDto.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "label", 38);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newBranchDto.phone, $event) || (ctx_r2.newBranchDto.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 37)(22, "label", 38);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newBranchDto.address, $event) || (ctx_r2.newBranchDto.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 40)(26, "label", 38);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newBranchDto.managerId, $event) || (ctx_r2.newBranchDto.managerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 41);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, SettingsComponent_Conditional_16_For_32_Template, 2, 3, "option", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 40)(34, "label", 38);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newBranchDto.cashBalance, $event) || (ctx_r2.newBranchDto.cashBalance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 44)(38, "button", 45);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewBranch.set(false));
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 46);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createBranch());
    });
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t().newBranch);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.t().branchName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newBranchDto.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().branchCity);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newBranchDto.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().branchPhone);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newBranchDto.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().branchAddress);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newBranchDto.address);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().branchManager);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newBranchDto.managerId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2014 ", ctx_r2.t().noneAssigned, " \u2014");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.managers());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.t().initialBalance, " (EUR)");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newBranchDto.cashBalance);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().newBranch);
  }
}
function SettingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(false));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 37)(9, "label", 38);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_17_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.name, $event) || (ctx_r2.newUser.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_17_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.email, $event) || (ctx_r2.newUser.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label", 38);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_17_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.password, $event) || (ctx_r2.newUser.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "label", 38);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_17_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.role, $event) || (ctx_r2.newUser.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 49);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 50);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 51);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 37)(31, "label", 38);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_17_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUser.branch, $event) || (ctx_r2.newUser.branch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 44)(35, "button", 45);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showNewUser.set(false));
    });
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 46);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createUser());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t().newUser);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().email);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().password);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.password);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().role);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().roleEmployee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().roleBranchManager);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().roleAdmin);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().branch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUser.branch);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t().cancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t().createUser);
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(svc, branchSvc, toast, i18n, auth) {
    this.svc = svc;
    this.branchSvc = branchSvc;
    this.toast = toast;
    this.i18n = i18n;
    this.auth = auth;
    this.tab = signal("fees");
    this.feeRules = signal([]);
    this.users = signal([]);
    this.currencies = signal([]);
    this.branches = signal([]);
    this.showNewUser = signal(false);
    this.showNewBranch = signal(false);
    this.newUser = { name: "", email: "", password: "", role: "employee", branch: "" };
    this.newBranchDto = { name: "", city: "", phone: "", address: "", managerId: "", cashBalance: 0 };
    this.managers = computed(() => this.users().filter((u) => u.role === "branch_manager"));
    this.t = this.i18n.t;
  }
  ngOnInit() {
    this.svc.getFeeRules().subscribe((r) => this.feeRules.set(r));
    this.svc.getUsers().subscribe((u) => this.users.set(u));
    this.svc.getCurrencies().subscribe((c) => this.currencies.set(c));
    this.branchSvc.getAll().subscribe((b) => this.branches.set(b));
  }
  deleteFeeRule(id) {
    if (!confirm(this.i18n.t().delete + "?"))
      return;
    this.svc.deleteFeeRule(id).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().delete + "d");
        this.svc.getFeeRules().subscribe((r) => this.feeRules.set(r));
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  deleteUser(userId, userRole, userName) {
    if (!this.auth.isAdmin()) {
      this.toast.error(this.i18n.t().statusUpdateError);
      return;
    }
    if (this.auth.user()?.id === userId) {
      this.toast.error(this.i18n.t().cancelError);
      return;
    }
    const msg = `${this.i18n.t().delete} "${userName}"?`;
    if (!confirm(msg))
      return;
    this.svc.deleteUser(userId).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().delete + "d");
        this.svc.getUsers().subscribe((u) => this.users.set(u));
      },
      error: (err) => {
        const msg2 = err.error?.message || this.i18n.t().statusUpdateError;
        this.toast.error(msg2);
      }
    });
  }
  createUser() {
    this.svc.createUser(this.newUser).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().customerCreated);
        this.showNewUser.set(false);
        this.svc.getUsers().subscribe((u) => this.users.set(u));
      },
      error: () => this.toast.error(this.i18n.t().creationError)
    });
  }
  createBranch() {
    if (!this.newBranchDto.name) {
      this.toast.error(this.i18n.t().requiredField);
      return;
    }
    this.branchSvc.create(this.newBranchDto).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().branchCreated);
        this.showNewBranch.set(false);
        this.newBranchDto = { name: "", city: "", phone: "", address: "", managerId: "", cashBalance: 0 };
        this.branchSvc.getAll().subscribe((b) => this.branches.set(b));
      },
      error: () => this.toast.error(this.i18n.t().creationError)
    });
  }
  deleteBranch(id, name) {
    if (!confirm(`${this.i18n.t().confirmDeleteBranch} "${name}"?`))
      return;
    this.branchSvc.delete(id).subscribe({
      next: () => {
        this.toast.success(this.i18n.t().branchDeleted);
        this.branchSvc.getAll().subscribe((b) => this.branches.set(b));
      },
      error: () => this.toast.error(this.i18n.t().statusUpdateError)
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 19, consts: [[1, "page-header"], [1, "page-title"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "card", 2, "padding", "0"], [1, "card"], [1, "modal-backdrop"], [1, "card-header", 2, "padding", "1.25rem 1.5rem"], [1, "card-title"], [1, "table-wrap"], [1, "fw-600"], [1, "badge", "badge-created"], [1, "badge"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "card-header"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "user-row"], [1, "u-avatar"], [2, "flex", "1"], [1, "fw-600", 2, "font-size", ".875rem"], [2, "font-size", ".75rem", "color", "var(--muted)"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "title"], [1, "empty-state"], [1, "branch-card"], [1, "empty-icon"], [1, "branch-dot"], [1, "fw-600", 2, "font-size", ".9rem"], [2, "text-align", "right", "min-width", "110px"], [1, "fw-600", 2, "font-size", ".85rem", "color", "var(--accent2)"], [2, "font-size", ".72rem", "color", "var(--muted)"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "margin-top", ".75rem"], ["value", ""], [3, "value"], ["type", "number", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "employee"], ["value", "branch_manager"], ["value", "admin"], ["placeholder", "Berlin-Mitte", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_4_listener() {
          return ctx.tab.set("fees");
        });
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_6_listener() {
          return ctx.tab.set("users");
        });
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_8_listener() {
          return ctx.tab.set("branches");
        });
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_10_listener() {
          return ctx.tab.set("currencies");
        });
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, SettingsComponent_Conditional_12_Template, 23, 7, "div", 4)(13, SettingsComponent_Conditional_13_Template, 8, 2, "div", 5)(14, SettingsComponent_Conditional_14_Template, 16, 0, "div", 4)(15, SettingsComponent_Conditional_15_Template, 9, 3, "div", 5)(16, SettingsComponent_Conditional_16_Template, 42, 16, "div", 6)(17, SettingsComponent_Conditional_17_Template, 39, 15, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.t().settings);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "fees");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().feeRules);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.tab() === "users");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().users);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.tab() === "branches");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().manageBranches);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.tab() === "currencies");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.t().currencies);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.tab() === "fees" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.tab() === "users" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.tab() === "currencies" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.tab() === "branches" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.showNewBranch() ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.showNewUser() ? 17 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .65rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  margin-bottom: .4rem;\n}\n.u-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .75rem;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.branch-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  padding: .75rem 1rem;\n  background: var(--bg);\n  border-radius: var(--radius-sm);\n  margin-bottom: .5rem;\n  border: 1px solid var(--border);\n}\n.branch-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n@media (max-width:900px) {\n  .settings-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\features\\settings\\settings.component.ts", lineNumber: 185 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-YS36S3YH.js.map
