import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { RelatedDocumentsPage } from './related-documents';

@NgModule({
  declarations: [
    RelatedDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RelatedDocumentsPage),
  ],
})
export class RelatedDocumentsPageModule {}
