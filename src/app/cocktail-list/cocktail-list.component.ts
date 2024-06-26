import { Component } from '@angular/core';
import { Cocktail, CocktailService } from '../services/cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {

  cocktailsList : Cocktail [];
  

  constructor(private cocktailService: CocktailService) {
    this.cocktailsList = this.cocktailService.getCocktails();
  }
}
