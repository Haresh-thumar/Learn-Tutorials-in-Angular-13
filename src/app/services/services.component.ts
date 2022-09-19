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

  constructor(private userData: UserDataService) {

    this.userData.users().subscribe({
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
    console.warn(data);
    this.userData.saveUsers(data).subscribe((result)=>{
      this.users = result;
      console.log("save data", result);
    })
  }

  ngOnInit(): void {
  }

}
