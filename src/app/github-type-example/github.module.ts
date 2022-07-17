import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [ListComponent, WrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, WrapperComponent],
})
export class GithubModule { }
