import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  constructor(private elref: ElementRef) { }

  ngAfterViewInit(): void {
    this.elref.nativeElement.style.color = 'red';
  }

  change(changedColor: string) {
    this.elref.nativeElement.style.color = changedColor;
  }

}
