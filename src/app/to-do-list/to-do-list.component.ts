import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todolist: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(item:string){
    this.todolist.push({id:this.todolist.length, name:item})
  }

  removeTask(id:number){
    this.todolist = this.todolist.filter(item => item.id !== id);
  }

}
