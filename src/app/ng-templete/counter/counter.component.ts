import { Component, OnInit } from '@angular/core';

let times = 0;


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  cur = 0;

  constructor() {
    times += 1;
    this.cur = times;
  }

  ngOnInit(): void {
  }

}
