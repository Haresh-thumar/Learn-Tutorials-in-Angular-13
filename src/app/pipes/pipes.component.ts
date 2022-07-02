import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  /*================== Example-1 ==================*/
  upCase = 'uppercase text';
  lwCase = 'lowercase text';
  ttlCase = 'titlecase text';


  /*================== Example-2 ==================*/
  today = new Date();


  /*================== Example-3 ==================*/
  slcText = 'slice text';
  fullName = "myNameIsHaresh";


  /*================== Example-4 ==================*/
  num = 223.15;
  perc = 1.245;


  /*================== Example-5 ==================*/
  amount = 300;


  /*================== Example-6 ==================*/
  person: any = {
    name: 'haresh',
    age: 30,
    sal: 45000
  }
  names = ["haresh", "rushabh", "parth", "rajan", "rajesh"];


  /*================== Example-7 ==================*/
  jsonValue: any = {
    name: 'haresh',
    age: 30,
    sal: 45000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
