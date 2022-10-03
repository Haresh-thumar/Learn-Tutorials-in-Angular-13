import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyModule,
    PersonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ModuleFileModule { }
