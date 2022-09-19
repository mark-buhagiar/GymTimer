import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iffNotNullOrUndefined',
})
export class IffNotNullOrUndefinedPipe implements PipeTransform {
  transform = (value: any): number => (!!value ? value : 0);
}
