import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  users: any;

  ngOnInit(): void {
    this.fetchUser();
  }

  constructor(private userData: UserDataService) {
  }

  fetchUser() {
    this.userData.getUsers().subscribe({
      next: (data: any) => {
        console.warn("data is", data);
        this.users = data;
      },
      error: err => {
        console.log("something went wrong", err);
      }
    });
  }


  getUserFormData(data: any) {
    this.userData.saveUsers(data).subscribe((result) => {
      this.users = result;
      console.log("save data", result);
      this.fetchUser();
    })
  }

 

}
