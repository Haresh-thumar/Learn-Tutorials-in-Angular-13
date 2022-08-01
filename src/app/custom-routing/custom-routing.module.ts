import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFileComponent } from './student-file/student-file.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path: 'student-file', component: StudentFileComponent},
  {path: 'student-detail', component: StudentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
