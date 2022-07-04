import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { ParentModuleModule } from './parentTochildData/parent-module.module';
import { PipesComponent } from './pipes/pipes.component';
import { TempleteReferenceVariableComponent } from './templete-reference-variable/templete-reference-variable.component';
import { ChildToParentModule } from './childToparentData/child-to-parent.module';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TempleteReferenceVariableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModuleModule,
    DataBindingModule,
    DirectivesModule,
    ChildToParentModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
