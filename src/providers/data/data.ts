import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  items: any;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');  
    this.items = [
        {title: 'Dr.Javier'},
        {title: 'Dr.Daniel'}        
    ]
  }

  filterItems(searchTerm){
      return this.items.filter((item) => {
          return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });    

  }

}
