import { Component, inject } from '@angular/core';
import { Cocktail, CocktailService } from '../services/cocktail.service';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {

  cocktailsList : Cocktail [] = [];
  

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktailsList = cocktailsFromJsonFile;
    });
}

}
