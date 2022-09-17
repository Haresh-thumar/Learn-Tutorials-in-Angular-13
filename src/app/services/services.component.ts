import { Component, OnInit } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // user: any[] = [];

  constructor(private userData: UserDataService) {
    // console.log(".................", userData.users());
    // this.user = this.userData.users();
  }

  ngOnInit(): void {
  }

}
