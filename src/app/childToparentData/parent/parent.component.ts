import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  foods: string[] = [];

  afterFoodAdd(food) {
    this.foods.push(food);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
