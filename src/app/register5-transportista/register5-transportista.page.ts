import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-register5-transportista',
  templateUrl: './register5-transportista.page.html',
  styleUrls: ['./register5-transportista.page.scss'],
})
export class Register5TransportistaPage implements OnInit {
  params:any
  signData:any={
    user_photo:'',
  }
 
  constructor( public actionsheetCtrl: ActionSheetController,
    private camera:Camera,
    private alertCtrl:AlertController,
    private router:Router) {
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  save(){
    this.showSuccess()
  }
  async showSuccess() {
    const alert = await this.alertCtrl.create({
      header: 'Documentos Guardados',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            alert.dismiss();
            
          }
        }
      ]
    });
    alert.present();
  }
  next(){
    const state = {
      uid:this.params.uid,
      type:this.params.type,
      register1: this.params.register1,
      register2: this.params.register2,
      register3: this.params.register3,
      register4:this.params.register4,
      register5:this.signData,
      
    };
    this.router.navigateByUrl('/register6-transportista', { state });
  }
 

  async getPictureMode() {
    let actionSheet = await this.actionsheetCtrl.create({
        header: 'Options',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Foto',
            role: 'destructive',
            icon: 'camera-outline',
            handler: () => {
              this.takePicture();
            }
          },
          {
            text: 'Galería',
            icon: 'images-outline',
            handler: () => {
              this.openGallery();
            }
          },
    ]
    });
    await actionSheet.present();
  }
  openGallery() {
    const options: CameraOptions = {
        quality: 70,
        targetWidth: 300,
        targetHeight: 3200,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        }

        this.camera.getPicture(options).then((imageData) => {
         
            this.signData.user_photo = 'data:image/jpeg;base64,' + imageData;
         
        })
  }

  takePicture() {
      const options: CameraOptions = {
        quality: 100,
        targetWidth: 300,
        targetHeight: 300,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        mediaType: this.camera.MediaType.PICTURE
      };
      this.camera.getPicture(options).then((imageData) => {
      
        this.signData.user_photo = 'data:image/jpeg;base64,' + imageData;
      
      }, (err) => {
        console.log(err);
        // Handle error
      });
  }
}
