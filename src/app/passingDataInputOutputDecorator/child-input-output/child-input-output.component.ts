import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-input-output',
  templateUrl: './child-input-output.component.html',
  styleUrls: ['./child-input-output.component.scss']
})
export class ChildInputOutputComponent implements OnInit {

  @Input('games') gameArr:string[];
  @Output('delEvt') gameDel:EventEmitter<number> = new EventEmitter<number>();

  delGame(index:number){
    this.gameDel.emit(index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
