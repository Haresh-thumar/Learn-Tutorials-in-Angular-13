import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { PracticeExampleComponent } from './practice-example/practice-example.component';



@NgModule({
  declarations: [
    OneWayDataBindingComponent,
    TwoWayDataBindingComponent,
    PracticeExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OneWayDataBindingComponent,
    TwoWayDataBindingComponent,
    PracticeExampleComponent
  ]
})
export class DataBindingModule { }
