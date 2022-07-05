import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input-output',
  templateUrl: './parent-input-output.component.html',
  styleUrls: ['./parent-input-output.component.scss']
})
export class ParentInputOutputComponent implements OnInit {

  game:string[] = [];
  deletedGame:string;

  addGame(gameItem){
    this.game.push(gameItem);
  }

  removeGame(indexGame) {
    this.deletedGame = this.game[indexGame];
    this.game = this.game.filter((value, index) => index != indexGame);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
