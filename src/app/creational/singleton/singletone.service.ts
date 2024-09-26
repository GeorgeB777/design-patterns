import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SingletoneService {
    private data: string;

    constructor() {
      this.data = 'Singleton Data';
    }
  
    getData(): string {
      return this.data;
    }
}