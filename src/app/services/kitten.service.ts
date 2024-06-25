import { Injectable } from '@angular/core';

export interface Kitten {
  name: string;
  breed: string;
  birthDate: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  private kittens: Kitten[] = [];
  private adoptedKittens: Kitten[] = [];

  constructor() { }

  getKittens(): Kitten[] {
    return this.kittens;
  }

  addKitten(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  adoptKitten(index: number) {
    const kitten = this.kittens.splice(index, 1)[0];
    this.adoptedKittens.push(kitten);
  }

  getAdoptedKittens(): Kitten[] {
    return this.adoptedKittens;
  }
}
