import { Injectable } from '@angular/core';

export interface Cocktail {
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails: Cocktail[] = [];

  constructor() { }

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
