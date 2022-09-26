import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FeesComponent } from './fees/fees.component';
import { EducationComponent } from './education/education.component';

console.warn("student module load");

@NgModule({
  declarations: [
    ProfileComponent,
    FeesComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
