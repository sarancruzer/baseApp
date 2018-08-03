import { CommonProvider } from './../../../providers/common/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular/';
import { DocumentModalPage } from '../../modals/document-modal/document-modal';

/**
 * Generated class for the MedicalTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-test',
  templateUrl: 'medical-test.html',
})
export class MedicalTestPage {


  items = [];

  norecord = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _commonProvider: CommonProvider,
    private modalCtrl: ModalController
  ) {
    
  }


  ionViewDidLoad() {
    for (let i = 0; i < 15; i++) {
      this.items.push(this.items.length);
    }
    console.log("ionViewDidLoad PastAppointmentsPage");
  }

  doInfinite(infiniteScroll) {
    console.log(infiniteScroll);

    console.log("Begin async operation");

    let count = this.items.length;
    console.log(count);

    if (count <= 30) {
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          this.items.push(this.items.length);
        }
        console.log("Async operation has ended");
        infiniteScroll.complete();
      }, 500);
    }else{
      this.norecord = true;
      this._commonProvider.showToast("NO_MORE_DATA","bottom");
      infiniteScroll.complete();
    }
  }


 
  doRefresh(refresher) {
    console.log("refresher");
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  openItem() {
    this._commonProvider.showToast("Coming soon page!");
  }


  openModal(title){

    let app = document.getElementsByTagName('ng-component')[0];

    var data = { title : title };
    let modalPage = this.modalCtrl.create(DocumentModalPage,data,{cssClass:""});
    modalPage.onDidDismiss(() => {
      console.log('Modal closed');
      console.log(modalPage);
      app.classList.remove("bg-blur");
    });
    
    modalPage.present();
    app.classList.add("bg-blur");
    
    
  }
  
  ionViewCanLeave() {

    console.log("leave event");
   
  }

}
