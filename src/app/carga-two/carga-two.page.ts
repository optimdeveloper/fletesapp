import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-carga-two',
  templateUrl: './carga-two.page.html',
  styleUrls: ['./carga-two.page.scss'],
})
export class CargaTwoPage implements OnInit {
  params: any
  signData: any = {
    fecha_descarga: '',
    hora_descarga: '',
    peso: '',
    carga:'',
    metodo_carga:'',
    dimensiones:''
  }
  image:any
  subs:any=[]
  cajas:any
  tipos: any = [{
    name: 'Pick up',
    sub: [{
      name: 'Pick up',
      img: '../../assets/img/PICK-UP.png'
    }],
  },
  {
    name: 'Camionetas',
    sub: [{
      name: 'Camioneta (chica) 1',
      img: '../../assets/img/CAMIONETACHICA.png'
    },
    {
      name: 'Camioneta (chica) 2',
      img: '../../assets/img/CAMIONETA-CHICA-B.png'
    },
    {
      name: 'Camioneta (chica) 3',
      img: '../../assets/img/CAMIONETA-CHICA-C.png'
    },
    ]
  },

  {
    name: 'Estaquitas',
    sub: [{
      name: 'Estaquita con redilas',
      img: '../../assets/img/ESTAQUITA-CON-REDILLAS.png'
    },
    {
      name: 'Estaquita caja seca',
      img: '../../assets/img/ESTAQUITA-CAJA-SECA.png'
    },
    {
      name: 'Estaquita caja refrigerada ',
      img: '../../assets/img/ESTAQUITA-REFRIGERADA.png'
    },
    ]
  },
  {
    name: 'Camiones 3.5 toneladas',
    sub: [{
      name: 'De plataforma 16 pies',
      img: '../../assets/img/1.png'
    },
    {
      name: 'De plataforma 20 pies',
      img: '../../assets/img/2.png'
    },
    {
      name: 'De plataforma 24 pies',
      img: '../../assets/img/3.png'
    },
    {
      name: 'Caja seca 16 pies',
      img: '../../assets/img/4.png'
    },
    {
      name: 'caja seca 20 pies',
      img: '../../assets/img/5.png'
    },
    {
      name: 'Caja seca 24 pies',
      img: '../../assets/img/6.png'
    },
    {
      name: 'Caja Refrigerada 16 pies',
      img: '../../assets/img/7.png'
    },
    {
      name: 'Caja Refrigerada 20 pies',
      img: '../../assets/img/8.png'
    },
    {
      name: 'Caja Refrigerada 24 pies',
      img: '../../assets/img/9.png'
    },
    {
      name: 'De redilas / a granel',
      img: '../../assets/img/10.png'
    },
    ]
  },
  {
    name: 'Rab??n',
    sub: [{
      name: 'Rab??n de plataforma / plana',
      img: '../../assets/img/r1.png'
    },
    {
      name: 'Rab??n caja seca',
      img: '../../assets/img/r2.png'
    },
    {
      name: 'Rab??n caja refrigerada',
      img: '../../assets/img/r3.png'
    },
    {
      name: 'Rab??n de redilas/ a granel',
      img: '../../assets/img/r4.png'
    },
    {
      name: 'Rab??n de volteo',
      img: '../../assets/img/r5.png'
    },
    ]
  },

  {
    name: 'Torton',
    sub: [{
      name: 'Torton de plataforma / plana',
      img: '../../assets/img/t1.png'
    },
    {
      name: 'Torton caja seca',
      img: '../../assets/img/t2.png'
    },
    {
      name: 'Torton caja refrigerada',
      img: '../../assets/img/t3.png'
    },
    {
      name: 'Torton de redilas / a granel',
      img: '../../assets/img/t4.png'
    },
    {
      name: 'Torton de volteo',
      img: '../../assets/img/t5.png'
    },
    ]
  },

  {
    name: 'Trailers',
    sub: [{
      name: '48 pies caja seca',
      img: '../../assets/img/a1.png'
    },
    {
      name: '48 pies caja refrigerada',
      img: '../../assets/img/a2.png'
    },
    {
      name: '53 pies caja seca',
      img: '../../assets/img/a3.png'
    },
    {
      name: '53 pies caja refrigerada',
      img: '../../assets/img/a4.png'
    },
    {
      name: 'Full de caja seca/ Doble semiremolque',
      img: '../../assets/img/a5.png'
    },
    {
      name: 'Plataforma de 40 pies / Plana',
      img: '../../assets/img/a6.png'
    },
    {
      name: 'Plataforma 48 pies / Plana',
      img: '../../assets/img/a7.png'
    },
    {
      name: 'Plataforma 53 pies / Plana',
      img: '../../assets/img/a8.png'
    },
    {
      name: 'Full de plataforma / Plana',
      img: '../../assets/img/a9.png'
    },
    {
      name: 'Jaula a granel / Granelera',
      img: '../../assets/img/a10.png'
    },
    {
      name: 'Jaula ganadera',
      img: '../../assets/img/a11.png'
    },
    {
      name: 'Jaula enlonada / cortina',
      img: '../../assets/img/a12.png'
    },
    {
      name: 'Tolva',
      img: '../../assets/img/a13.png'
    },
    {
      name: 'Low boy / cama baja',
      img: '../../assets/img/a14.png'
    },
    
    ]
  },


]
  constructor(public actionsheetCtrl: ActionSheetController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private router: Router) {
    this.params = this.router?.getCurrentNavigation().extras?.state;
    console.log(this.params)
  }

  ngOnInit() {
  }
  changeTipo(event){
    console.log(event)
    this.subs=event.sub
    
  }
  changeSub(event){
    console.log(event)
    this.image=event.img
   
    if(this.signData.unidad.name=='Trailers'){
      this.presentAlertConfirm()
    }
    
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Cantidad de Cajas',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '1',
          value: '1',
          handler: () => {
            console.log('Radio 1 selected');
           
            this.signData.cajas=1
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '2',
          value: '2',
          handler: () => {
            console.log('Radio 2 selected');
            this.signData.cajas=2
          },
        },
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
 async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '??Cuenta con caja(s)? ',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Si',
          handler: () => {
            this.presentAlertPrompt()
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
  next() {
    console.log(this.signData)
    const state = {
      uid: this.params ? this.params.uid : '' ,
      type: 'user',
      datos1: this.signData,

    };
    this.router.navigateByUrl('/carga-three', { state });
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
          text: 'Galer??a',
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

      this.signData.foto_seguro = 'data:image/jpeg;base64,' + imageData;

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

      this.signData.foto_seguro = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
}

