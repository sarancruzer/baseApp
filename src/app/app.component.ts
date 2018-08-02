import { TestCallPage } from '../pages/test-call/test-call';
import { NextAppointmentsPage } from '../pages/appointments/next-appointments/next-appointments';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,NavController } from 'ionic-angular/';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';


import { DashboardPage } from '../pages/dashboard/dashboard';
import { MedicalRecordPage } from '../pages/medical-record/medical-record';
import { LoginPage } from '../pages/login/login';
import { PastAppointmentsPage } from '../pages/appointments/past-appointments/past-appointments';
import { LogoutPage } from '../pages/logout/logout';
import { MedicalRecordDetailsPage } from '../pages/medical-record-list/medical-record-details/medical-record-details';
import { ProfilePage } from '../pages/profile/profile';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate: TranslateService) {

       
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME_MENU', component: DashboardPage, icon: 'fa fa-home' },
      { title: 'MEDICAL_RECORD_MENU', component: MedicalRecordPage, icon: 'fa fa-list' },
      { title: 'NEXT_APPOINTMENTS_MENU', component: NextAppointmentsPage, icon: 'fa fa-calendar-check-o' },
      { title: 'PERSONAL_DATA_MENU', component: ProfilePage, icon: 'fa fa-user' },
      { title: 'TEST_VIDEOCALL_MENU', component: TestCallPage, icon: 'fa fa-video-camera' },
      { title: 'CLOSE_SESSION_MENU', component: LogoutPage, icon: 'fa fa-sign-out' },
      
    ];

  }

  initializeApp() {
    this.translate.setDefaultLang('sn');
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
