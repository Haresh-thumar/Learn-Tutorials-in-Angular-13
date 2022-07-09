import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-templete',
  templateUrl: './ng-templete.component.html',
  styleUrls: ['./ng-templete.component.scss']
})
export class NgTempleteComponent implements OnInit {

  /*======================= Example-1,2,3,4 =======================*/
  isLoggedIn: boolean = true;



  /*======================= Example-5 =======================*/
  names: string[] = ["haresh", "rutvik", "rushabh", "rajan", "rajesh", "parth"];


  /*======================= Example-6 =======================*/
  name: string = 'h';


  /*======================= Example-7 =======================*/
  show: boolean = true;
  update() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
