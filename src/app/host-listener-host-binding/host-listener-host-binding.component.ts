import { Component, OnInit, HostListener, HostBinding, Directive } from '@angular/core';

@Component({
  selector: 'app-host-listener-host-binding',
  templateUrl: './host-listener-host-binding.component.html',
  styleUrls: ['./host-listener-host-binding.component.scss']
})
export class HostListenerHostBindingComponent implements OnInit {

  ngOnInit(): void {
  }

  /*================= @HostListener =================*/
  counter = 0;
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }


  /*================= @HostBinding =================*/
  appRainbowShow: boolean = false;

  @Directive({
    selector: '[appRainbow]'
  })

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    this.appRainbowShow = true;
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }



}

