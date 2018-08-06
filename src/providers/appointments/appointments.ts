import { ApiProvider } from '../api/api';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AppointmentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppointmentsProvider {

  apiUrl = environment.API_URL;
  
  endpoint = "students";
  constructor(private api: ApiProvider) {   
    
  }

  getAppointment(params: any): Observable<any[]> {
    return this.api.get(this.apiUrl + this.endpoint ,params);
  }

  createAppointment(body: any): Observable<any> {
    return this.api.post(this.apiUrl + this.endpoint, body);
  }
  
  editAppointments(id: any): Observable<any[]> {
    return this.api.get(this.apiUrl + this.endpoint + '/' + id);
  }
  
  updateAppointments(body: any,id: any): Observable<any> {
    return this.api.put(this.apiUrl + this.endpoint + '/' + id, body);
  }

  deleteAppointments(id: any): Observable<any> {
    return this.api.delete(this.apiUrl + this.endpoint + '/' + id);
  }

}
