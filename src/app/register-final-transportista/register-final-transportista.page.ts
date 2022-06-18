import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-final-transportista',
  templateUrl: './register-final-transportista.page.html',
  styleUrls: ['./register-final-transportista.page.scss'],
})
export class RegisterFinalTransportistaPage implements OnInit {
params:any
  constructor(private router:Router) { 
    this.params = this.router.getCurrentNavigation().extras.state.type;
  }

  ngOnInit() {
  }

}
