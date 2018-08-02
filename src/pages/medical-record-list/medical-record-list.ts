import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';

/**
 * Generated class for the MedicalRecordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-record-list',
  templateUrl: 'medical-record-list.html',
})
export class MedicalRecordListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalRecordListPage');
  }

}
