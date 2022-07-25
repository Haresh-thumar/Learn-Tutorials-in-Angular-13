import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-component',
  templateUrl: './life-cycle-hook-component.component.html',
  styleUrls: ['./life-cycle-hook-component.component.scss']
})
export class LifeCycleHookComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*----------------------------------------------------------------------
            ngOnChanges Life Cycle Hook with @Attribute Decorator
  ----------------------------------------------------------------------*/
  // public uid: string;
  // public name: string;



  /*----------------------------------------------------------------------
            ngOnChanges Life Cycle Hook using json data
  ----------------------------------------------------------------------*/
  // public userIds: [3, 4, 1, 6];
  // public selectedId: number;

  // onIdSelection(newId: number) {
  //   this.selectedId = newId;
  // }



  /*----------------------------------------------------------------------
        ngOnChanges Life Cycle Hook with FirstChange (initial value)
  ----------------------------------------------------------------------*/
  // public users = [
  //   { name: "Haresh", id: 12 },
  //   { name: "Akshay", id: 21 },
  //   { name: "Rutvik", id: 28 },
  //   { name: "Nitesh", id: 8 },
  //   { name: "Rajan", id: 48 },
  // ];

  // public onNameChange(changedUser): void {
  //   const user = this.users.find(user => user.id === changedUser.id);
  //   user.name = changedUser.name;
  // }



  /*----------------------------------------------------------------------
        ngOnChanges Life Cycle Hook with Setter & Getter (Part-1)
  ----------------------------------------------------------------------*/



  /*----------------------------------------------------------------------
      ngOnChanges Life Cycle Hook with Setter & Getter (Part-2)
  ----------------------------------------------------------------------*/
  //   public departments = [
  //     { name: "CSE", depId: 23 },
  //     { name: "EEE", depId: 24 },
  //     { name: "IT", depId: 25 },
  //     { name: "ME", depId: 26 },
  //   ];

  //   public selectedDep!: Department;

  //   onDepartmentChange(depIndex: string) {
  //     this.selectedDep = this.departments[+depIndex];
  //   }
  // }

  // export class Department {
  //   name: string;
  //   depId: number;
  //   teachers?: string[];
  // }



}
