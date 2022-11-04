import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesComponent } from './../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[];
  constructor() {
    this.recipes = [];
  }

  ngOnInit(): void {}
}
