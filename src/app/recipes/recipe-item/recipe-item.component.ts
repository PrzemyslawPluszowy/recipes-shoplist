import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  @Output() recipeDescryption = new EventEmitter<void>();
  ngOnInit(): void {}
  @Input() item: Recipe = { name: '', descryption: '', imagePatch: '' };

  sendInfoRecipe() {
    this.recipeDescryption.emit();
  }
}
