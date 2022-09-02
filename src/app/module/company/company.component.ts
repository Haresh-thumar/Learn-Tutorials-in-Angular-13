import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  template: `
    <h2>Welcome to Company Home</h2>
    <a [routerLink]="[ 'company-list' ]" routerLinkActive="active">View Company List</a>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
