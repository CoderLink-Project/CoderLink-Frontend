import { HttpInterceptorFn } from '@angular/common/http';

export const createProjectInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
