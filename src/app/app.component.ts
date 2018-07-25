import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { MedicalRecordPage } from '../pages/medical-record/medical-record';
import { LoginPage } from '../pages/login/login';
import { NextAppointmentsPage } from '../pages/appointments/next-appointments/next-appointments';
import { PastAppointmentsPage } from '../pages/appointments/past-appointments/past-appointments';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: DashboardPage, icon: 'home' },
      { title: 'Medical Record', component: MedicalRecordPage, icon: 'list-box' },
      { title: 'Next Appointments', component: DashboardPage, icon: 'calendar' },
      { title: 'Personal Data', component: DashboardPage, icon: 'person' },
      { title: 'Test videoCall', component: DashboardPage, icon: 'videocam' },
      { title: 'Close Session', component: DashboardPage, icon: 'exit' },
      // { title: 'Next apppo', component: NextAppointmentsPage },
      // { title: 'past appo', component: PastAppointmentsPage },
      // { title: 'record details', component: MedicalRecordDetailsPage },
      
    ];

  }

  initializeApp() {
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
