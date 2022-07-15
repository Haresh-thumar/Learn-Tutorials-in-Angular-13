import { Component, Input, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() bg = 'primary';
  // @Input() lable = '';
  // @Input() hint = '';
  // @Output() changeEvt = new EventEmitter<any>();

  /*=====================================================================================
                      use multi component projection using Templateref
  ======================================================================================*/
  // show: boolean = true;

  // toggle() {
  //   this.show = !this.show;
  // }


  /*=====================================================================================
              use multi component projection with radio button & Template
  ======================================================================================*/
  @Input() template: TemplateRef<any>;
  @Input() values: string[];
  @Input() name: string;


  constructor() { }

  ngOnInit(): void {
  }


}
