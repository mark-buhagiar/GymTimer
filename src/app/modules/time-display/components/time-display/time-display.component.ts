import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
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
