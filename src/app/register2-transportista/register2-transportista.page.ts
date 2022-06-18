import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register2-transportista',
  templateUrl: './register2-transportista.page.html',
  styleUrls: ['./register2-transportista.page.scss'],
})
export class Register2TransportistaPage implements OnInit {
  signData:any={
    street:'',
    numberOut:'',
    numberIn:'',
    cologne:'',
    town:'',
    postalCode:''
  }
   params:any
  constructor(private router:Router) {

    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  next(){
    const state = {
      uid:this.params.uid,
      type:this.params.type,
      register1: this.params.register1,
      register2: this.signData
      
    };
    this.router.navigateByUrl('/register3-transportista', { state });
  }

}
