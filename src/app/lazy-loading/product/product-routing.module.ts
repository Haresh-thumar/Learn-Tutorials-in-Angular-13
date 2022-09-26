import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { NewBrandComponent } from './new-brand/new-brand.component';
import { RefurbComponent } from './refurb/refurb.component';
import { SecondHandComponent } from './second-hand/second-hand.component';

const routes: Routes = [
  {path:'brand', component: BrandComponent},
  {path:'new-brand', component: NewBrandComponent},
  {path:'refurb', component: RefurbComponent},
  {path:'second-hand', component: SecondHandComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
