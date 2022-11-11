import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecepieService } from './../recepie.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private recepieService: RecepieService) {}

  ngOnInit(): void {}
  @Input() item: Recipe = { name: '', descryption: '', imagePatch: '' };

  onSelected() {
    this.recepieService.recipeSelected.emit(this.item);
  }
}
