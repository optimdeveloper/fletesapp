import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-transportista',
  templateUrl: './start-transportista.page.html',
  styleUrls: ['./start-transportista.page.scss'],
})
export class StartTransportistaPage implements OnInit {
  params:any
  constructor(private router: Router) {
    
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  next(){
    const state = {
      uid:this.params ? this.params.uid : '',
      type: 'hombre_camion',
      
    };
 
    this.router.navigateByUrl('/register1-transportista', { state });
  }

}
