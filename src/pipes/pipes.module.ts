import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesPage } from './pipes';
import { TruncatePipe } from './truncate-pipe';

@NgModule({
  declarations: [
    PipesPage,
    TruncatePipe
  ],
  imports: [
    IonicPageModule.forChild(PipesPage),
  ],
  exports:[TruncatePipe]
})
export class PipesPageModule {}
