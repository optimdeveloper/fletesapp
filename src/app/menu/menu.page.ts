import { Component, OnInit } from '@angular/core';
import { ApisService } from '../_services/apis.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
user:any
  constructor(private api:ApisService) { 

    
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.api.getCurrentUser().then((user)=>{
      console.log('curretnUser',user)
     this.user=user
    })
  }

}
