import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

class ProductsService {
    getProducts(): any {

    }
 }

@Injectable()
export class ObserverService {
    private productsService = inject(ProductsService)
    // Big Complex object
    public products$ = this.productsService.getProducts();

    // Small object that listens and updates when big object changes
    public total$ = this.products$.pipe(
        map((products: any) => products.reduce((acc: any, product: any) => acc + product.price, 0))
    )
}