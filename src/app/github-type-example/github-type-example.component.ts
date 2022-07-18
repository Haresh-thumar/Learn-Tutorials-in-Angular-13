import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-type-example',
  templateUrl: './github-type-example.component.html',
  styleUrls: ['./github-type-example.component.scss']
})
export class GithubTypeExampleComponent implements OnInit {

  history: any = [];
  update: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  updateRepo(dir, msg) {
    this.history.push({
      name: dir,
      isFile: dir.includes('.'),
      time: new Date()
    });

    this.update = {
      name: dir,
      msg,
      history: this.history
    };
  }



}
