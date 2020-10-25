import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ProductService } from '../../product-list/product.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as CartActions from './../actions/products.action';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductService) { }
    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.GET_ALL_PRODUCTS),
        mergeMap(() => this.productService.getAllProducts()
            .pipe(
                map(products => ({ type: CartActions.GET_ALL_PRODUCTS_SUCCESS, allProducts: products })),
                catchError(() => of({ type: CartActions.GET_ALL_PRODUCTS_ERROR, errorMessage: 'No Products Found' }))
            ),
        ),
    )
    );
}