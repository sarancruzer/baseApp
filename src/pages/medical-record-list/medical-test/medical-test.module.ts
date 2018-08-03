import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { MedicalTestPage } from './medical-test';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MedicalTestPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalTestPage),
    TranslateModule
  ],
})
export class MedicalTestPageModule {}
