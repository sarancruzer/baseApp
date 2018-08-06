import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalTestPage } from './medical-test';
import { TranslateModule } from '@ngx-translate/core';
import { PipesPageModule } from '../../../pipes/pipes.module';


@NgModule({
  declarations: [
    MedicalTestPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalTestPage),
    TranslateModule,
    PipesPageModule
  ],
})
export class MedicalTestPageModule {}
