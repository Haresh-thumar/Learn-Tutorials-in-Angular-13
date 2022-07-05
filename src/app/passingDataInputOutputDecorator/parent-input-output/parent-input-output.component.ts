import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input-output',
  templateUrl: './parent-input-output.component.html',
  styleUrls: ['./parent-input-output.component.scss']
})
export class ParentInputOutputComponent implements OnInit {

  /*=============== Example-1 =============*/
  game:string[] = [];
  deletedGame:string;

  addGame(gameItem){
    this.game.push(gameItem);
  }

  removeGame(indexGame) {
    this.deletedGame = this.game[indexGame];
    this.game = this.game.filter((index) => index != indexGame);
  }


  /*=============== Example-2 (two-way-data-binding) =============*/
  data:number = 0;

  addToQty(val){
    this.data = val;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
