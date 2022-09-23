import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingRoutingModule } from './group-routing-routing.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GroupRoutingRoutingModule,
    AdminModule,
    UserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class GroupRoutingModule { }
