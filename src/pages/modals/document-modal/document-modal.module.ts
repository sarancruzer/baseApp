import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentModalPage } from './document-modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DocumentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentModalPage),
    TranslateModule.forRoot()
  ],
})
export class DocumentModalPageModule {}
