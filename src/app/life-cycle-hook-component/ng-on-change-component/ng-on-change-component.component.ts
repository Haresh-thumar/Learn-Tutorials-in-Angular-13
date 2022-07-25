import { from, Observable } from 'rxjs';
import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-on-change-component',
  templateUrl: './ng-on-change-component.component.html',
  styleUrls: ['./ng-on-change-component.component.scss']
})
export class NgOnChangeComponentComponent implements OnChanges {

  constructor() { }

  ngOnChanges() { }

  /*----------------------------------------------------------------------
            ngOnChanges Life Cycle Hook with @Attribute Decorator
  ----------------------------------------------------------------------*/
  // @Input() userId: string;
  // @Input() userName: string;

  // constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName in changes) {
  //     const prop = changes[propName];
  //     const { previousValue, currentValue, firstChange } = prop;

  //     console.log(`Prop name ${propName}`);
  //     console.log(`Prev value ${previousValue}`);
  //     console.log(`Current value ${currentValue}`);
  //     console.log(`Is first change ${firstChange}`);
  //     console.log("---------");
  //   }
  // }


  /*----------------------------------------------------------------------
                ngOnChanges Life Cycle Hook using json data
  ----------------------------------------------------------------------*/
  // @Input() optId: number;
  // public user: Record<string, any>;

  // constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const id = changes['userId'];
  //   const { previousValue, currentValue } = id;

  //   if (currentValue && previousValue != currentValue) {
  //     this.setUserDetail(currentValue);
  //   }
  // }

  // private setUserDetail(value: number) {
  //   this.http(value).subscribe((res => {
  //     this.user = res;
  //   }));
  // }

  // private http(id): Observable<any> {
  //   const url = "https://jsonplaceholder.typicode.com/users/" + id;

  //   return from(fetch(url).then((res) => res.json));
  // }


  /*----------------------------------------------------------------------
      ngOnChanges Life Cycle Hook with FirstChange (initial value)
  -------------------------------------------------------------------['--*/
  // @Input() user: any;
  // @Output() nameEvt = new EventEmitter();
  // private initialValue: string;

  // ngOnChanges(changes: SimpleChanges): void {
  //   const { firstChange, currentValue } = changes['user'];
  //   if (firstChange && currentValue) {
  //     this.initialValue = currentValue.name;
  //   }
  // }

  // public changeName(name): void {
  //   this.user.name = name;
  //   this.nameEvt.emit({
  //     id: this.user.id,
  //     name,
  //   })
  // }

  // public resetName(): void {
  //   this.changeName(this.initialValue);
  // }



  /*----------------------------------------------------------------------
        ngOnChanges Life Cycle Hook with Setter & Getter (Part-1)
  ----------------------------------------------------------------------*/
  private _name!: string;
  private _dob!: string;

  /*------- name -------*/
  @Input()
  get name(): string {
    return this._name;
  };
  set name(val: string) {
    this._name = val;
    if (val) {
      this.uname = val.charAt(0) + val.substring(1);
    }
  };
  uname!: string;

  /*------- dob -------*/
  @Input()
  get dob(): string {
    return this._dob;
  }

  set dob(date: string) {
    this._dob = date;
    this.age = this.getAge(date);

    if (this.age >= 10 && this.age < 13) {
      this.message = "you are kids";
    } else if (this.age >= 13 && this.age < 18) {
      this.message = "you are teen";
    } else {
      this.message = "you are mature";
    }
  }
  age!: number;
  message!: string;

  private getAge(dateOfBirth: string) {
    const dob = new Date(dateOfBirth).getTime();
    const currentDate = new Date().getTime();
    return Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24 * 365));
  }
}



 /*----------------------------------------------------------------------
        ngOnChanges Life Cycle Hook with Setter & Getter (Part-2)
  ----------------------------------------------------------------------*/
