import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFileComponent } from './student-file/student-file.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RoutingCompoRoutingModule } from './routing-compo.module';



@NgModule({
  declarations: [StudentFileComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    RoutingCompoRoutingModule
  ],
  exports: [StudentFileComponent, StudentDetailComponent]
})
export class CustomRouteModule { }
