import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductListComponent, ProductFormComponent, ProductDashboardComponent, ProductCardComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
})
export class ProductModule { }
