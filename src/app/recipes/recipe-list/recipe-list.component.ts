import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesComponent } from './../recipes.component';
import { RecipeItemComponent } from './../recipe-item/recipe-item.component';
import { single } from 'rxjs';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  singleRecipe: Recipe = { name: '', descryption: '', imagePatch: '' };

  constructor(private recipesService: RecepieService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
