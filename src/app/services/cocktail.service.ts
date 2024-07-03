import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Cocktail {
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private http = inject(HttpClient);

  constructor() { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("/assets/cocktails.json");
  }
}
