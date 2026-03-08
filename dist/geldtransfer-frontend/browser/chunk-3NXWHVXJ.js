import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-ULJ2OLKO.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this._toasts = signal([]);
    this.toasts = this._toasts.asReadonly();
    this.counter = 0;
  }
  show(message, type = "info", duration = 3500) {
    const id = ++this.counter;
    this._toasts.update((t) => [...t, { id, message, type }]);
    setTimeout(() => this.remove(id), duration);
  }
  success(msg) {
    this.show(msg, "success");
  }
  error(msg) {
    this.show(msg, "error", 5e3);
  }
  info(msg) {
    this.show(msg, "info");
  }
  remove(id) {
    this._toasts.update((t) => t.filter((x) => x.id !== id));
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-3NXWHVXJ.js.map
