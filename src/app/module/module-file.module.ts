import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyModule,
    PersonModule
  ]
})
export class ModuleFileModule { }
