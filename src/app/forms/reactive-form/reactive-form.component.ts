import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  ngOnInit() {
  }

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
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.email, Validators.required]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required])
    })
  })

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get("address").get('city');
  }

  get street() {
    return this.contactForm.get("address").get('street');
  }

  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }

  countryList: country[] = [
    new country("1", "Afghanistan"),
    new country('2', 'Australia'),
    new country('3', 'Brazil'),
    new country('4', 'China'),
    new country('5', 'France'),
    new country('6', 'India'),
    new country('7', 'Italy'),
    new country('8', 'Russia'),
    new country('9', 'Thailand'),
    new country('10', 'USA'),
  ];

  onSubmit() {
    console.log(this.contactForm.value);
  }

}

export class contact {
  firstname: string;
  lastname: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}


export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
