import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ApisService } from '../_services/apis.service';
import { UtilService } from '../_services/util.service';
@Component({
  selector: 'app-register2-flotilla',
  templateUrl: './register2-flotilla.page.html',
  styleUrls: ['./register2-flotilla.page.scss'],
})
export class Register2FlotillaPage implements OnInit {
  params:any
  signData:any={
    opinion_cumplimiento:'',
  }
 
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
      register2: this.signData,
      
      
    };
    this.api.addUser(state,this.params.uid).then((res) => {
     
      this.router.navigateByUrl('/menu/home-flotilla');
        this.util.showToast('Usuario Creado', 'success', 'bottom');
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
    
  }

}
