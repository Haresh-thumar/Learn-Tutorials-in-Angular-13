import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BrandComponent } from './brand/brand.component';
import { RefurbComponent } from './refurb/refurb.component';
import { SecondHandComponent } from './second-hand/second-hand.component';
import { NewBrandComponent } from './new-brand/new-brand.component';

console.warn("product module load");

@NgModule({
  declarations: [
    BrandComponent,
    RefurbComponent,
    SecondHandComponent,
    NewBrandComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
