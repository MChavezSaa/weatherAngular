import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string= '7c6b1454c32b1204231cb8e9c45d23a7';
  URI: string='';

  constructor(private http: HttpClient) { 
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(city: string, country: string){
    return this.http.get(`${this.URI}${city},${country}`);
  }

  
}
