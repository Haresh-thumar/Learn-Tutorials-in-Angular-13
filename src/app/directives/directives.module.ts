import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';


@NgModule({
  declarations: [
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
  ]
})
export class DirectivesModule { }
