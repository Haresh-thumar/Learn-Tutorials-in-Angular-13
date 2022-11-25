import { ChangeColorDirective } from './../change-color.directive';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) childCmp: ChildComponent;
  @ViewChild(ChangeColorDirective) changeColorDirective: ChangeColorDirective;
  @ViewChild('name') elname: ElementRef;
  @ViewChild('state') elstate: ElementRef;

  constructor() { }

  /*------------ @view-child decorator ------------*/
  increase() {
    this.childCmp.increasebyOne();
  }

  decrease() {
    this.childCmp.decreasebyOne();
  }


  /*------------ @view-child using custom directive ------------*/
  changecolor(color: string) {
    this.changeColorDirective.change(color);
  }


  /*------------ @view-child using Template Variables ------------*/
  ngAfterViewInit(): void {
    this.elname.nativeElement.style.backgroundColor = "black";
    this.elname.nativeElement.style.color = "white";
    this.elstate.nativeElement.style.backgroundColor = "cyan";
    this.elstate.nativeElement.style.color = "red";
  }



}
