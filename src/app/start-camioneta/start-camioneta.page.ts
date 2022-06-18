import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-camioneta',
  templateUrl: './start-camioneta.page.html',
  styleUrls: ['./start-camioneta.page.scss'],
})
export class StartCamionetaPage implements OnInit {
  params:any
  constructor(private router: Router) {
    
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  next(){
    const state = {
      uid:this.params.uid,
      type: 'camioneta',
      
    };
 
    this.router.navigateByUrl('/register1-camioneta', { state });
  }

}
