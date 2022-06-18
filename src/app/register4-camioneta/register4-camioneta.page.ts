import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-register4-camioneta',
  templateUrl: './register4-camioneta.page.html',
  styleUrls: ['./register4-camioneta.page.scss'],
})
export class Register4CamionetaPage implements OnInit {
  params:any
  signData:any={
    license:'',
    fecha_vencimiento:'',
    license_front_photo:'',
    license_back_photo:'',
    
  }
  license_front:any=false
  license_back:any=false
  constructor( public actionsheetCtrl: ActionSheetController,
    private camera:Camera,
    private router:Router) {
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  next(){
    const state = {
      uid:this.params.uid,
      type:this.params.type,
      register1: this.params.register1,
      register2: this.params.register2,
      register3: this.params.register3,
      register4: this.signData,
      
    };
    this.router.navigateByUrl('/register5-camioneta', { state });
  }
  takePhotoLicenseFront(){
    this.license_front=true
    this.license_back=false
 
    this.getPictureMode()
  }
  takePhotoLicenseBack(){
    this.license_back=true
    this.license_front=false
    
    this.getPictureMode()
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
          if(this.license_front){
            this.signData.license_front_photo = 'data:image/jpeg;base64,' + imageData;
          }
          if(this.license_back){
            this.signData.license_back_photo = 'data:image/jpeg;base64,' + imageData;
          }
        
         
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
        if(this.license_front){
          this.signData.license_front_photo = 'data:image/jpeg;base64,' + imageData;
        }
        if(this.license_back){
          this.signData.license_back_photo = 'data:image/jpeg;base64,' + imageData;
        }
      
      }, (err) => {
        console.log(err);
        // Handle error
      });
  }
}
