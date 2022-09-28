import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-component',
  templateUrl: './unit-component.component.html',
  styleUrls: ['./unit-component.component.scss']
})
export class UnitComponentComponent implements OnInit {

  componentName = "Unit-Testing";

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    return 100;
  }

  total(a, b) {
    return a + b;
  }

}
