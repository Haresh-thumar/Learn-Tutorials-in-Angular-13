import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {

  Brand1 = { name: 'Haresh Brand', year: 1995 };
  Brand2 = { name: 'Levis Brand', year: 2002 };
  Brand3 = { name: 'Rutvik Brand', year: 2008 };

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('cardTemplate', null) cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate', null) listTemplate: TemplateRef<HTMLElement>;
  mode = "card"
  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];
  get template() {
    if (this.mode == "list") return this.listTemplate
    return this.cardTemplate;
  }
}
