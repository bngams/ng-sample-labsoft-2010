import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { PRODUCTS } from '../../mocks/product.mock';
import { Observable } from 'rxjs';

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

  // async variable
  products$: Observable<Product[]>;

  // On peut lier plusieurs composants enfants
  // @ViewChildren(ProductCardComponent)
  // productCards: Query<ProductCardComponent>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.loadProductsViaMock();
    this.loadProducts();
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

  loadProducts$(): void {
    this.products$ = this.productService.getProducts();
  }

  loadProducts(): void {
    // const observable = this.productService.getProducts();
    // const observer = {
    //   next: (result) => { this.products = result; },
    //   error: (err) => { console.log(err); },
    //   complete: () => { console.log('complete'); }
    // };
    // observable.subscribe(observer);

    // notation intermediaire
    // this.productService.getProducts().subscribe({
    //   next: (result) => this.products = result,
    //   error: (err) => console.log(err)
    // });

    // notation simple
    this.productService.getProducts().subscribe(
      (result) => this.products = result
    );
  }

  addProductList(product: Product): void {
    this.products.push(product);
  }

}
