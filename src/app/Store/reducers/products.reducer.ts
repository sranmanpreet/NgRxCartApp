
import * as CartActions from './../actions/products.action';
import { CartItem } from 'src/app/cart/cart-item.model';
import { Product } from 'src/app/product-list/product.model';

export function cartItemReducer(state: CartItem[] = [], action: CartActions.Actions){
    switch(action.type){
        case CartActions.ADD_CART_ITEM:
            return handleCartItem(state, action.payload);
        case CartActions.DELETE_CART_ITEM:
            return handleDeleteCartItem(state, action.payload);
        default:
            return state;

    }
}

export function productReducer(state: Product[] = [], action: CartActions.Actions){
    switch(action.type){
        case CartActions.GET_ALL_PRODUCTS:
            return state;
        case CartActions.GET_ALL_PRODUCTS_SUCCESS:
            return action.allProducts;
        case CartActions.GET_ALL_PRODUCTS_ERROR:
            return [];
        default:
            return state;

    }
}

function handleCartItem (cart: CartItem[], newCartItem: CartItem) : CartItem[]{
    let itemAlreadyExist = false;
    let newCart = Object.assign([], cart);
    newCart.forEach((item, i) => {
        if(item.productId == newCartItem.productId){
            const ci = new CartItem(item.productId, item.quantity + newCartItem.quantity, newCartItem.price * (item.quantity+newCartItem.quantity));
            newCart.splice(i,1);
            newCart.push(ci);
            itemAlreadyExist = true;
            return newCart;
        }
    });
    newCart = itemAlreadyExist? newCart : [...newCart, newCartItem];
    return newCart;
}

function handleDeleteCartItem(cart: CartItem[], index: number,) : CartItem[]{
    let newCart = Object.assign([], cart);
    newCart.splice(index,1);
    return newCart;
}