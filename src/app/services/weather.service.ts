import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES, API_KEY } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  forecatsHourly;
  constructor(private http: HttpClient) {}

  getCurrentWeather(units: string = 'metric', city: string = '3936452') {
    const url = `${URL_SERVICES}/weather?id=${city}&units=${units}&lang=es&appid=${API_KEY}`;
    return this.http.get(url);
  }

  getForecasHourlytWeather(units: string = 'metric', city: string = '3936452') {
    const url = `${URL_SERVICES}/forecast?id=${city}&units=${units}&appid=${API_KEY}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        this.forecatsHourly = data.list.filter(
          (hourly) => hourly.dt_txt.indexOf(this.getCurrentDate()) >= 0
        );
        return this.forecatsHourly;
      })
    );
  }

  getForecasDailytWeather(units: string = 'metric', city: string = '3936452') {
    const url = `${URL_SERVICES}/forecast?id=${city}&units=${units}&appid=${API_KEY}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        this.forecatsHourly = data.list.filter(
          (hourly) => hourly.dt_txt.indexOf(this.getCurrentDate()) < 0
        );
        this.forecatsHourly = data.list.filter(
          (hourly) => hourly.dt_txt.indexOf('12:00:00') >= 0
        );
        return this.forecatsHourly;
      })
    );
  }

  getCurrentDate(): string {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
}
