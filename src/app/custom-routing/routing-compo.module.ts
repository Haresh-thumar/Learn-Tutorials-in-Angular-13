import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFileComponent } from './student-file/student-file.component';

const routes: Routes = [
  // { path: '', redirectTo: 'student-file', pathMatch: 'full' },
  // { path: 'student-file', component: StudentFileComponent },
  // { path: 'student-detail', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingCompoRoutingModule { }
