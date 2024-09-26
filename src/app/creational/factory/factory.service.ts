import { Injectable } from '@angular/core';
import { Product } from './model';
import { Observable } from 'rxjs';

@Injectable()
export abstract class FactoryService {
    abstract getData(): Observable<Product>
}