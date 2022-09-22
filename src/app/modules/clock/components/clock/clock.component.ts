import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Size } from 'src/app/constants/sizes';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  @Input() fontSize: Size = Size.LARGE;

  timeValue: string;

  constructor() {
    this.timeValue = this.getTime();
  }

  ngOnInit(): void {
    this.setupClock();
  }

  setupClock() {
    setInterval(() => {
      this.timeValue = this.getTime();
    }, 1000);
  }

  getTime = () => DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
}
