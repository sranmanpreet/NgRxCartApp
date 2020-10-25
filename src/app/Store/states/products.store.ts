import { CartItem } from 'src/app/cart/cart-item.model';
import { Product } from 'src/app/product-list/product.model';

export interface AppState {
    cart: CartItem[];
    products: Product[];
}