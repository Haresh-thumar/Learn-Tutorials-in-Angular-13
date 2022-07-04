import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() foodEvt: EventEmitter<string> = new EventEmitter<string>();
  @Output() heroObj: EventEmitter<any> = new EventEmitter<any>();

  /*================= Example-1 =================*/
  // print Array child to parent component
  addToFood(value) {
    this.foodEvt.emit(value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
