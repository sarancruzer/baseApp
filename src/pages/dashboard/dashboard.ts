import { DataProvider } from './../../providers/data/data';
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
  searchTerm: string = '';
  items: any;

  searchFlag = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dataProvider: DataProvider) {
    
  }

  ionViewDidLoad() {
    this.items = this._dataProvider.filterItems(this.searchTerm);
    this.setFilteredItems();
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

  setFilteredItems() { 
    this.searchFlag = true;
   // this.items = this._dataProvider.filterItems(this.searchTerm);
  }

  selectedItem(item) {
    this.searchTerm = item.title;
   // this.searchFlag = false;
  }

  
}
