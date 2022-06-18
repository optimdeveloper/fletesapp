import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuController, NavController } from '@ionic/angular';
import { ApisService } from '../_services/apis.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router, private menuCtrl: MenuController, private auth: ApisService, 
    private navCtrl: NavController, ) { }

    canActivate(): boolean {
      console.log(this.auth.getToken())
      if (!this.auth.getToken()) {
        this.router.navigate(["/pre-login"]);
      } 
      
      return this.auth.getToken();
    }
  
  
}
