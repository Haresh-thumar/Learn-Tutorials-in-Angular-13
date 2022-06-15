import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
