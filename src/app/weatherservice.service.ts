import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {


  
  Url = "https://api.weatherapi.com/v1/forecast.json"; // le lien vers la page the app weather
  key = "16d3260eab204c6aa86212332241803";
  constructor(private http : HttpClient) { }

  getInformation(ville: string): Observable<any>{
   const params = {
    key: this.key,
    q: ville,
    days : 6
  };
   return this.http.get(this.Url, { params });
  }

  
  
}
