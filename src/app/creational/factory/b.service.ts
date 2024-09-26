import { Injectable } from '@angular/core';
import { FactoryService } from './factory.service';
import { Observable } from 'rxjs';
import { Product } from './model';

@Injectable()
export class BService extends FactoryService {
    override getData(): Observable<Product> {
        return new Observable<Product>(subscriber => {
            subscriber.next({ id: 1 });
            subscriber.complete();
        });
    }
}