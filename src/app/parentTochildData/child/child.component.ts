import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  currValue: string = "";
  prevValue: string = "";

  @Input() public item: any;
  @Input() public arrList: any = [];

  constructor() {
    console.warn("child constructure is called");
  }

  ngOnChanges(changes: any): void {
    console.warn("child ngOnChange object called)", this.item, this.arrList);
    // debugger;
    for (let propertyName in changes) {
      let change = changes[propertyName];
      this.currValue = change.currentValue;
      this.prevValue = change.previousValue;
      console.warn(propertyName + "current value :-", this.currValue, "\n" + ": previous value :-", this.prevValue);
    }
  }

  ngOnInit(): void {
    console.warn("child ngOnInit Called");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck is called");
  }


}
