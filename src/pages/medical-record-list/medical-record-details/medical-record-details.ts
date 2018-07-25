import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  assitancesRoot = 'AssitancesPage'
  medicalTestRoot = 'MedicalTestPage'
  pastAppointmentsRoot = 'PastAppointmentsPage'
  relatedDocumentsRoot = 'RelatedDocumentsPage'


  constructor(public navCtrl: NavController) {}

}
