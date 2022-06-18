import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private counter = 0;
  private counter1 = 0;


  constructor(
    private router:Router,
    private navCtrl: NavController) {}

    navigatePageHome() {
      this.counter += 1;
      

      //this.navCtrl.navigateRoot(`/entradas/${this.counter}`);
      this.router.navigate([`/tabs/${this.counter}/home/${this.counter}`]);
    }
      navigatePageCategory() {
        this.counter += 1;
        //this.navCtrl.navigateRoot(`/entradas/${this.counter}`);
        this.router.navigate([`/tabs/${this.counter}/category/${this.counter}`]);
      }
      navigatePageAddress() {
        this.counter += 1;
        //this.navCtrl.navigateRoot(`/entradas/${this.counter}`);
        this.router.navigate([`/tabs/${this.counter}/address`]);
      }
      navigatePageSearch() {
        this.counter += 1;
        
        //this.navCtrl.navigateRoot(`/entradas/${this.counter}`);
        this.router.navigate([`/tabs/${this.counter}/search`]);
      }
      navigatePageSettings() {
        this.counter += 1;
        //this.navCtrl.navigateRoot(`/entradas/${this.counter}`);
        this.router.navigate([`/tabs/${this.counter}/settings/${this.counter}`]);
      }
      navigatePageLanguage() {
        this.counter += 1;
        //this.navCtrl.navigateRoot(`/entradas/${this.counter}`);
        this.router.navigate([`/tabs/${this.counter}/language/`]);
      }
  
  
}
