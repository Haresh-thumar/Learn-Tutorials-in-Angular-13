import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'company-list', component: CompanyListComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule { }
