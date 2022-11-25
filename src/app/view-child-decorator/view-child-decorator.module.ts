import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChangeColorDirective } from './change-color.directive';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    ChangeColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildComponent,
    ParentComponent,
    ChangeColorDirective
  ]
})
export class ViewChildDecoratorModule { }
