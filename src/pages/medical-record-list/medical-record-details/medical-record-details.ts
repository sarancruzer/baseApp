import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';

/**
 * Generated class for the MedicalRecordDetailsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-record-details',
  templateUrl: 'medical-record-details.html'
})
export class MedicalRecordDetailsPage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  title: any = '';

  assitancesRoot = 'AssitancesPage'
  medicalTestRoot = 'MedicalTestPage'
  pastAppointmentsRoot = 'PastAppointmentsPage'
  relatedDocumentsRoot = 'RelatedDocumentsPage'


  constructor(public navCtrl: NavController, private navParams: NavParams,) {
    this.title = this.navParams.get('title'); 
    console.log("title");
    console.log(this.title);
    
  }

  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }

  hideToolbar() {
    this.superTabs.showToolbar(false);
  }

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

}
