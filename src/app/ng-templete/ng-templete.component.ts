import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-templete',
  templateUrl: './ng-templete.component.html',
  styleUrls: ['./ng-templete.component.scss']
})
export class NgTempleteComponent implements OnInit {

  /*======================= Example-1 =======================*/
  isLoggedIn: boolean = false;



  constructor() { }

  ngOnInit(): void {

  }

}
