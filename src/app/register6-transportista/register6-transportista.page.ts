import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-register6-transportista',
  templateUrl: './register6-transportista.page.html',
  styleUrls: ['./register6-transportista.page.scss'],
})

export class Register6TransportistaPage implements OnInit {
  upload:string=''
  params:any
  signData:any={
    RFC:'',
    fiscal_obligations_pdf_url:'',
    fiscal_obligations_pdf_name:'',
  }
  name_pdf:any='PDF'
  private basePath = '/fiscal_obligations';
  constructor( private db: AngularFireDatabase, private storage: AngularFireStorage,public actionsheetCtrl: ActionSheetController,
    private router:Router) {
    this.params = this.router.getCurrentNavigation().extras.state;
    console.log(this.params)
   }

  ngOnInit() {
  }
  base(event: any) {
   
    const file = event.target.files[0];
    this.name_pdf=file.name
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
       let value= this.pushFileToStorage(file)
       console.log('value',value)
    };
  }
  
  pushFileToStorage(fileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);
  
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
         // this.FileUpload.url = downloadURL;
          //this.FileUpload.name = fileUpload.name;
          this.signData.fiscal_obligations_pdf_url=downloadURL
          this.signData.fiscal_obligations_pdf_name=fileUpload.name;
          console.log(this.signData)
          //this.saveFileData(fileUpload);
        });
      })
    ).subscribe((res)=>{
      if(res['_delegate'].bytesTransferred == res['_delegate'].totalBytes ){
        this.upload='Pdf Cargado !'
      }else{
        this.upload='Cargando...'
      }
    });
  
    return uploadTask.percentageChanges();
  }
  private saveFileData(fileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }
  next(){
    const state = {
      uid:this.params.uid,
      type:this.params.type,
      register1: this.params.register1,
      register2: this.params.register2,
      register3: this.params.register3,
      register4:this.params.register4,
      register5:this.params.register5,
      register6:this.signData,
      
    };
    this.router.navigateByUrl('/register7-transportista', { state });
  }
 
}
