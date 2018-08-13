import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { TranslateModule } from '@ngx-translate/core';
import { PipesPageModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    TranslateModule.forChild(),
    PipesPageModule

  ],
})
export class DashboardPageModule {}
