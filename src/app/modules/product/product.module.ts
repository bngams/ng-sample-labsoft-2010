import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [ProductListComponent, ProductFormComponent, ProductDashboardComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
