import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular/';

/**
 * Generated class for the DocumentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-modal',
  templateUrl: 'document-modal.html',
})
export class DocumentModalPage {

  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentModalPage');
    console.log(this.navParams.get('title'));
    this.title = this.navParams.get('title');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
