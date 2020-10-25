export class CartItem {
    productId : number;
    quantity: number;
    price: number;

    constructor(productId, quantity, price){
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}