import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url: 'http://localhost:3000/users';

  constructor(private api:HttpClient) { }

  users(){
    return this.api.get(this.url);
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
}
