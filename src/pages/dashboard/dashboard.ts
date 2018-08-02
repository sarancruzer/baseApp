import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular/";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import { MedicalRecordPage } from "../medical-record/medical-record";
import { ProfilePage } from "../profile/profile";
import { TestCallPage } from "../test-call/test-call";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
   
  }

  medicalHistoryCall() {
    console.log("medicalHistoryCall");
    this.navCtrl.push(MedicalRecordPage);    
  }

  personalDataCall() {
    console.log("personalDataCall");
    this.navCtrl.push(ProfilePage);
  }

  TestConnectionCall() {
    console.log("TestConnectionCall");
    this.navCtrl.push(TestCallPage);
  }

  
}
