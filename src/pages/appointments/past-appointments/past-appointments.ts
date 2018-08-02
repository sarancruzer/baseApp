import { AppointmentsProvider } from "./../../../providers/appointments/appointments";
import { CommonProvider } from "../../../providers/common/common";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular/";

/**
 * Generated class for the PastAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-past-appointments",
  templateUrl: "past-appointments.html"
})
export class PastAppointmentsPage {
  items = [];

  norecord = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _commonProvider: CommonProvider,
    private _provider: AppointmentsProvider
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
      infiniteScroll.complete();
    }
  }

  

  getAppointments() {
    this._provider.getAppointment("12").subscribe(res => {}, err => {});
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
}
