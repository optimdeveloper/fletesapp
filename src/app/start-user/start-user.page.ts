import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-user',
  templateUrl: './start-user.page.html',
  styleUrls: ['./start-user.page.scss'],
})
export class StartUserPage implements OnInit {
  params:any
  constructor(private router: Router) {
    
    this.params = this.router.getCurrentNavigation().extras?.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  next(){
    const state = {
      uid:this.params.uid,
      type: 'user',
      
    };
 
    this.router.navigateByUrl('/register1-user', { state });
  }

}
