import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { ParentModuleModule } from './parentTochildData/parent-module.module';
import { PipesComponent } from './pipes/pipes.component';
import { TempleteReferenceVariableComponent } from './templete-reference-variable/templete-reference-variable.component';
import { ChildToParentModule } from './childToparentData/child-to-parent.module';
import { ParentChildInputOutputModule } from './passingDataInputOutputDecorator/parent-child-input-output.module';
import { NgTempleteComponent } from './ng-templete/ng-templete.component';
import { HostListenerHostBindingComponent } from './host-listener-host-binding/host-listener-host-binding.component';
import { CounterComponent } from './ng-templete/counter/counter.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ChildComponent } from './ng-template-outlet/child/child.component';
import { ContentModule } from './content-projection/content.module';
import { GithubTypeExampleComponent } from './github-type-example/github-type-example.component';
import { GithubModule } from './github-type-example/github.module';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TempleteReferenceVariableComponent,
    NgTempleteComponent,
    HostListenerHostBindingComponent,
    CounterComponent,
    NgContainerComponent,
    NgTemplateOutletComponent,
    ChildComponent,
    GithubTypeExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModuleModule,
    DataBindingModule,
    DirectivesModule,
    ChildToParentModule,
    ParentChildInputOutputModule,
    ContentModule,
    GithubModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }

