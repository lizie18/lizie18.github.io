import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  citiesList;
  constructor(private http: HttpClient) {}

  getCities() {
    return this.http
      .get('../../assets/data/city.list.min.json')
      .pipe(switchMap((data: any) => {
        this.citiesList = data.filter(city => {
          if (city.country === 'PE') { return true; }
          return false;
        });
        return this.citiesList;
      }));
  }
}
