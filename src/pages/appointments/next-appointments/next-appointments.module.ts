import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextAppointmentsPage } from './next-appointments';
import { TranslateModule } from '@ngx-translate/core';
import { PipesPageModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    NextAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(NextAppointmentsPage),
    TranslateModule.forChild(),
    PipesPageModule
  ],
})
export class NextAppointmentsPageModule {}
