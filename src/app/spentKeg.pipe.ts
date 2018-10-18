import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/task.model';

@Pipe({
  name: "tapped",
  pure: false
})

export class SpentKegPipe implements PipeTransform {

  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].tapped === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
