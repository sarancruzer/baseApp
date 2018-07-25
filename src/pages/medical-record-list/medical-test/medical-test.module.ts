import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalTestPage } from './medical-test';

@NgModule({
  declarations: [
    MedicalTestPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalTestPage),
  ],
})
export class MedicalTestPageModule {}
