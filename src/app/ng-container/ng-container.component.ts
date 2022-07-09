import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  clients = [
    {name: 'Haresh', paid: false, money: 0},
    {name: 'Rutvik', paid: true, money: 2500},
    {name: 'Rushabh', paid: true, money: 6500},
    {name: 'Parth', paid: false, money: 0},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
