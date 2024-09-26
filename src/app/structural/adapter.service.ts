import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export class Hero {
    constructor(public id: number, public name: string, public power: string) {}
}

@Injectable({ providedIn: 'root' })
export class HeroAdapterService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes').pipe(
      map(data => data.map(item => this.adapt(item)))
    );
  }

  private adapt(item: any): Hero {
    return new Hero(item.id, item.name, item.power);
  }
}
