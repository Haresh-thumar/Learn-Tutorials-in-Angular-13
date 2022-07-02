import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-reference-variable',
  templateUrl: './templete-reference-variable.component.html',
  styleUrls: ['./templete-reference-variable.component.scss']
})
export class TempleteReferenceVariableComponent implements OnInit {

  /*============ example-1 ============*/
  name = '';

  show(data) {
    this.name = data;
  }


  /*============ example-2 ============*/





  constructor() { }

  ngOnInit(): void {
  }

}
