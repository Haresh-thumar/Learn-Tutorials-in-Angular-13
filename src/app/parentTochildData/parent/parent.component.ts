import { PropertyRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // object print in child component
  studentDetail = {
    studentName: "Haresh Thumar",
    studentAge: 25,
    studentMobile: 1234567890
  }

  updateobj = {
    studentName: "rd",
    studentAge: 22,
    studentMobile: 9574475367
  }


  // Array print in child component
  myArr: any = ["Angular", "javaScript", "typeScript"];


  constructor() {
    console.warn("parent constructure is called");
  }

  getData() {
    this.studentDetail = this.updateobj;
  }

  getAry() {
    this.myArr.push("HTML");
  };

  ngOnInit(): void {
    console.warn("parent ngOnInit is called");
  }

}
