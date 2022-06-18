import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register1-camioneta',
  templateUrl: './register1-camioneta.page.html',
  styleUrls: ['./register1-camioneta.page.scss'],
})
export class Register1CamionetaPage implements OnInit {
  signData:any={
    firstName:'',
    lastName:'',
    
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
      type: this.params.type,
      register1: this.signData,
      
    };
   // this.router.navigate(['/register2-transportista'])
    this.router.navigateByUrl('/register2-camioneta', { state });
  }

}
