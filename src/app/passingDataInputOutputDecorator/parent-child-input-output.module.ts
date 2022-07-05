import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildInputOutputComponent } from './child-input-output/child-input-output.component';
import { ParentInputOutputComponent } from './parent-input-output/parent-input-output.component';



@NgModule({
  declarations: [
    ChildInputOutputComponent,
    ParentInputOutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildInputOutputComponent,
    ParentInputOutputComponent
  ]
})
export class ParentChildInputOutputModule { }
