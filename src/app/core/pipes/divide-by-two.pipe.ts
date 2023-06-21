import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "divideByTwo",
})
export class DivideByTwoPipe implements PipeTransform {
  transform(value: any, isActive: boolean): any {
    return isActive ? value / 2 : value
  }
}
