import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  productList: Product[] = new Array();

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addProductToList(product: Product): void {
    console.log('product received from form ', product);
    // remplir la liste de produits
    this.productList.push(product);
    // accéder au composant enfant
    this.productListComponent.products.push(product);
    // this.productListComponent.addProductList(product);
  }

}
