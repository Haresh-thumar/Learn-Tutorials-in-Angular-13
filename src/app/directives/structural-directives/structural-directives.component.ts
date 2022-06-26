import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  /*=====================================================
                          *ng-if
  =====================================================*/
  /*--------- Example-1 ---------*/
  selectedSkill = '';

  handleEvent(event: any) {
    const value = event.target.value;
    this.selectedSkill = value;
  }


  /*--------- Example-2 ---------*/
  data: string = '';
  isDataArrived: boolean = false;

  constructor() {
    this.getDat();
  }

  ngOnInit(): void {
  }

  getDat() {
    setTimeout(() => {
      this.data = 'Data Comming From Server.';
      this.isDataArrived = true;
    }, 3000)
  }



  /*=====================================================
                        *ng-for
  =====================================================*/
  /*------------ Example-1 -----------*/
  haresh: string[] = ["haresh", "rushabh", "rutvik", "parth", "rajan", "rajesh"];


  /*------------ Example-2 -----------*/
  users = [
    {
      name: 'Haresh',
      email: 'haresh@gmail.com',
      skill: 'html',
      website: 'www.haresh.com'
    },
    {
      name: 'Rutvik',
      email: 'rutvik@gmail.com',
      skill: 'css',
      website: 'www.rutvik.com'
    },
    {
      name: 'Rushabh',
      email: 'rushabh@gmail.com',
      skill: 'angular',
      website: 'www.rushabh.com'
    },
    {
      name: 'Rajan',
      email: 'rajan@gmail.com',
      skill: 'c#',
      website: 'www.rajan.com'
    }
  ]


  showAndEdit() {

  }





}

