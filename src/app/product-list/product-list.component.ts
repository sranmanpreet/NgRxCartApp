import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from './product.model';
import { AppState } from '../Store/states/products.store';
import * as CartActions from '../Store/actions/products.action';
import { CartItem } from '../cart/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new CartActions.GetAllProducts());
    this.store.select('products').subscribe((products) => this.products = products);
  }

  addProduct(product: Product) {
    const cartItem = new CartItem(product.id, 1, product.productPrice);
    this.store.dispatch(new CartActions.AddCartItem(cartItem));
  }

}
