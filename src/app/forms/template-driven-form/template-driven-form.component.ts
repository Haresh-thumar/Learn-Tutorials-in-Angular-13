import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }

  // register(regForm: any) {
  //   const fName = regForm.controls.fName.value;
  //   const lName = regForm.controls.lName.value;
  //   const email = regForm.controls.email.value;
  //   console.log(regForm);
  // }



  /*=========================  =======================*/

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }

}


export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}


/*-------------- mobile no. & email vallidation -----------------*/
  // secondaryPhone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
  // primaryEmail: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])