import { CommonProvider } from '../../providers/common/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { SignupPage } from '../signup/signup';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from 'ionic-angular/components/app/menu-controller';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,public translateService: TranslateService, private _commonProvider: CommonProvider, private menu: MenuController) {

    this.initForm();

    this.menu = menu;

    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');    
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    console.log('ionViewDidLoad LoginPage');    
    this.menu.enable(true);
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

    //if(this.loginForm.valid){
    //  this._commonProvider.showToast("Username or password incorrect!","top");
      this.navCtrl.setRoot(DashboardPage);            
   // }

    
  }
  
  signupCall() {
    this.navCtrl.push(SignupPage);
  }


}
