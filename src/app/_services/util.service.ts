import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
//import { Globalization } from '@ionic-native/globalization/ngx';
//import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loader: any;
  isLoading = false;

  details: any;

  private address = new Subject<any>();
  private coupon = new Subject<any>();
  private review = new Subject<any>();
  orders: any;

  private changeLocation = new Subject<any>();

  private loggedIn = new Subject<any>();
  private profile = new Subject<any>();
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public router: Router,
    private navCtrl: NavController,
    //private globalization: Globalization, 
    //private _translate: TranslateService
  ) {
  }
  /*
  Start Loader
  Call this method to Start your Loader
  */

  publishAddress(data: any) {
    this.address.next(data);
  }

  publishReview(data: any) {
    this.review.next(data);
  }

  publishProfile(data: any) {
    this.profile.next(data);
  }

  observProfile(): Subject<any> {
    return this.profile;
  }

  getReviewObservable(): Subject<any> {
    return this.review;
  }

  publishLocation(data) {
    this.changeLocation.next(data);
  }
  subscribeLocation(): Subject<any> {
    return this.changeLocation;
  }

  publishLoggedIn(data) {
    this.loggedIn.next(data);
  }
  subscribeLoggedIn(): Subject<any> {
    return this.loggedIn;
  }

  getObservable(): Subject<any> {
    return this.address;
  }

  publishCoupon(data: any) {
    this.coupon.next(data);
  }
  getCouponObservable(): Subject<any> {
    return this.coupon;
  }

  setOrders(data) {
    this.orders = null;
    this.orders = data;
  }

  gerOrder() {
    return this.orders;
  }
  async show(msg?) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  async showWait(msg?) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  /*
    Show Warning Alert Message
    param : msg = message to display
    Call this method to show Warning Alert,
    */
  async showWarningAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSimpleAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
   Show Error Alert Message
   param : msg = message to display
   Call this method to show Error Alert,
   */
  async showErrorAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*
     param : email = email to verify
     Call this method to get verify email
     */
  async getEmailFilter(email) {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!(emailfilter.test(email))) {
      const alert = await this.alertCtrl.create({
        header: 'Warning',
        message: 'Please enter valid email',
        buttons: ['OK']
      });
      await alert.present();
      return false;
    } else {
      return true;
    }
  }


  /*
    Show Toast Message on Screen
     param : msg = message to display, color= background 
     color of toast example dark,danger,light. position  = position of message example top,bottom
     Call this method to show toast message
     */

  async showToast(msg, colors, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: colors,
      position: positon
    });
    toast.present();
  }


  async showToastD(msg, colors, positon, duration) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duration,
      color: colors,
      position: positon
    });
    toast.present();
  }


  async shoNotification(msg, colors, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      color: colors,
      position: positon,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async errorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  apiErrorHandler(err) {
    // console.log('Error got in service =>', err)
    if (err.status === -1) {
      this.showErrorAlert('Failed To Connect With Server');
    } else if (err.status === 401) {
      this.showErrorAlert('Unauthorized Request!');
      this.navCtrl.navigateRoot('/login');
    } else if (err.status === 500) {
      this.showErrorAlert('Somethimg Went Wrong..');
    }
  }

  // setDetails(data) {
  //   this.details = null;
  //   this.details = data;
  // }
  // getDetails() {
  //   return this.details;
  // }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  clearLocalLogout(){
    localStorage.removeItem('type');
    localStorage.removeItem('uid');
    localStorage.removeItem('email');
    localStorage.removeItem('purchased');
    //localStorage.removeItem('language');
    localStorage.removeItem('selectedCity');
    localStorage.removeItem('selectedCountry');
    localStorage.removeItem('fcm_token');
    localStorage.removeItem('school_id');
    localStorage.removeItem('school');
    localStorage.removeItem('child_count');
    localStorage.removeItem('group');
  }

  public changeLanguage(language): void {
    localStorage.setItem("language",language);
    this._translateLanguage();
  }

  _translateLanguage(): void {
    //this._translate.use(localStorage.language);
    //this._initialiseTranslation();
  }

  _initTranslate(language) {
    // Set the default language for translation strings, and the current language.
    console.log("util _initTranslate: ",language);

    var lang = language.split("-");
    console.log("arr lang", lang);
    var langFix;
    if (lang.length > 0) {
      langFix = lang[0];
    } else {
      langFix = language;
    }

    console.log("pre val",langFix);
    if (langFix != "es" && langFix != "en" && langFix != "fr") {
      langFix = 'en';
    }
    localStorage.setItem("language",langFix);
    console.log("lang fix",langFix);
    //this._translate.setDefaultLang(langFix);
    this._translateLanguage();
  }

  getDeviceLanguage() {
    
   /* if (window.Intl && typeof window.Intl === 'object') {
      this._initTranslate(navigator.language)
    }
    else {
      this.globalization.getPreferredLanguage()
        .then(res => {
          console.log("lang obtenido",res.value);
          this._initTranslate(res.value)     
        })
        .catch(e => {console.log("error globalization",e);});
    }*/
  }



  getHtmlTemplate(){    
    let data = this.readFile("../../assets/templates/directorTemplate.html"); 
    return data;
  }

  getHtmlEducatorTemplate(){    
    let data = this.readFile("../../assets/templates/educatorTemplate.html"); 
    return data;
  }

  getHtmlParentTemplate(){    
    let data = this.readFile("../../assets/templates/parentTemplate.html"); 
    return data;
  }

  getTemplate(route){
    let data = this.readFile(route); 
    return data;
  }
  readFile(file){
    let data= "";
    var raw = new XMLHttpRequest(); // create a request
    raw.open("GET", file, false); // open file
    raw.onreadystatechange = function (){ // file is ready to read
        if(raw.readyState === 4){
            if(raw.status === 200 || raw.status == 0){
                var allText = raw.responseText;
                data = allText;                
                //console.log(allText); // can be also console.logged, of course.
            }
        }
    }
    raw.send(null); // return control
    return data;
}


}