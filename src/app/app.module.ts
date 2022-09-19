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
import { LifeCycleModule } from './life-cycle-hook-component/life-cycle.module';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { CustomRouteModule } from './custom-routing/custom-route.module';
import { CustomFormModule } from './forms/custom-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleComponent } from './module/module.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './services/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

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
    CustomPipePipe,
    ModuleComponent,
    ToDoListComponent,
    ServicesComponent,
    FooterComponent,
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
    GithubModule,
    LifeCycleModule,
    CustomRouteModule,
    CustomFormModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CustomPipePipe],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }

