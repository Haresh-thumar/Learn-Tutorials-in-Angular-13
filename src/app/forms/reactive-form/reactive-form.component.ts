import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators, FormArray } from '@angular/forms'
import { Formsignup } from './formsignup';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // constructor(){}

  // ngOnInit() {
  // }

  /*=====================================================================================
                            simple form with normal validation
  =====================================================================================*/
  // signupForm: FormGroup;
  // firstname: string = '';
  // lastname: string = '';
  // email: string = '';
  // password: string = '';

  // constructor(private frmbuilder: FormBuilder) {
  //   this.signupForm = this.frmbuilder.group({
  //     fname: ['', Validators.required],
  //     lname: ['', Validators.required, Validators.maxLength(10)],
  //     emailid: ['', Validators.required, Validators.email],
  //     userpassword: ['', Validators.required],
  //   });
  // }

  // ngOnInit() {
  // }

  // postData(signupForm: any) {
  //   console.log(signupForm.controls);
  // }


  /*=====================================================================================
                             simple form with normal validation
   =====================================================================================*/
  //   contactForm = new FormGroup({
  //     firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
  //     lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
  //     email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  //     gender: new FormControl('', [Validators.required]),
  //     isMarried: new FormControl('', [Validators.required]),
  //     country: new FormControl('', [Validators.required]),
  //     address: new FormGroup({
  //       city: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
  //       street: new FormControl('', [Validators.required]),
  //       pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]{6}")])
  //     })
  //   })

  //   get firstname() {
  //     return this.contactForm.get('firstname');
  //   }

  //   get lastname() {
  //     return this.contactForm.get('lastname');
  //   }

  //   get email() {
  //     return this.contactForm.get('email');
  //   }

  //   get gender() {
  //     return this.contactForm.get('gender');
  //   }

  //   get isMarried() {
  //     return this.contactForm.get('isMarried');
  //   }

  //   get country() {
  //     return this.contactForm.get('country');
  //   }

  //   get city() {
  //     return this.contactForm.get("address").get('city');
  //   }

  //   get street() {
  //     return this.contactForm.get("address").get('street');
  //   }

  //   get pincode() {
  //     return this.contactForm.get("address").get('pincode');
  //   }

  //   countryList: country[] = [
  //     new country("1", "Afghanistan"),
  //     new country('2', 'Australia'),
  //     new country('3', 'Brazil'),
  //     new country('4', 'China'),
  //     new country('5', 'France'),
  //     new country('6', 'India'),
  //     new country('7', 'Italy'),
  //     new country('8', 'Russia'),
  //     new country('9', 'Thailand'),
  //     new country('10', 'USA'),
  //   ];

  //   onSubmit() {
  //     console.log(this.contactForm.value);
  //   }

  //   resetForm() {
  //     this.contactForm.reset();
  //   }

  // }

  // export class contact {
  //   firstname: string;
  //   lastname: string;
  //   gender: string;
  //   isMarried: boolean;
  //   country: string;
  //   address: {
  //     city: string;
  //     street: string;
  //     pincode: string;
  //   }
  // }

  // export class country {
  //   id: string;
  //   name: string;

  //   constructor(id: string, name: string) {
  //     this.id = id;
  //     this.name = name;
  //   }
  // }


  /*=====================================================================================
                         Reactive form with postData() & reserData()
   =====================================================================================*/

  signupForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  Password: string = '';
  Age: number;

  constructor(private frmbuilder: FormBuilder) {
    /*------------ add form validation ------------*/
    this.signupForm = frmbuilder.group({
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      emailid: ['', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      pass: ['', Validators.required],
      age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
    });
  }

  ngOnInit() {
    /*==================== check value single form-control ====================*/
    // this.signupForm.get('fname').valueChanges.subscribe(uname => {
    //     console.log('fname changed : ', uname);
    // });

    /*==================== check value all form-control ====================*/
    // this.signupForm.valueChanges.subscribe((x: Formsignup) => {
    //   console.log("fname changed", x.fname);
    //   console.log("lname changed", x.lname);
    //   console.log("emailid changed", x.emailid);
    //   console.log("pass changed", x.pass);
    //   console.log("age changed", x.age);
    // });

    /*==================== check status single form-control ====================*/
    // this.signupForm.get('fname').statusChanges.subscribe(uname => {
    //   console.log("status changed : ", uname);
    // });

    /*==================== check status all form-control ====================*/
    // this.signupForm.statusChanges.subscribe(uname => {
    //   console.log("status changed : ", uname);
    // });

    /*==================== FormArray ==================*/
    const arr = new FormArray([
      new FormControl(),
      new FormControl(),
    ]);
    arr.patchValue(['haresh']);
    console.log(arr.value);
    console.log(arr.status);

  }

  /*------------ for data store ------------*/
  postData() {
    this.FirstName = this.signupForm.get('fname').value;
    this.LastName = this.signupForm.get('lname').value;
    this.Email = this.signupForm.get('emailid').value;
    this.Password = this.signupForm.get('pass').value;
    this.Age = this.signupForm.get('age').value;
    console.log([this.FirstName, this.LastName, this.Email, this.Password, this.Age]);
    console.log(this.signupForm.value);
  }

  /*------------ form reset ------------*/
  resetForm() {
    this.signupForm.reset();
  }

  /*------------ Set Value in form ------------*/
  // fillData(){
  //   this.signupForm.setValue({
  //       "fname" : "Rutvik",
  //       "lname" : "dhaduk",
  //       "emailid" : "rutvik@gmail.com",
  //       "pass" : "rutvik@123",
  //       "age" : 22
  //   });
  // }

  /*------------ patch Value in form ------------*/
  fillData() {
    this.signupForm.patchValue({
      fname: "Rutvik",
      lname: 'dhaduk',
      pass: 'rutvik@123',
      age: 22
    })
  }


}
