import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


interface dataType {
  name: string;
  id: number;
  indian: boolean;
  address: any;
}


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url:string = 'http://localhost:3000/users';

  constructor(private api:HttpClient) { }

  getUsers(){
    return this.api.get(this.url);
  }

  saveUsers(data:any){
    return this.api.post(this.url, data);
  }

  // users(){
  //   return  [
  //     {name: 'anil', age: 28, email: 'anil@test.com'},
  //     {name: 'haresh', age: 25, email: 'haresh@test.com'},
  //     {name: 'rutvik', age: 23, email: 'rutvik@test.com'},
  //     {name: 'sam', age: 34, email: 'sam@test.com'},
  //     {name: 'peter', age: 25, email: 'peter@test.com'},
  //   ]
  // }

  getData(){
    const data:dataType = {
      name: "haresh thumar",
      id: 100,
      indian: true,
      address: "43, noida, up"
    }

    return data;
  }

}
