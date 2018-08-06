import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssitancesPage } from './assitances';
import { TranslateModule } from '@ngx-translate/core';
import { PipesPageModule } from '../../../pipes/pipes.module';


@NgModule({
  declarations: [
    AssitancesPage,
  ],
  imports: [
    IonicPageModule.forChild(AssitancesPage),
    TranslateModule,
    PipesPageModule
  ],
})
export class AssitancesPageModule {}
