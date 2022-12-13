import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.log("value")
    console.log(value)
    if (value < 10) return "0" + value;
    return "" + value;
  }

}
