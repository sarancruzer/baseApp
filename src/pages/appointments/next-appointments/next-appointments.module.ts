import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { NextAppointmentsPage } from './next-appointments';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NextAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(NextAppointmentsPage),
    TranslateModule.forChild()
  ],
})
export class NextAppointmentsPageModule {}
