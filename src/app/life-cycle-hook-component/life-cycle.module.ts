import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHookComponentComponent } from './life-cycle-hook-component.component';
import { ConstructureComponentComponent } from './constructure-component/constructure-component.component';
import { NgOnChangeComponentComponent } from './ng-on-change-component/ng-on-change-component.component';
import { NgOnInitComponentComponent } from './ng-on-init-component/ng-on-init-component.component';



@NgModule({
  declarations: [LifeCycleHookComponentComponent, ConstructureComponentComponent, NgOnChangeComponentComponent, NgOnInitComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [LifeCycleHookComponentComponent, ConstructureComponentComponent, NgOnChangeComponentComponent, NgOnInitComponentComponent],
})
export class LifeCycleModule { }
