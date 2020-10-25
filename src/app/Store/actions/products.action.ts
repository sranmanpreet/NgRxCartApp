import { Action } from '@ngrx/store';
import { Product } from 'src/app/product-list/product.model';

import { CartItem } from '../../cart/cart-item.model';

export const GET_ALL_PRODUCTS = '[ProductList] Get';
export const GET_ALL_PRODUCTS_SUCCESS = '[ProductList] Get Success';
export const GET_ALL_PRODUCTS_ERROR = '[ProductList] Get Error';

export const ADD_CART_ITEM = '[ProductList] Add';
export const DELETE_CART_ITEM = '[Cart] DeleteItem';

export class GetAllProducts implements Action {
    readonly type = GET_ALL_PRODUCTS;
    constructor(){}
}
export class GetAllProductsAPISuccess implements Action {
    readonly type = GET_ALL_PRODUCTS_SUCCESS;
    constructor(public allProducts: Product[]){}
}
export class GetAllProductsAPIError implements Action {
    readonly type = GET_ALL_PRODUCTS_ERROR;
    constructor(public errorMessage: String ){}
}

export class AddCartItem implements Action {
    readonly type = ADD_CART_ITEM;
    constructor(public payload: CartItem){}

}

export class DeleteCartItem implements Action {
    readonly type = DELETE_CART_ITEM;
    constructor(public payload: number){}

}

export type Actions = GetAllProducts | GetAllProductsAPISuccess | GetAllProductsAPIError | AddCartItem | DeleteCartItem;