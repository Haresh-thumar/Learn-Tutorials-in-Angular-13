import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  /*================= Example-1 =================*/
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

  getObj() {
    this.studentDetail = this.updateobj;
  }


  /*================= Example-2 =================*/
  // Array print in child component
  myArr: any = ["Angular", "javaScript", "typeScript"];

  getAry() {
    this.myArr.push("HTML");
  };


  /*================= Example-3 =================*/
  data: string = "haresh";

  passValue(event) {
    let value = event.target.value;
    this.data = value;
  }


  /*================= Example-4 =================*/
  heroAry: string[] = [];

  addHeroAry(event) {
    const heroAryName = event.target.value;
    this.heroAry.push(heroAryName);
  }


  /*================= Example-5 =================*/
  heroObj: any = {};

  addHeroObj(event) {
    const heroObjName = event.target.value;
    this.heroObj = {
      name: heroObjName,
      i: Math.random()
    };
  }



  constructor() {
    console.warn("parent constructure is called");
  }

  ngOnInit(): void {
    console.warn("parent ngOnInit is called");
  }

}
