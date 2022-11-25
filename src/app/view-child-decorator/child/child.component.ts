import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  message: string = '';
  count: number = 0;

  constructor() { }
  ngOnInit(): void {
  }

  increasebyOne() {
    this.count = this.count + 1;
    this.message = "counter : " + this.count;
  }

  decreasebyOne() {
    this.count = this.count - 1;
    this.message = "counter : " + this.count;
  }

}
