import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators, FormArray, FormGroupDirective } from '@angular/forms'
import { Formsignup } from './formsignup';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // constructor() { }

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

  // signupForm: FormGroup;
  // FirstName: string = '';
  // LastName: string = '';
  // Email: string = '';
  // Password: string = '';
  // Age: number;

  // constructor(private frmbuilder: FormBuilder) {
  /*------------ add form validation ------------*/
  //   this.signupForm = frmbuilder.group({
  //     fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
  //     lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
  //     emailid: ['', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  //     pass: ['', Validators.required],
  //     age: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
  //   });
  // }

  // ngOnInit() {
  /*==================== check value single form-control ===================*/
  // this.signupForm.get('fname').valueChanges.subscribe(uname => {
  //     console.log('fname changed : ', uname);
  // });

  /*==================== check value all form-control ======================*/
  // this.signupForm.valueChanges.subscribe((x: Formsignup) => {
  //   console.log("fname changed", x.fname);
  //   console.log("lname changed", x.lname);
  //   console.log("emailid changed", x.emailid);
  //   console.log("pass changed", x.pass);
  //   console.log("age changed", x.age);
  // });

  /*==================== check status single form-control ==================*/
  // this.signupForm.get('fname').statusChanges.subscribe(uname => {
  //   console.log("status changed : ", uname);
  // });

  /*==================== check status all form-control =====================*/
  // this.signupForm.statusChanges.subscribe(uname => {
  //   console.log("status changed : ", uname);
  // });

  /*============================== FormArray ===============================*/
  //   const arr = new FormArray([
  //     new FormControl(),
  //     new FormControl(),
  //   ]);
  //   arr.patchValue(['haresh']);
  //   console.log(arr.value);
  //   console.log(arr.status);

  // }

  /*------------ for data store ------------*/
  // postData() {
  //   this.FirstName = this.signupForm.get('fname').value;
  //   this.LastName = this.signupForm.get('lname').value;
  //   this.Email = this.signupForm.get('emailid').value;
  //   this.Password = this.signupForm.get('pass').value;
  //   this.Age = this.signupForm.get('age').value;
  //   console.log([this.FirstName, this.LastName, this.Email, this.Password, this.Age]);
  //   console.log(this.signupForm.value);
  // }

  /*------------ form reset ------------*/
  // resetForm() {
  //   this.signupForm.reset();
  // }

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
  // fillData() {
  //   this.signupForm.patchValue({
  //     fname: "Rutvik",
  //     lname: 'dhaduk',
  //     pass: 'rutvik@123',
  //     age: 22
  //   })
  // }



  /*=====================================================================================
                        Reactive form Add Dynamic New FormControl
  =====================================================================================*/
  // FormGroup: FormGroup;
  // dynamicForm: any;

  // constructor() { }

  // ngOnInit(): void {
  //   this.dynamicForm = new FormGroup({
  //     contactNo: new FormArray([
  //       new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]),
  //     ]),
  //   });
  // }

  // onSubmit() {
  //   console.log(this.dynamicForm.get('contactNo').value);
  //   console.log(this.dynamicForm.value);
  // }

  // addContactNo() {
  //   this.dynamicForm.get('contactNo').push(new FormControl());
  // }

  // setPreset() {
  //   this.dynamicForm.get('contactNo').patchValue(['1234567890', '0987654321']);
  // }

  // removeContact(i) {
  //   console.log("index", i)
  //   // this.dynamicForm.controls.contactNo.controls.splice(i, 1);   // for remove only value input inputbox
  //   // this.dynamicForm.controls.contactNo.value.splice(i, 1);   // for remove input control
  //   this.dynamicForm.controls.contactNo.removeAt(i, 1);   // for remove input control & value both
  // }




  /*=====================================================================================
                  Reactive form Add new Dynamic Multiple row FormControl
  =====================================================================================*/
  // HareshFormGroup: FormGroup;
  // TotalRow: number;

  // constructor(private _fb: FormBuilder) { }

  // ngOnInit() {
  //   this.HareshFormGroup = this._fb.group({
  //     itemRows: this._fb.array([this.initItemRow()]),
  //   });
  // }

  // initItemRow() {
  //   return this._fb.group({
  //     Name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
  //     RollNo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^((\\+91-?)|0)?[0-9]{5}$")]],
  //     Class: ['', [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]],
  //     MobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  //   })
  // }

  // getControls() {
  //   return (this.HareshFormGroup.get('itemRows') as FormArray).controls;
  // }

  // addNewRow() {
  //   const control = <FormArray>this.HareshFormGroup.controls['itemRows'] as FormArray;
  //   control.push(this.initItemRow());
  // }

  // deleteRow(index: number) {
  //   const control = <FormArray>this.HareshFormGroup.controls['itemRows'] as FormArray;
  //   this.TotalRow = control.value.length;
  //   if (control != null) {
  //     this.TotalRow = control.value.length;
  //   }
  //   if (this.TotalRow > 1) {
  //     control.removeAt(index);
  //   }
  //   else {
  //     alert('one record is mendedary...');
  //   }
  // }




  /*=====================================================================================
                   Reactive form Add new Dynamic Multiple row FormControl
  =====================================================================================*/
  regiForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  DOB: Date = null;
  Gender: string = '';
  Blog: string = '';
  Email: string = '';
  IsAccepted: number = 0;

  constructor(private fb:FormBuilder) {
    this.regiForm = fb.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required],
      'Address' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'DOB' : [null, Validators.required],
      'Gender' : [null, Validators.required],
      'Playlist' : [null, Validators.required],
      'Email' : [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted' : [null,Validators.required],
    })
   }
   
   onChanage(event: any){
    if(event.checked == true){
      this.IsAccepted = 1;
    }else {
      this.IsAccepted = 0;
    }
   }

   onFormSubmit(form:any){
    console.log(form);
  }

  foods: Food[] = [
    {value: 'Angular2', viewValue: 'Angular 2'},
    {value: 'Angular3', viewValue: 'Angular 3'},
    {value: 'Angular4', viewValue: 'Angular 4'},
    {value: 'Angular5', viewValue: 'Angular 5'},
    {value: 'Angular6', viewValue: 'Angular 6'},
    {value: 'Angular7', viewValue: 'Angular 7'},
    {value: 'Angular8', viewValue: 'Angular 8'},
    {value: 'Angular9', viewValue: 'Angular 9'},
  ];

  ngOnInit() {
  }
}

  

interface Food {
  value: string;
  viewValue: string;
}