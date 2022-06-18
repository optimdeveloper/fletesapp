import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var google;
@Component({
  selector: 'app-home-flotilla',
  templateUrl: './home-flotilla.page.html',
  styleUrls: ['./home-flotilla.page.scss'],
})
export class HomeFlotillaPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.loadMap()
  }
  goLocal(){
    this.router.navigate(['/menu/viaje-local'])
  }
  loadMap() {
    
      let latLng = new google.maps.LatLng(45.56801669525145, -73.52775100202595);
     
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      }
     
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
      
     let marker = new google.maps.Marker({
        map:this.map,
        animation: google.maps.Animation.DROP,
        draggable:false,
        position: {lat:45.56801669525145,lng: -73.52775100202595}
      });
     
    
  }
}
