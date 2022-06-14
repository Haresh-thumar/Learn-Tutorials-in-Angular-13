import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-example',
  templateUrl: './practice-example.component.html',
  styleUrls: ['./practice-example.component.scss']
})
export class PracticeExampleComponent implements OnInit {

  //==================== example-1 =====================//
  text = '';
  textSize = 10;
  textCls = '';

  setText(event: any) {
    const val = event.target.value;
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

  setRangeSize(event: any) {
    const val = event.target.value;
    this.textSize = val;
  }

  setColor(event: any) {
    const val = event.target.value;
    this.textCls = val;
  }



  //==================== example-2 =====================//
  person: any = {
    name: '',
    email: '',
    cmp: '',
    sal: '',
  }

  isDataSubmitted = false;

  setValue(event: any) {
    const keyName = event.target.name;
    const value = event.target.value;
    this.person[keyName] = value;
  }

  submitData() {
    for (let key in this.person) {
      const val = this.person[key];
      if (val.trim().length === 0) {
        alert("field must not be blank");
        return;
      }
    }

    this.isDataSubmitted = true;
    console.log(this.person);
  }

  resetForm() {
    this.person = {
      name: '',
      email: '',
      cmp: '',
      sal: '',
    }
    this.isDataSubmitted = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
