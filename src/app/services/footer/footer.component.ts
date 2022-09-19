import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  users: any;

  constructor(private userData: UserDataService) {
    this.userData.getUsers().subscribe({
      next: (data: any) => {
        console.warn("data is", data);
        this.users = data;
      },
      error: err => {
        console.log("something went wrong", err);
      }
    }
    )
  }

  ngOnInit(): void {
  }

}
