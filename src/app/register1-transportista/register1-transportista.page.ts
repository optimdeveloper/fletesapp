import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register1-transportista',
  templateUrl: './register1-transportista.page.html',
  styleUrls: ['./register1-transportista.page.scss'],
})
export class Register1TransportistaPage implements OnInit {
  signData:any={
    firstName:'',
    lastName:'',
    company:''
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
      uid:this.params ? this.params.uid : '',
      type: this.params.type,
      register1: this.signData,
      
    };
   // this.router.navigate(['/register2-transportista'])
    this.router.navigateByUrl('/register2-transportista', { state });
  }

}
