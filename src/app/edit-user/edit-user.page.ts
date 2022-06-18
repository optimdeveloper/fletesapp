import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../_services/apis.service';
import { UtilService } from '../_services/util.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
params:any
signData = { 
  name:'',
  email: '',
  password: '',
  type:'user'
};
id:any
signForm: FormGroup;
  constructor(private util:UtilService,private api: ApisService,private router:Router,private route:ActivatedRoute, private fromBuilder: FormBuilder) {
    this.route.paramMap.subscribe(params => { 
   
      this.params=params['params']
      this.id=this.params.id
      this.signData.name=this.params.name
      this.signData.email=this.params.email
      this.signData.password=this.params.password
  
      
    })
   }
  
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
           this.api.updateUser(this.signData,this.id).then((userData) => {
               this.router.navigate(["/home"])
               this.util.showToast('Usuario Actualizado', 'success', 'bottom');
           }).catch(err => {
             if (err) {
               console.log(err);
               this.util.showToast(`${err}`, 'danger', 'bottom');
             }
           });
       
   }

}
