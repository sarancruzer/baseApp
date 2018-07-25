import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { SignupPage } from '../signup/signup';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    //  this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // Attempt to login in through our User service
  doLogin() {
    this.submitAttempt = true;
    this.navCtrl.setRoot(DashboardPage);

    // if (this.form.valid) {
    //   this._loginProvider
    //     .login(this.form.value)
    //     .subscribe(
    //       res => {
    //         console.log(res.token);
    //         const token = res.token;
    //         const project_id = res.project_id;
    //         localStorage.setItem("token", token);
    //         localStorage.setItem("project_id", project_id);
    //           this.navCtrl.setRoot();

    //       },
    //       err => {
    //         if (err.status === 404) {
    //           this._commonProvider.showToaster(JSON.parse(err._body).invalid);
    //         } else {
    //           this._commonProvider.showToaster("Try again later");
    //         }
    //       }
    //     );
    // }
  }


  initForm(){
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  signupCall() {
    this.navCtrl.setRoot(SignupPage);
  }


}
