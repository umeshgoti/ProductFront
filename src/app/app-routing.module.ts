import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
