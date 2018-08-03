import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { RelatedDocumentsPage } from './related-documents';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RelatedDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RelatedDocumentsPage),
    TranslateModule
  ],
})
export class RelatedDocumentsPageModule {}
