import { Component } from '@angular/core';
import { Period, Periods } from './interfaces/properties';
import { WeatherForcastService } from './services/weather-forcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  p: Periods | undefined;
  
constructor(private weatherForecast: WeatherForcastService){

}
ngOnInit(){
  this.getApiResponse()
}
  getApiResponse() : void{

    let p1;
    this.weatherForecast.getForecast().subscribe({next: (data)=> {console.log(data);
      
      this.p = data;
     
      console.log(this.p)
  }})
    
  }

}
