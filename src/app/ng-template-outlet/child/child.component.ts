import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

}
