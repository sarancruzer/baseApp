import { ResponseInterceptor } from './../interceptors/response-interceptor';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPageModule } from "../pages/login/login.module";
import { SignupPageModule } from "../pages/signup/signup.module";
import { DashboardPageModule } from "../pages/dashboard/dashboard.module";
import { MedicalRecordPageModule } from "../pages/medical-record/medical-record.module";
import { AppointmentsPageModule } from "../pages/appointments/appointments.module";
import { MedicalRecordListPageModule } from "../pages/medical-record-list/medical-record-list.module";
import { ProfilePageModule } from "../pages/profile/profile.module";
import { TestCallPageModule } from "../pages/test-call/test-call.module";
import { LogoutPageModule } from "../pages/logout/logout.module";
import { ApiProvider } from "../providers/api/api";
import { ModalsPageModule } from "../pages/modals/modals.module";

export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

import { CommonProvider } from "../providers/common/common";
import { RequestInterceptor } from "../interceptors/request-interceptor";
import { AppointmentsProvider } from '../providers/appointments/appointments';

import { Camera } from '@ionic-native/camera';

import { Pro } from '@ionic/pro';


Pro.init('56186D32', {
  appVersion: '1.0.0'
})

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: setTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    LoginPageModule,
    SignupPageModule,
    DashboardPageModule,
    MedicalRecordPageModule,
    AppointmentsPageModule,
    MedicalRecordListPageModule,
    ProfilePageModule,
    TestCallPageModule,
    LogoutPageModule,
    ModalsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    CommonProvider,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    AppointmentsProvider,
    Camera
  ]
})
export class AppModule {
  
}
