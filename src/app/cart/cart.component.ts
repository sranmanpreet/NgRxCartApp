import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CartItem } from './cart-item.model';
import * as fromRoot from '../Store/selectors/products.selector';
import * as CartActions from '../Store/actions/products.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(fromRoot.selectFeatureState)).subscribe((state) => this.cartItems = state['cartItems']);
  }

  deleteCartItem(index: number){
    this.store.dispatch(new CartActions.DeleteCartItem(index));
  }

}
