import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {

  Brand1 = {name: 'Haresh Brand', year: 1995};
  Brand2 = {name: 'Levis Brand', year: 2002};
  Brand3 = {name: 'Rutvik Brand', year: 2008};

  constructor() { }

  ngOnInit(): void {
  }

}
