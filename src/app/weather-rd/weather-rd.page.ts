import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Weather {
  temperature: number;
  description: string;
}

@Component({
  selector: 'app-weather-rd',
  templateUrl: './weather-rd.page.html',
  styleUrls: ['./weather-rd.page.scss'],
})
export class WeatherRDPage implements OnInit {
  weather: Weather = { temperature: 0, description: '' };

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
  }
  

  ionViewDidEnter() {
    const apiKey = '6fa6cd760b12c39340e78940cbce33e8'
    const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=santo+domingo,dominican+republic&appid=${apiKey}&units=metric`;
    
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weather = {
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
    });
  }
}