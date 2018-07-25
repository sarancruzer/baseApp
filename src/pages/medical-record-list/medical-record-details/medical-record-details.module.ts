import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalRecordDetailsPage } from './medical-record-details';

@NgModule({
  declarations: [
    MedicalRecordDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordDetailsPage),
  ]
})
export class MedicalRecordDetailsPageModule {}
