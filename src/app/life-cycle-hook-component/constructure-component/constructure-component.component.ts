import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructure-component',
  templateUrl: './constructure-component.component.html',
  styleUrls: ['./constructure-component.component.scss']
})
export class ConstructureComponentComponent implements OnInit {

  @Input() itype: string;
  public isEmail: boolean;

  constructor(@Attribute('itype') t: string) {
    this.isEmail = t.includes("email");
  }

  ngOnInit(): void {
  }

}
