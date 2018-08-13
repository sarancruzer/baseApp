import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';  

// import { Injectable } from '@angular/core'  
// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';  
// import { Observable } from 'rxjs/Observable';  
// import 'rxjs/add/operator/do';  
  
@Injectable()  
export class RequestInterceptor implements HttpInterceptor {  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 

        let headers = req.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

        const cloneReq = req.clone({ headers });
        console.log("cloneReq cloneReq");   
        console.log(cloneReq); 
        return next.handle(cloneReq);  
    }  
} 