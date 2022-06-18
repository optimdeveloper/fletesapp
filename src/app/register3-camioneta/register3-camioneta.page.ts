import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-register3-camioneta',
  templateUrl: './register3-camioneta.page.html',
  styleUrls: ['./register3-camioneta.page.scss'],
})
export class Register3CamionetaPage implements OnInit {
  signData:any={
    state:'',
    ife_front_photo:'',
    ife_back_photo:'',
    voucher_photo:''
  }
   ife_front:any=false
   ife_back:any=false
   voucher:any=false
   
   params:any
  constructor(
    public actionsheetCtrl: ActionSheetController,
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
      register3: this.signData
      
      
    };
    this.router.navigateByUrl('/register4-camioneta', { state });
  }
  takePhotoIFEFront(){
    this.ife_front=true
    this.ife_back=false
    this.voucher=false
    this.getPictureMode()
  }
  takePhotoIFEBack(){
    this.ife_back=true
    this.ife_front=false
    this.voucher=false
    this.getPictureMode()
  }
  takePhotoVoucher(){
    this.voucher=true
    this.ife_front=false
    this.ife_back=false
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
          if(this.ife_front){
            this.signData.ife_front_photo = 'data:image/jpeg;base64,' + imageData;
          }
          if(this.ife_back){
            this.signData.ife_back_photo = 'data:image/jpeg;base64,' + imageData;
          }
          if(this.voucher){
            this.signData.voucher_photo = 'data:image/jpeg;base64,' + imageData;
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
        if(this.ife_front){
          this.signData.ife_front_photo = 'data:image/jpeg;base64,' + imageData;
        }
        if(this.ife_back){
          this.signData.ife_back_photo = 'data:image/jpeg;base64,' + imageData;
        }
        if(this.voucher){
          this.signData.voucher_photo = 'data:image/jpeg;base64,' + imageData;
        }
      }, (err) => {
        console.log(err);
        // Handle error
      });
  }
}
