import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  // EventEmitter <=> CustomEvent JS
  // EventEmitter<Product> => l'evenement transporte un objet de type Product
  // @Output => permet d'accéder au event binding sur les composants parents (addProduct)
  @Output()
  addProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      // champs
      // fieldname: object
      name: new FormControl(''),
      price: new FormControl(''),
    });
  }

  submit(): void {
    console.log(this.productForm.value);
    // declencher l'evenement
    this.addProduct.emit(this.productForm.value);
  }

}
