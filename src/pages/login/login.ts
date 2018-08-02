import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { SignupPage } from '../signup/signup';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,public translateService: TranslateService) {

    //  this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  initForm(){
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    this.submitAttempt = true;
    this.navCtrl.setRoot(DashboardPage);    
  }
  
  signupCall() {
    this.navCtrl.push(SignupPage);
  }


}
