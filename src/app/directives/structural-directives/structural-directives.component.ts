import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  /*=========================================================================================================
                                                        *ng-if
  =========================================================================================================*/
  /*--------- Example-1 ---------*/
  selectedSkill = '';

  handleEvent(event: any) {
    const value = event.target.value;
    this.selectedSkill = value;
  }


  /*--------- Example-2 ---------*/
  data: string = '';
  isDataArrived: boolean = false;

  // constructor() {
  //   this.getDat();
  // }

  ngOnInit(): void {
  }

  getDat() {
    setTimeout(() => {
      this.data = 'Data Comming From Server.';
      this.isDataArrived = true;
    }, 3000)
  }

  /*--------- Example-3,4,5,7 ---------*/
  isValid: boolean = false;
  //  isValid:boolean = true;
  thenblock: any;

  changeValue(valid: any) {
    this.isValid = valid;
  }

  /*--------- Example-6 ---------*/
  userLoggedIn: boolean = true;
  isLoggedIn: boolean = true;

  clicksome(data: any) {
    this.isLoggedIn = data;
  }

  onCreateBlock() {
    this.isValid = true;
  }



  /*=========================================================================================================
                                                    *ng-for
  =========================================================================================================*/
  /*------------ Example-1 -----------*/
  haresh: string[] = ["haresh", "rushabh", "rutvik", "parth", "rajan", "rajesh"];


  /*------------ Example-2 -----------*/
  users = [
    {
      name: 'Haresh',
      email: 'haresh@gmail.com',
      skill: 'html',
      website: 'www.haresh.in'
    },
    {
      name: 'Rutvik',
      email: 'rutvik@gmail.com',
      skill: 'css',
      website: 'www.rutvik.net'
    },
    {
      name: 'Rushabh',
      email: 'rushabh@gmail.com',
      skill: 'angular',
      website: 'www.rushabh.java'
    },
    {
      name: 'Rajan',
      email: 'rajan@gmail.com',
      skill: 'c#',
      website: 'www.rajan.py'
    }
  ];

  currentUser = null;
  isDisabled = true;

  showAndEdit(indexNum) {
    this.isDisabled = true;
    this.currentUser = this.users[indexNum];
  }

  setValue(event) {
    const value = event.target.value;
    const keyName = event.target.name;
    this.currentUser[keyName] = value;
  }

  enableEditing() {
    this.isDisabled = false;
  }


  /*------------ Example-3,4,5,6,7,8,9 -----------*/
  Students: any[] = [
    {
      'name': 'Rahul Kumar'
    },
    {
      'name': 'Ajeet Kumar'
    },
    {
      'name': 'Rohan Kumar'
    },
    {
      'name': 'Mukesh Kumar'
    },
    {
      'name': 'Chandan Kumar'
    },
    {
      'name': 'Soni Kumari'
    }
  ];


  /*------------ Example-10 -----------*/
  students: any[];

  constructor() {
    this.students=[
      {
        studentId: 1,
        name: 'Chandan',
        gender: 'male',
        age: 22,
        course: 'BCA'
      },
      {
        studentId: 2,
        name: 'Rahul',
        gender: 'male',
        age: 23,
        course: 'MCA'
      },
      {
        studentId: 3,
        name: 'Rutvik',
        gender: 'male',
        age: 24,
        course: 'BSC.IT'
      },
    ];
  }

  getMoreStudents():void {
    this.students=[
      {
        studentId: 1,
        name: 'Chandan',
        gender: 'male',
        age: 22,
        course: 'BCA'
      },
      {
        studentId: 2,
        name: 'Rahul',
        gender: 'male',
        age: 23,
        course: 'MCA'
      },
      {
        studentId: 3,
        name: 'Rutvik',
        gender: 'male',
        age: 24,
        course: 'BSC.IT'
      },
      {
        studentId: 4,
        name: 'Parth',
        gender: 'male',
        age: 25,
        course: 'PGDCA'
      },
      {
        studentId: 5,
        name: 'Haresh',
        gender: 'male',
        age: 26,
        course: 'DIPLOMA'
      },
      {
        studentId: 1,
        name: 'Chandan',
        gender: 'male',
        age: 22,
        course: 'BCA'
      },
    ];
  }

  trackByStudentid(index:number, student:any): string{
    return student.studentId;
  }








  /*=========================================================================================================
                                                    *ng-for
  =========================================================================================================*/
  /*---------- Example-1 ----------*/
  name: string = 'sagar';


  /*---------- Example-2 ----------*/
  currentTab: string = '';
  openTab(tabName = '') {
    this.currentTab = tabName;
  }


  /*---------- Example-3 ----------*/
  public choose = '';
  saveValue(drp: any) {
    this.choose = drp.target.value;
  }



}

