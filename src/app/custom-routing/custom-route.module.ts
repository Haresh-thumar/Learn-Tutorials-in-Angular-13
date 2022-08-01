import { CustomRoutingComponent } from './custom-routing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFileComponent } from './student-file/student-file.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RoutingCompoRoutingModule } from './routing-compo.module';



@NgModule({
  declarations: [CustomRoutingComponent, StudentFileComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    RoutingCompoRoutingModule,
  ],
  exports: [CustomRoutingComponent, StudentFileComponent, StudentDetailComponent]
})
export class CustomRouteModule { }
