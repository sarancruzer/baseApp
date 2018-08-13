import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastAppointmentsPage } from './past-appointments';
import { PipesPageModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    PastAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(PastAppointmentsPage),
    TranslateModule,
    PipesPageModule
  ],
})
export class PastAppointmentsPageModule {}
