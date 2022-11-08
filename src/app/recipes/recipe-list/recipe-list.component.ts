import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesComponent } from './../recipes.component';
import { RecipeItemComponent } from './../recipe-item/recipe-item.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output()
  sendSingleRecipe = new EventEmitter<Recipe>();

  singleRecipe: Recipe = { name: '', descryption: '', imagePatch: '' };

  onRecipeSelected(item: Recipe) {
    this.singleRecipe = item;
    this.sendSingleRecipe.emit(item);
  }
  constructor() {
    this.recipes = [];
  }

  ngOnInit(): void {}
}
