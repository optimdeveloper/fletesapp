import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-flotilla',
  templateUrl: './start-flotilla.page.html',
  styleUrls: ['./start-flotilla.page.scss'],
})
export class StartFlotillaPage implements OnInit {
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
      type: 'flotilla',
      
    };
 
    this.router.navigateByUrl('/register1-flotilla', { state });
  }

}
