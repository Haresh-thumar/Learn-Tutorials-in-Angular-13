import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadComponentRoutingModule } from './lazy-load-component-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AdminListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    LazyLoadComponentRoutingModule
  ]
})
export class LazyLoadComponentModule { }
