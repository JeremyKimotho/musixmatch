import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mondayFinder'
})
export class MondayFinderPipe implements PipeTransform {

  transform(){
    let dateToday = new Date();
    let day = dateToday.getDay();
    let diff = dateToday.getDate() - day + (day == 0?-6 : 1);
    return new Date(dateToday.setDate(diff));
  }
}
