import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { AppointmentsPage } from './appointments';
import { NextAppointmentsPageModule } from './next-appointments/next-appointments.module';
import { PastAppointmentsPageModule } from './past-appointments/past-appointments.module';

@NgModule({
  declarations: [
    AppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentsPage),
    NextAppointmentsPageModule,
    PastAppointmentsPageModule
  ],
})
export class AppointmentsPageModule {}
