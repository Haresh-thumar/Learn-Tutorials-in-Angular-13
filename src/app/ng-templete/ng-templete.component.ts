import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-templete',
  templateUrl: './ng-templete.component.html',
  styleUrls: ['./ng-templete.component.scss']
})
export class NgTempleteComponent implements OnInit {

  /*======================= Example-1,2,3 =======================*/
  isLoggedIn: boolean = false;


  /*======================= Example-4 =======================*/
  name:string = 'h';


  /*======================= Example-4 =======================*/
  show:boolean = true;
  update(){
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
