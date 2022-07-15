import { Component, OnInit } from '@angular/core';

// let times: number = 0;

@Component({
  selector: 'app-content-counter',
  templateUrl: './content-counter.component.html',
  styleUrls: ['./content-counter.component.scss']
})
export class ContentCounterComponent implements OnInit {

  // num: number = 0;

  constructor() {
    // times += 1;
    // this.num = times;
  }

  ngOnInit(): void {
  }

}
