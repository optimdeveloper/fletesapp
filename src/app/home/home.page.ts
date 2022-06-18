
import { UtilService } from './../_services/util.service';
import { ApisService } from './../_services/apis.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading: any
  loadingMsg: string
  users: any = []

  constructor(
    private util: UtilService,
    private api: ApisService,
    private router: Router,
  ) {
    
  }


  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers() {

    this.api.getUsers().subscribe((res) => {
      this.users = []
      res.forEach((item) => {
        let user = {
          id: item.payload.doc.id,
          name: item.payload.doc.data()['name'],
          email:item.payload.doc.data()['email'],
          password:item.payload.doc.data()['password'],
        }
        this.users.push(user)

      })
      console.log(this.users)
    }, err => console.error(err))
  }
  logout() {
    this.api.logout()

  }
  newUser() {
    this.router.navigate(['/menu/new-user'])
  }
  delete(user){
    this.api.deleteUser(user.id).then(res=>{
      this.util.showToast('Usuario Eliminado', 'success', 'bottom');
    }, err => console.error(err))
  }
}
