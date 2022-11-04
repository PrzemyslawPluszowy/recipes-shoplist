import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
