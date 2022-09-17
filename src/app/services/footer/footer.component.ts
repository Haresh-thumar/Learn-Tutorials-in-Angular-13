import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../service/user-data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  user: any[] = [];

  constructor(private userData: UserDataService) {
    console.log(".................", userData.users());
    this.user = this.userData.users();
  }

  ngOnInit(): void {
  }

}
