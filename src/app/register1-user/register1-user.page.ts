import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ApisService } from '../_services/apis.service';
import { UtilService } from '../_services/util.service';
@Component({
  selector: 'app-register1-user',
  templateUrl: './register1-user.page.html',
  styleUrls: ['./register1-user.page.scss'],
})
export class Register1UserPage implements OnInit {
  params:any
  signData:any={
    nombre:'',
    apellido:'',
    email:'',
  }
  placa:any=false
  circulacion:any=false
  terminos:any=false
  constructor( private util:UtilService,private api: ApisService,public actionsheetCtrl: ActionSheetController,
    
    private router:Router) {
    this.params = this.router.getCurrentNavigation().extras?.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
 
  next(){
    const state = {
      uid:this.params.uid,
      type:this.params.type,
      register1:this.signData,
      
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
 
}
