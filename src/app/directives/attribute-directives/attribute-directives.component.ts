import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  /*==============================================
                       ng-style
  ===============================================*/
  public myStyle = {
    width: '100px',
    height: '150px',
    color: 'red',
    background: 'yellow',
  }

  addStyle() {
    this.myStyle.color = 'yellow';
    this.myStyle.background = 'red';
    this.myStyle['border'] = '2px solid black';
    setTimeout(() => {
      this.myStyle.color = 'red';
      this.myStyle.background = 'yellow';
      this.myStyle['border'] = 'none';
    }, 3000)
  }


  /*==============================================
                       ng-class
  ===============================================*/
  myClasses = {
    box: true,
    border: false,
    circle: false
  }
  // changeShape() {
  //   this.myClasses.border = true;
  //   this.myClasses.circle = true;
  //   setTimeout(() => {
  //     this.myClasses.border = false;
  //     this.myClasses.circle = false;
  //   }, 3000)
  // }

  /*--- or ---*/

  changeShape() {
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.circle = !this.myClasses.circle;
    setTimeout(() => {
      this.myClasses.border = false;
      this.myClasses.circle = false;
    }, 3000)
  }








  constructor() { }

  ngOnInit(): void {
  }

}
