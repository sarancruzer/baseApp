import { CommonProvider } from '../../providers/common/common';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { MedicalRecordDetailsPage } from "../medical-record-list/medical-record-details/medical-record-details";

@IonicPage()
@Component({
  selector: "page-medical-record",
  templateUrl: "medical-record.html"
})
export class MedicalRecordPage {
  
  items = [];
  norecord = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _commonProvider: CommonProvider,
  ) {
    
  }


  ionViewDidLoad() {
    let countVal=0;
    for (let i = 0; i < 15; i++) {    
      this.items.push({name:"",count:countVal});
      countVal++;
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
        let countVal = 0;
        for (let i = 0; i < 15; i++) {
          this.items.push({name:"",count:countVal});
          countVal++;
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

  openItem(title) {
    this.navCtrl.push(MedicalRecordDetailsPage, { title:title });    
  }

  
  animateSlideLeft(i: any): any {      
    return { 'animation-delay': i * 0.2+'s' };
  }

  
}
