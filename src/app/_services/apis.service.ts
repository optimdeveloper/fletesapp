import { AlertController, NavController } from '@ionic/angular';
import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { BehaviorSubject } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  authState = new BehaviorSubject(false);
  db = firebase.firestore();
  confirmationResult: firebase.auth.ConfirmationResult;
  constructor(
    private alertCtrl:AlertController,
    private fireAuth: AngularFireAuth,
    private adb: AngularFirestore,
   private router:Router
  ) { 
   
  }
  public signInWithPhoneNumber(recaptchaVerifier, phoneNumber) {
    return new Promise<any>((resolve, reject) => {

      this.fireAuth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
          this.confirmationResult = confirmationResult;
          resolve(confirmationResult);
        }).catch((error) => {
          console.log(error);
          reject('SMS not sent');
        });
    });
  }
  public async enterVerificationCode(code) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult.confirm(code).then(async (result) => {
        console.log(result);
        const user = result.user;
        resolve(user);
      }).catch((error) => {
        if( error.code=='auth/too-many-requests'){
          this.showAlert('Ha realizdo muchas peticiones inténtelo más tarde')
        }
        if( error.code=='auth/invalid-phone-number'){
          this.showAlert('Formato inválido, ingrese solo el número telefónico')
        }
        reject(error.message);
      });

    });
  }
  async showAlert(msg:any) {
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      header: msg,
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            alert.dismiss();
            this.router.navigate(['/pre-login'])
            
          }
        }
      ]
    });
    alert.present();
  }
  public delete(collection,id: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
     
            this.db.collection(collection).doc(id).delete().then((res)=>{
              resolve(res);
            }).catch(error => {
              reject(error);
            });
           
          
      })
  }
  public getUser(uid): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users').doc(uid).get().subscribe((user: any) => {
        resolve(user.data());
      }, error => {
        reject(error);
      });
    });
  }
  public getCurrentUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users').doc(localStorage.uid).get().subscribe((user: any) => {
        resolve(user.data());
      }, error => {
        reject(error);
      });
    });
  }

  update(collection,id,data ): Promise<any> {
    return this.adb.collection<any>(collection).doc(id).update(data);
  }
  register(signData: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.createUserWithEmailAndPassword(signData.email, signData.password)
        .then(res => {
          if (res.user) {
            
            this.db.collection('users').doc(res.user.uid).set({
              uid: res.user.uid,
              email: signData.email,
              password: signData.password,
              name:signData.name,
              type: signData.type,
            
            });
            localStorage.setItem('type',signData.type)
            localStorage.setItem('uid',res.user.uid)
            this.authState.next(true);
            resolve(res.user);
          }
        })
        .catch(err => {
          reject(`login failed ${err}`)
        });
    });
  }
  getUsers(){
    return this.adb.collection<any>('users', ref => ref.where('type', "==", 'user')).snapshotChanges()
   }
   deleteUser(id:any){
    return this.db.collection('users').doc(id).delete();
   }
   addUser(data:any,uid:any){
    return this.db.collection('users').doc(uid).set(data);
   }
  registerUser(signData: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.createUserWithEmailAndPassword(signData.email, signData.password)
        .then(res => {
          if (res.user) {
            this.db.collection('users').doc(res.user.uid).set({
              uid: res.user.uid,
              email: signData.email,
              password: signData.password,
              name:signData.name,
              type: signData.type,
            
            });
            resolve(res.user);
          }
        })
        .catch(err => {
          reject(`login failed ${err}`)
        });
    });
  }
  
  updateUser(data:any,id:any){
    return this.db.collection('users').doc(id).set(data);
   
  }
  public login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            this.adb.collection('users').doc(res.user.uid).get().subscribe((user: any) => {
             
              localStorage.setItem('type',user.data().type)
              localStorage.setItem('uid',res.user.uid)
              this.authState.next(true);
              resolve(user.data()) ;
              }, error => {
                reject(error);
              })
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  
  getToken() {

  	return !!localStorage.type
  }
  logout() {
      this.fireAuth.signOut();
      localStorage.removeItem('type')
      localStorage.removeItem('uid')
      this.router.navigate(['pre-login']);
      this.authState.next(false);
    
  }
}
