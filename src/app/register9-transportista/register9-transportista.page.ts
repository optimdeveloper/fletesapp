import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ApisService } from '../_services/apis.service';
import { UtilService } from '../_services/util.service';
@Component({
  selector: 'app-register9-transportista',
  templateUrl: './register9-transportista.page.html',
  styleUrls: ['./register9-transportista.page.scss'],
})
export class Register9TransportistaPage implements OnInit {
  params:any
  signData:any={
    tarjeta_circulacion_remolque:'',
    numero_serie:'',
    foto_circulacion:'',
    placa_trasera:'',
    foto_placa_trasera:''
  }
  placa:any=false
  circulacion:any=false
  terminos:any=false
  constructor( private util:UtilService,private api: ApisService,public actionsheetCtrl: ActionSheetController,
    private camera:Camera,
    private alertCtrl:AlertController,
    private router:Router) {
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
 
  onInputTime(event){
    console.log(event.detail.checked,this.terminos)
  }
  next(){
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
      register8:this.params.register8,
      register9:this.signData,
      
    };
    this.api.addUser(state,this.params.uid).then((res) => {
     
      this.router.navigateByUrl('/register-final-transportista',{state});
        this.util.showToast('Usuario Creado', 'success', 'bottom');
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
    
  }
 
getPicturePlaca(){
  this.placa=true
    this.circulacion=false
    this.getPictureMode()
}
getPictureCirculacion(){
  this.placa=false
    this.circulacion=true
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
          if(this.placa){
            this.signData.foto_placa_trasera = 'data:image/jpeg;base64,' + imageData;
          }
          if(this.circulacion){
            this.signData.foto_circulacion = 'data:image/jpeg;base64,' + imageData;
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
      
        if(this.placa){
          this.signData.foto_placa_trasera = 'data:image/jpeg;base64,' + imageData;
        }
        if(this.circulacion){
          this.signData.foto_circulacion = 'data:image/jpeg;base64,' + imageData;
        }
      
      }, (err) => {
        console.log(err);
        // Handle error
      });
  }
}
