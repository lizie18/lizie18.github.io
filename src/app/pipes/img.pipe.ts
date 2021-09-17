import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img',
})
export class ImgPipe implements PipeTransform {
  transform(img: string): string {
    const url = `http://openweathermap.org/img/wn/${img}@2x.png`;
    return url;
  }
}
