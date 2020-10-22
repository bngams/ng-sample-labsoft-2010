import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = new Array();

  constructor() { }

  ngOnInit(): void {
    this.loadProductsViaMock();
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

}
