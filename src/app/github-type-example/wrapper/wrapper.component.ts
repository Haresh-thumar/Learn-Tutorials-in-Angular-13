import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Input() ListTemplate: TemplateRef<any>;
  @Input() newUpdate: {};

  constructor() { }

  ngOnInit(): void {
  }

}
