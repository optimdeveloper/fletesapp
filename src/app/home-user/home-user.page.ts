import { Component, OnInit } from '@angular/core';
import { ApisService } from '../_services/apis.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {

  constructor(private api:ApisService) { }

  ngOnInit() {
  }
  logout(){
    this.api.logout()
  }

}
