import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-input-output',
  templateUrl: './child-input-output.component.html',
  styleUrls: ['./child-input-output.component.scss']
})
export class ChildInputOutputComponent implements OnInit {

  /*==================== Example-1 ===================*/
  @Input('games') gameArr: string[];
  @Output('delEvt') gameDel: EventEmitter<number> = new EventEmitter<number>();

  delGame(index: number) {
    this.gameDel.emit(index);
  }


  /*==================== Example-2 (two-way-data-binding) ===================*/
  @Input() item: number = 0;
  @Output() itemChange: EventEmitter<number> = new EventEmitter<number>();

  itemPrice: number = 10;

  disabled = true;

  decQty() {
    this.item -= 1;
    this.updateQty();
    if(this.item === 0){
      this.disabled = true;
    }
  }

  incQty() {
    this.item += 1;
    this.updateQty();
    if (this.item != 0 && this.item >= 0) {
      this.disabled = false;
    }
  }

  updateQty() {
    this.itemChange.emit(this.item);
  }





  constructor() { }

  ngOnInit(): void {
  }

}
