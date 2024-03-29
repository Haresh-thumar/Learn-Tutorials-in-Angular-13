import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*------- Lazy Load Modules ---------*/
  // {path:'', redirectTo:'lazyLoading', pathMatch:'full'},
  // {path: 'admin', loadChildren: ()=> import('./lazy-loading/admin/admin.module').then(mod=>mod.AdminModule) },
  // {path: 'product', loadChildren: ()=> import('./lazy-loading/product/product.module').then(mod=>mod.ProductModule) },
  // {path: 'student', loadChildren: ()=> import('./lazy-loading/student/student.module').then(mod=>mod.StudentModule) },
  // {path: 'user', loadChildren: ()=> import('./lazy-loading/user/user.module').then(mod=>mod.UserModule) },
  // {path: 'lazyLoading', loadChildren: ()=> import('./lazy-loading/lazy-loading.module').then(mod=>mod.LazyLoadingModule)},
  // {path: 'lazyLoadCompnant', loadChildren: ()=> import('./lazy-load-component/lazy-load-component.module').then(mod=>mod.LazyLoadComponentModule)},
  // { path: 'view-child', loadChildren: () => import('./view-child-decorator/view-child-decorator.module').then(mod => mod.ViewChildDecoratorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
