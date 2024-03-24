import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';
@Component({
  selector: 'app-weathercomponent',
  templateUrl: './weathercomponent.component.html',
  styleUrl: './weathercomponent.component.css'
})
export class WeathercomponentComponent {

  ville = "";
  data : any; 
  constructor( private weatherServer : WeatherserviceService ){
  }

  ngOnInit() {
    
  }

  Searchweather(event : Event){
    event.preventDefault(); 
    console.log("version finale")
    this.weatherServer.getInformation(this.ville).subscribe(response => {
     this.data = response;
     this.ville = ''
   })
   console.log(this.data)
   console.log("test test !!")
  }
}
