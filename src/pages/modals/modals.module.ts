import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalsPage } from './modals';
import { DocumentModalPageModule } from './document-modal/document-modal.module';

@NgModule({
  declarations: [
    ModalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalsPage),
    DocumentModalPageModule
  ],
})
export class ModalsPageModule {}
