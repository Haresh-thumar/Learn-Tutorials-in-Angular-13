import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  /*------ Example-1,2 -------*/
  name = 'Angular Basic Pipe';

  /*------ Example-3 -------*/
  uname= 'title case pipe';

  /*------ Example-3 -------*/
  today = new Date();



  user = {
    name: 'haresh',
    age: 25
  }



  constructor() { }

  ngOnInit(): void {
  }

}
