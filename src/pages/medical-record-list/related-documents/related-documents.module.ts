import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelatedDocumentsPage } from './related-documents';
import { TranslateModule } from '@ngx-translate/core';
import { PipesPageModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    RelatedDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RelatedDocumentsPage),
    TranslateModule,
    PipesPageModule
  ],
})
export class RelatedDocumentsPageModule {}
