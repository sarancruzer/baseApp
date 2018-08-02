import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { MedicalRecordDetailsPage } from './medical-record-details';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MedicalRecordDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordDetailsPage),
    SuperTabsModule.forRoot(),
    TranslateModule.forChild()
  ]
})
export class MedicalRecordDetailsPageModule {}
