import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestCallPage } from './test-call';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TestCallPage,
  ],
  imports: [
    IonicPageModule.forChild(TestCallPage),
    TranslateModule.forRoot()
  ],
})
export class TestCallPageModule {}
