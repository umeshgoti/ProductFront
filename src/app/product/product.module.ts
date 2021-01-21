import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';


const routes : Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProductListComponent }
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
