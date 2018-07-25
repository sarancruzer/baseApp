import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { MedicalRecordPageModule } from '../pages/medical-record/medical-record.module';
import { AppointmentsPageModule } from '../pages/appointments/appointments.module';
import { MedicalRecordListPageModule } from '../pages/medical-record-list/medical-record-list.module';

@NgModule({
  declarations: [
    MyApp,      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    SignupPageModule,
    DashboardPageModule,
    MedicalRecordPageModule,
    AppointmentsPageModule,
    MedicalRecordListPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
