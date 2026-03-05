import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth  = inject(AuthService);
  const toast = inject(ToastService);
  const token = auth.getToken();

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        auth.logout();
        toast.error('Sitzung abgelaufen — bitte neu anmelden');
      } else if (err.status === 403) {
        toast.error('Keine Berechtigung für diese Aktion');
      } else if (err.status >= 500) {
        toast.error('Serverfehler — bitte später erneut versuchen');
      }
      return throwError(() => err);
    }),
  );
};
