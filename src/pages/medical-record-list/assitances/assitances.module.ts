import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { AssitancesPage } from './assitances';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AssitancesPage,
  ],
  imports: [
    IonicPageModule.forChild(AssitancesPage),
    TranslateModule
  ],
})
export class AssitancesPageModule {}
