import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from './content-projection.component';
import { InputComponent } from './input/input.component';
import { ContentCounterComponent } from './content-counter/content-counter.component';



@NgModule({
  declarations: [
    ContentProjectionComponent,
    InputComponent,
    ContentCounterComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ContentModule { }
