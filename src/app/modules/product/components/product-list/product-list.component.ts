import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // binding [products]="variable"
  @Input()
  productsWithInput: Product[] = new Array();

  // basic products attribute
  products: Product[] = new Array();

  // On peut lier plusieurs composants enfants
  // @ViewChildren(ProductCardComponent)
  // productCards: Query<ProductCardComponent>;

  constructor() { }

  ngOnInit(): void {
    this.loadProductsViaMock();
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

  addProductList(product: Product): void {
    this.products.push(product);
  }

}
