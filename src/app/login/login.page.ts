import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ApisService } from '../_services/apis.service';
import { UtilService } from '../_services/util.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  success:any=false 
  loginForm: FormGroup;
  authData :any= {
    name: '',
    password: '',
  };
  code:any
  loading: any;
  OTP: string = '';
  Code: any;
  PhoneNo: any;
  CountryCode: any = '+593';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  recaptchaVerifier: any;
  confirmationResult: any;
constructor(
    private fromBuilder: FormBuilder,
    private router: Router,
    public alertCtrl: AlertController,
    private api: ApisService,
    private loadingCtrl:LoadingController,
    public toastController: ToastController,
    private util:UtilService,
    private fireAuth: AngularFireAuth,
 
)
  {}
 
  ngOnInit() {
  

  }

 
  async showLoading() {
    this.loading = await this.loadingCtrl.create({
        message: 'Espere...'
    });
    await this.loading.present();
  }
  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }
  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }
  signinWithPhoneNumber($event){
    console.log(this.authData.name)
    this.showLoading()
    this.api.signInWithPhoneNumber(this.recaptchaVerifier, this.CountryCode+this.authData.name).then(
      success => {
        //this.OtpVerification();
        this.loading.dismiss()
        this.success=true
      }
    );
  }
  sendCode(){
    this.api.enterVerificationCode(this.code).then(
      userData => {
        //this.showSuccess();
        this.presentToast()
        console.log(userData);
        this.verifyUser(userData) 
      }
    );
  }
  async OtpVerification() {
    const alert = await this.alertCtrl.create({
      header: 'Enter OTP',
      backdropDismiss: false,
      inputs: [
        {
          name: 'otp',
          type: 'text',
          placeholder: 'Enter your otp',
        }
      ],
      buttons: [{
        text: 'Enter',
        handler: (res) => {
         
          this.api.enterVerificationCode(res.otp).then(
            userData => {
              
             
            }
          );
        }
      }
      ]
    });
    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verificación exitosa !',
      duration: 2000
    });
    toast.present();
  }
  async showSuccess() {
    const alert = await this.alertCtrl.create({
      header: 'Verificación exitosa !',
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
  async showAlert(msg:any) {
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: msg,
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            alert.dismiss();
           this.router.navigate(['/pre-login'])
          }
        }
      ]
    });
    alert.present();
  }
  verifyUser(userData){
    this.showLoading()
    this.api.getUser(userData.uid).then((res)=>{
      console.log('verifyData',userData.uid)
      if(res != undefined){
        if(res.status==true){
          this.loading.dismiss()
          localStorage.setItem('uid',userData.uid)
          this.router.navigate(['/menu/home-flotilla'])
        }else{
          this.loading.dismiss()
          this.showAlert('Su cuenta aún no ha sido aprobada, el proceso dura de 2 a 3 días')
        }
        
      }else{
       this.loading.dismiss()
        const state = {
          uid:userData.uid, 
        };
      //  this.router.navigate(['/start'])
        this.router.navigateByUrl('/start', { state });
      }
    })
  }
  onSubmit() {
    
    this.api.login(this.loginForm.value.email,this.loginForm.value.password).then((userData) => {
      this.util.showToast('Usuario Logueado', 'success', 'bottom');
     if(userData.type=='admin'){
      this.router.navigate(["/menu/home"])
     }else{
      this.router.navigate(["/menu/home-user"])
     }
    })
  }

  


}

