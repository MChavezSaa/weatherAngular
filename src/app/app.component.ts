import { Component, OnInit,  } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService]
})
export class AppComponent implements OnInit{
  title = 'weather';
  weather=undefined;
  Ciudad: string;
  Latitud:string;
  Longitud:string;
  Humedad:string;
  Presión:string;
  Temperatura:string;
  Descripción: string;
 
  constructor(private weatherService: WeatherService){}
 
  ngOnInit(){
    this.weatherService.getWeather('Chillan','CL')
    .subscribe(res=>{
      console.log(res);
      this.weather=res;
   },
    err => console.log(err)
   )
  }
}