import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { FeesComponent } from './fees/fees.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'education', component: EducationComponent},
  {path:'fees', component: FeesComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
