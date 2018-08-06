import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalRecordPage } from './medical-record';
import { TranslateModule } from '@ngx-translate/core';
import { PipesPageModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MedicalRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordPage),
    TranslateModule.forChild(),
    PipesPageModule
  ],
})
export class MedicalRecordPageModule {}
