import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextAppointmentsPage } from './next-appointments';

@NgModule({
  declarations: [
    NextAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(NextAppointmentsPage),
  ],
})
export class NextAppointmentsPageModule {}
