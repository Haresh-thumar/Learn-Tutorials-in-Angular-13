import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.scss']
})
export class OneWayDataBindingComponent implements OnInit {

  //==================== Interpolation ====================//
  name: string = 'haresh';
  image: string = 'https://picsum.photos/200/300';
  show(): string {
    return this.name + " - " + 12000;
  }


  //=================== Property Binding ==================//
  fname: string = 'haresh';
  ourURL: string = 'https://picsum.photos/200/300';
  lbname: string = 'payment button';



  //==================== class Binding =====================//
  myClass = "box border";
  myBdr = false;
  bdrShow() {
    this.myBdr = true;
  }


  //==================== style Binding =====================//
  myColor = 'red';

  // isOk = true;
  isOk = false;



  //==================== event Binding =====================//
  handleClick() {
    console.log("yes i am haresh");
  }

  fName: string = '';
  handleEvent(event: any) {
    let val = event.target.value;
    this.fName = val;
  }

  lName: string = '';
  ary: string[] = [];
  handleEnterEvent(event: any) {
    let val = event.target.value;
    this.lName = val;
    console.log(this.lName);
  }

  selectedItem: string = '';
  changeItem(event: any) {
    let data = event.target.value;
    this.selectedItem = data;
    console.log(this.selectedItem);
  }










  constructor() { }

  ngOnInit(): void {
  }

}
