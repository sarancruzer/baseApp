import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { PastAppointmentsPage } from './past-appointments';

@NgModule({
  declarations: [
    PastAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(PastAppointmentsPage),
    TranslateModule
  ],
})
export class PastAppointmentsPageModule {}
