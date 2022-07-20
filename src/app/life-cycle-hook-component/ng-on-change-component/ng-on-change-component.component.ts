import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change-component',
  templateUrl: './ng-on-change-component.component.html',
  styleUrls: ['./ng-on-change-component.component.scss']
})
export class NgOnChangeComponentComponent implements OnChanges {

  @Input() userId: string;
  @Input() userName: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const prop = changes[propName];
      const { previousValue, currentValue, firstChange } = prop;

      console.log(`Prop name ${propName}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`Is first change ${firstChange}`);
      console.log("---------");
    }
  }

}
