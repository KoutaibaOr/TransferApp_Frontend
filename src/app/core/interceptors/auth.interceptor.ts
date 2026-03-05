import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { I18nService } from '../services/i18n.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth   = inject(AuthService);
  const toast  = inject(ToastService);
  const i18n   = inject(I18nService);
  const token  = auth.getToken();

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        auth.logout();
        toast.error('Session expired - please login again');
      } else if (err.status === 403) {
        toast.error('Access denied - insufficient permissions');
      } else if (err.status >= 500) {
        toast.error('Server error - please try again later');
      }
      return throwError(() => err);
    }),
  );
};
