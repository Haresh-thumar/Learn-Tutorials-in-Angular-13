import { Component, OnInit } from '@angular/core';
import { dir } from 'console';

@Component({
  selector: 'app-github-type-example',
  templateUrl: './github-type-example.component.html',
  styleUrls: ['./github-type-example.component.scss']
})
export class GithubTypeExampleComponent implements OnInit {

  history = [];
  update = {};

  constructor() { }

  ngOnInit(): void {
  }

  updateRepo(dur, msg) {
    this.history.push({
      name: dir,
      isFile: dir.includes('.'),
      time: new Date()
    });

    this.update = {
      name: dir,
      msg,
    };
  }



}
