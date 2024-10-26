import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'station'
})
export class StationPipe implements PipeTransform {

  transform(value: any, filterText: string) {
    if (value.length == 0 || filterText == '')
      return value;
    return value.filter((s: any) => { return s.stationname.toLowerCase().includes(filterText.toLowerCase()) });
  }

}
