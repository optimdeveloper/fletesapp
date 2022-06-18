import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '../_services/apis.service';
import { UtilService } from '../_services/util.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {
  signData = { 
    name:'',
    email: '',
    password: '',
    type:'user'
  };
  signForm: FormGroup;
  loading: any;
  constructor(  private util:UtilService,private api: ApisService,private router:Router,  private fromBuilder: FormBuilder,) { }

  ngOnInit() {
    this.signForm = this.fromBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
     
    });
  }
  back(){
    this.router.navigate(['/menu/home'])
  }
  onSignSubmit() {
    console.log(this.signForm)
  
     if (this.signForm.invalid) {
       return;
     }
           this.api.registerUser(this.signData).then((userData) => {
             console.log(userData,this.signData);
               this.router.navigate(["/home"])
               this.util.showToast('Usuario Creado', 'success', 'bottom');
           }).catch(err => {
             if (err) {
               console.log(err);
               this.loading.dismiss();
               this.util.showToast(`${err}`, 'danger', 'bottom');
             }
           });
       
   }
}
