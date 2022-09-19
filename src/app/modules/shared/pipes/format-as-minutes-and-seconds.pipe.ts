import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatAsMinutesAndSeconds' })
export class FormatAsMinutesAndSeconds implements PipeTransform {
  placeholder = '--:--:--';

  transform = (value?: number): string => {
    if (!value || value <= 0) return this.placeholder;

    const minutes = `${Math.floor(value / 60)}`.padStart(2, '0');
    const seconds = `${Math.floor(value % 60)}`.padStart(2, '0');
    return `--:${minutes}:${seconds}`;
  };
}
