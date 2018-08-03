import { TranslateService } from '@ngx-translate/core';
import { ToastController } from 'ionic-angular/';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public http: HttpClient,private toastCtrl: ToastController, private _translateService: TranslateService) {
    console.log('Hello CommonProvider Provider');
  }

  showToast(message?:any,position?:any):void {

    this._translateService.get(message).subscribe(
      value => {
        message = value;
      }
    )

    let toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: position
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });  
    toast.present();
  }

}
