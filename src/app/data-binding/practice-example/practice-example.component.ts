import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-example',
  templateUrl: './practice-example.component.html',
  styleUrls: ['./practice-example.component.scss']
})
export class PracticeExampleComponent implements OnInit {

  //==================== practice example-1 =====================//
  text = '';
  textSize = '10';
  textCls = '';

  setText(event: any) {
    const val = event.target.valule;
    this.text = val;
  }

  setSize(operation: string) {
    if (operation === 'inc') {
      this.textSize += 1;
    }
    else {
      this.textSize -= 1;
    }
  }
  setColor(event: any) {
    const val = event.target.value;
    this.textCls = val;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
