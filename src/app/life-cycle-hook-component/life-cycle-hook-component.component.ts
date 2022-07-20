import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-component',
  templateUrl: './life-cycle-hook-component.component.html',
  styleUrls: ['./life-cycle-hook-component.component.scss']
})
export class LifeCycleHookComponentComponent implements OnInit {

  public uid: string;
  public name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
