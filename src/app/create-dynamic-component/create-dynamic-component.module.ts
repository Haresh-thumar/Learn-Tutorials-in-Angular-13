import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDynamicComponentComponent } from './create-dynamic-component.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';


@NgModule({
  declarations: [
    CreateDynamicComponentComponent,
    DynamicContainerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CreateDynamicComponentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CreateDynamicComponentModule { }
