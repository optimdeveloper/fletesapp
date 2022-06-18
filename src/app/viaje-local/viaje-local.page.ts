import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var google;
@Component({
  selector: 'app-viaje-local',
  templateUrl: './viaje-local.page.html',
  styleUrls: ['./viaje-local.page.scss'],
})
export class ViajeLocalPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  autocompleteService: any;
  placesService: any;
  directionsService: any
  query: string = '';
  query1: string = '';
  places: any = [];
  places1: any = [];
  marker: any
  marker1: any
  lc1: any
  lc2: any
  constructor(public zone: NgZone,private router:Router) {
    this.autocompleteService = new google.maps.places.AutocompleteService();
    this.directionsService = new google.maps.DirectionsService();
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loadMap()
  }
  gotoCarga(){
    this.router.navigate(['/carga-one'])
  }
  searchPlace() {
    if (this.query.length > 0) {
      let config = {
        types: ['geocode'],
        input: this.query
      }
      this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
          this.places = [];
          predictions.forEach((prediction) => {
            this.places.push(prediction);
          });
        }
      });
    } else {
      this.places = [];
    }
  }
  searchPlace1() {
    if (this.query1.length > 0) {
      let config = {
        types: ['geocode'],
        input: this.query1
      }
      this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
          this.places1 = [];
          predictions.forEach((prediction) => {
            this.places1.push(prediction);
          });
        }
      });
    } else {
      this.places1 = [];
    }
  }
  selectPlace(place) {
    this.query = place.description;
    this.places = [];
    let myLocation = {
      name: "",
      lat: "",
      lng: ""
    };
    myLocation.name = place.name;
    console.log('place', place.place_id);
    this.placesService.getDetails({ placeId: place.place_id }, (details) => {
      this.zone.run(() => {
        myLocation.name = (details.formatted_address && details.formatted_address.length) ? details.formatted_address : details.name;
        myLocation.lat = details.geometry.location.lat();
        myLocation.lng = details.geometry.location.lng();
        console.log(myLocation);
        this.lc1 = { lat: myLocation.lat, lng: myLocation.lng };
        let pos = new google.maps.LatLng(Number(this.lc1.lat), Number(this.lc1.lng));
        this.map.setCenter(this.lc1);
        this.marker.setPosition(pos);
      });
    });
  }
  selectPlace1(place) {
    this.query1 = place.description;
    this.places1 = [];
    let myLocation = {
      name: "",
      lat: "",
      lng: ""
    };
    myLocation.name = place.name;
    console.log('place', place.place_id);
    this.placesService.getDetails({ placeId: place.place_id }, (details) => {
      this.zone.run(() => {
        myLocation.name = (details.formatted_address && details.formatted_address.length) ? details.formatted_address : details.name;
        myLocation.lat = details.geometry.location.lat();
        myLocation.lng = details.geometry.location.lng();
        console.log(myLocation);
        this.lc2 = { lat: myLocation.lat, lng: myLocation.lng };
        let pos = new google.maps.LatLng(Number(this.lc2.lat), Number(this.lc2.lng));
        this.marker1.setPosition(pos);

        //trace route
        let directionsDisplay = new google.maps.DirectionsRenderer({
          map: this.map,
          polylineOptions: {
            strokeColor: '#F95424',
            strokeOpacity: 1.0,
            strokeWeight: 6
          },
          markerOptions: {
            opacity: 0,
            clickable: false,
            position: new google.maps.LatLng(Number(this.lc1.lat), Number(this.lc1.lng))
            //position: new google.maps.LatLng(Number(this.orderLocation.lat), Number(this.orderLocation.lng))
          }
        });
        this.directionsService.route({
          origin: new google.maps.LatLng(Number(this.lc1.lat), Number(this.lc1.lng)),
          destination: new google.maps.LatLng(Number(this.lc2.lat), Number(this.lc2.lng)),
          travelMode: google.maps.TravelMode.DRIVING
        }, function (result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            //directionsDisplay.setDirections(result);
            // component.directionsDisplay = directionsDisplay;
          }
        });
      });
    });

  }
  loadMap() {
    const image1 =
    "https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-location-meeting-photo3ideastudio-solid-photo3ideastudio.png";
    const image2 =
    "https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-location-meeting-photo3ideastudio-lineal-color-photo3ideastudio.png";
    let latLng = new google.maps.LatLng(45.56801669525145, -73.52775100202595);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    }
    this.directionsService = new google.maps.DirectionsService();
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    this.placesService = new google.maps.places.PlacesService(this.map);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: false,
      snippet:"A",
      
    });
    /*icon: {
      url: "./assets/img/user.jpg",
      size:{
        width:30,
        height:30
      }, // scaled size
   },*/
    const svgMarker = {
      path:"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "orange",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };
    let marker1 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: false,
      snippet:"B",
      icon: svgMarker
    });

    this.marker = marker
    this.marker1 = marker1
  }
}
