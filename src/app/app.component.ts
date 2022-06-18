import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApisService } from './_services/apis.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private router:Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:ApisService
  ) {
    this.initializeApp();
    
  }

  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
     /* if (!this.auth.getToken()) {
        this.router.navigate(["pre-login"]);
      } 
      if (this.auth.getToken() && localStorage.type=="admin") {
      
         
          this.router.navigate(["/menu/home"]);
        
       
      }
      if (this.auth.getToken() && localStorage.type=="user") {
      
       
         
          this.router.navigate(["/menu/home-user"]);
        
      }*/
     
      });

    
   
    
  }
 

}
