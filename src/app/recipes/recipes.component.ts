import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecepieService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = { name: '', descryption: '', imagePatch: '' };

  constructor(private recipesService: RecepieService) {}

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
