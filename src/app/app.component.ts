import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  recipeFlag: boolean = false;
  shopingFlag: boolean = true;
  title = 'Recpie-shoplist';

  recipeComponent(event: boolean) {
    this.recipeFlag = event;
    this.shopingFlag = false;
  }
  shopingComponent(event: boolean) {
    this.shopingFlag = event;
    this.recipeFlag = false;
  }
}
