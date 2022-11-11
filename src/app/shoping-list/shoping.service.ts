import { Injectable, EventEmitter } from '@angular/core';
import { Ingridient } from './../shared/ingridient.model';
import { singleIndygriend } from './shoping-edit/model.component';

@Injectable()
export class ShopingService {
  ingridientChanged = new EventEmitter<Ingridient[]>();

  private ingredients: Ingridient[] = [
    new Ingridient('apples', 5),
    new Ingridient('egss', 8),
  ];
  add(ingridient: Ingridient) {
    this.ingredients.push(ingridient);
    this.ingridientChanged.emit(this.ingredients.slice());
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  constructor() {}
}
