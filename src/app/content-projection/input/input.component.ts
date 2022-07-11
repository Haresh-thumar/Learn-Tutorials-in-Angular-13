import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() bg = 'primary';
  @Input() lable = '';
  @Input() hint = '';
  @Output() changeEvt = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


}
