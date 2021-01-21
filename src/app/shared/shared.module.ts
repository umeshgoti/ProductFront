import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
