import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  params:any
  constructor(private router:Router) {
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  first(){
    const state = {
      uid:this.params.uid,
      type: 'hombre_camion',
      
    };
    this.router.navigateByUrl('/start-transportista', { state });
  }
  second(){
    const state = {
      uid:this.params.uid,
      type: 'flotilla',
      
    };
    this.router.navigateByUrl('/start-flotilla', { state });
  }
  third(){
    const state = {
      uid:this.params.uid,
      type: 'camioneta',
      
    };
    this.router.navigateByUrl('/start-camioneta', { state });
  }
  four(){
    const state = {
      uid:this.params.uid,
      type: 'user',
      
    };
    this.router.navigateByUrl('/start-user', { state });
  }
}
