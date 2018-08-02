import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  ToastController
} from "ionic-angular/";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Camera } from "@ionic-native/camera";


@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {


  lastImage: string = null;
 

  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController    
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }

 
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "",
      buttons: [
        {
          text: "Open Gallary",
          handler: () => {
            this.accessGallery();
            // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: "Use Camera",
          handler: () => {
            this.openCamera();
            // this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    actionSheet.present();
  }





  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,'+imageData;

      console.log("base64Image"); 
      console.log(base64Image); 

      //Usage example:
      var file = this.dataURLtoFile(base64Image, 'a.png');
      console.log("FILE OBJECT");
      console.log(file);

    }, (err) => {
        console.log(err);
    });
  }

  
openCamera() {
    var options = {
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    };
      this.camera.getPicture(options).then((imageData) => {
      
      let cameraData = 'data:image/jpeg;base64,' + imageData;
      console.log("cameraData");
      console.log(cameraData);
      
        //Usage example:
        var file = this.dataURLtoFile(cameraData, 'a.png');
        console.log("FILE OBJECT");
        console.log(file);
      
    }, (err) => {
      // Handle error
    });
  }


  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

}



