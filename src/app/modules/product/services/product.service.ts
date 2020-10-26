import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.apiUrl + '/products');
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(environment.apiUrl + '/products', product);
  }
}
