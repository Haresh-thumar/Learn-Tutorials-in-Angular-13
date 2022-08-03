import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';



@NgModule({
  declarations: [FormsComponent, ReactiveFormComponent, TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormsComponent, ReactiveFormComponent, TemplateDrivenFormComponent]
})
export class CustomFormModule { }
