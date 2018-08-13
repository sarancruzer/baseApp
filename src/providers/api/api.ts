import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  
  
  url: string = environment.API_URL;

  constructor(public http: HttpClient) {
  }

  logIn(username: string, password: string) {
    const url = 'http://server.com/index.php';
    const body = JSON.stringify({username: username,
                                 password: password});
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
                      .set('Content-Type', 'application/json; charset=utf-8');
                      
    this.http.post(url, body, {headers: headers}).subscribe(
        (data) => {
            console.log(data);
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
}

// get(endpoint: string): Observable<any[]> {
//   return this.http.get<any[]>(this.apiUrl);
// }

  // get(endpoint: string, params?: any, reqOpts?: any): Observable<any[]>{
  //   if (!reqOpts) {
  //     reqOpts = {
  //       params: new HttpParams()
  //     };
  //   }

  //   // Support easy query params for GET requests
  //   if (params) {
  //     reqOpts.params = new HttpParams();
  //     for (let k in params) {
  //       reqOpts.params = reqOpts.params.set(k, params[k]);
  //     }
  //   }

  //   return this.http.get<any[]>(endpoint,reqOpts);
  // } 

  get(endpoint: string, params?: any, reqOpts?: any):Observable<any>{


    console.log("params");
    console.log(params);

    console.log("reqOpts");
    console.log(reqOpts);

    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    console.log("params");
    console.log(params);

    console.log("reqOpts");
    console.log(reqOpts);

    return this.http.get(endpoint, reqOpts);
  }


  post(endpoint: string, body: any) {
    return this.http.post(endpoint, body);
  }

  put(endpoint: string, body: any) {
    return this.http.put(endpoint, body);
  }

  delete(endpoint: string) {
    return this.http.delete(endpoint);
  }

  patch(endpoint: string, body: any) {
    return this.http.patch(endpoint, body);
  }
}
