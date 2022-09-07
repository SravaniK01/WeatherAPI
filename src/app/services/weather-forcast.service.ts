import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Period, Periods } from '../interfaces/properties';

@Injectable({
  providedIn: 'root'
})
export class WeatherForcastService {

  constructor(private httpClient : HttpClient) { }
 getForecast() : Observable<Periods>{
  let response = this.httpClient.get<Periods>(environment.apiEndpoint);
 
  return response;
 }
  
}
