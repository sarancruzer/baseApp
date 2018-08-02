import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { MedicalRecordPage } from './medical-record';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MedicalRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordPage),
    TranslateModule.forChild()
  ],
})
export class MedicalRecordPageModule {}
