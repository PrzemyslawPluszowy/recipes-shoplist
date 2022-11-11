import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecepieService {
  constructor() {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply test',
      'https://cdn.stocksnap.io/img-thumbs/960w/strawberry-food_PROXEBKRSP.jpg'
    ),
    new Recipe(
      'coś drugiego',
      'lorem ipsum',
      'https://cdn.stocksnap.io/img-thumbs/960w/strawberry-food_PROXEBKRSP.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
