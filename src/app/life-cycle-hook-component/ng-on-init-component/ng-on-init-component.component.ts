import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init-component',
  templateUrl: './ng-on-init-component.component.html',
  styleUrls: ['./ng-on-init-component.component.scss']
})
export class NgOnInitComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
