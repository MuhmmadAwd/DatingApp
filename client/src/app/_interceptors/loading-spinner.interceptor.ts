import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../_services/loader.service';

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor,OnInit{

  constructor(public loader:LoaderService) {}
   
  ngOnInit(): void {
    this.loader.isLoading.next(true);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      finalize(()=>{
        this.loader.isLoading.next(false);
      })
    )
  }
}
