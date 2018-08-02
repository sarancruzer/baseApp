import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/';
import { MedicalRecordListPage } from './medical-record-list';
import { AssitancesPageModule } from './assitances/assitances.module';
import { MedicalRecordDetailsPageModule } from './medical-record-details/medical-record-details.module';
import { MedicalTestPageModule } from './medical-test/medical-test.module';
import { RelatedDocumentsPageModule } from './related-documents/related-documents.module';

@NgModule({
  declarations: [
    MedicalRecordListPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalRecordListPage),
    AssitancesPageModule,
    MedicalRecordDetailsPageModule,
    MedicalTestPageModule,
    RelatedDocumentsPageModule    
  ],
})
export class MedicalRecordListPageModule {}
