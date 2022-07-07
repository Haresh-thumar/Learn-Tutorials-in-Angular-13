import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-templete',
  templateUrl: './ng-templete.component.html',
  styleUrls: ['./ng-templete.component.scss']
})
export class NgTempleteComponent implements OnInit {

  isLoggedIn:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
