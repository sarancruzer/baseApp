import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalRecordPage } from './medical-record';

@NgModule({
  declarations: [
    MedicalRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordPage),
  ],
})
export class MedicalRecordPageModule {}
