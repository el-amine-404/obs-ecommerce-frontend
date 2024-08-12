import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from '../services/storage/local-storage.service';
import { inject } from '@angular/core';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);

  if(!req.url.includes('login')) {
    let newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + localStorageService.getItem('access-token'))
    });
    return next(newRequest);
  }

  return next(req);
};
