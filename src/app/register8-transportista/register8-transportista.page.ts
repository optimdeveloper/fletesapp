import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-register8-transportista',
  templateUrl: './register8-transportista.page.html',
  styleUrls: ['./register8-transportista.page.scss'],
})
export class Register8TransportistaPage implements OnInit {
  params:any
  signData:any={
    tarjeta_circulacion_camion:'',
    numero_serie:'',
    foto_circulacion:'',
    placa_delantera:'',
    foto_placa_delantera:'',
    cajas:''
  }
  placa:any=false
   circulacion:any=false
   cajas:any
  constructor( public actionsheetCtrl: ActionSheetController,
    private camera:Camera,
    private alertCtrl:AlertController,
    private router:Router) {
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
    if(this.params.register7.cajas){
      if(this.params.register7.cajas==1){
        this.cajas = [{
          placa:'',
          foto_placa:''
        }];
      }else{
        this.cajas = [{
          placa:'',
          foto_placa:''
        },
        {
          placa:'',
          foto_placa:''
        }];
      }
      
    }
   }

  ngOnInit() {
  }
 

  next(){
    this.signData.cajas=this.cajas
    const state = {
      uid:this.params.uid,
      type:this.params.type,
      register1: this.params.register1,
      register2: this.params.register2,
      register3: this.params.register3,
      register4:this.params.register4,
      register5:this.params.register5,
      register6:this.params.register6,
      register7:this.params.register7,
      register8:this.signData,
      
    };
    this.router.navigateByUrl('/register9-transportista', { state });
  }
 
getPicturePlaca(){
  this.placa=true
    this.circulacion=false
    this.getPictureMode()
}
getPicturePlacaCaja(item){
    
    this.getPictureModeCaja(item)
}
getPictureCirculacion(){
  this.placa=false
    this.circulacion=true
  this.getPictureMode()
}
async getPictureModeCaja(item) {
  let actionSheet = await this.actionsheetCtrl.create({
      header: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Foto',
          role: 'destructive',
          icon: 'camera-outline',
          handler: () => {
            this.takePictureCaja(item);
          }
        },
        {
          text: 'Galería',
          icon: 'images-outline',
          handler: () => {
            this.openGalleryCaja(item);
          }
        },
  ]
  });
  await actionSheet.present();
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
          if(this.placa){
            this.signData.foto_placa_delantera = 'data:image/jpeg;base64,' + imageData;
          }
          if(this.circulacion){
            this.signData.foto_circulacion = 'data:image/jpeg;base64,' + imageData;
          }
           
         
        })
  }
  openGalleryCaja(item) {
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
        
            item.foto_placa = 'data:image/jpeg;base64,' + imageData;
          
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
      
        if(this.placa){
          this.signData.foto_placa_delantera = 'data:image/jpeg;base64,' + imageData;
        }
        if(this.circulacion){
          this.signData.foto_circulacion = 'data:image/jpeg;base64,' + imageData;
        }
      
      }, (err) => {
        console.log(err);
        // Handle error
      });
  }
  takePictureCaja(item) {
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
    
        item.foto_placa = 'data:image/jpeg;base64,' + imageData;
      
    }, (err) => {
      console.log(err);
      // Handle error
    });
}
}
