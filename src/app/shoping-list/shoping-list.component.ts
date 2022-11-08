import { Component, OnInit } from '@angular/core';
import { Ingridient } from './../shared/ingridient.model';
import { singleIndygriend } from './shoping-edit/model.component';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingridient[] = [
    new Ingridient('apples', 5),
    new Ingridient('egss', 8),
  ];
  add(event: singleIndygriend) {
    this.ingredients.push(new Ingridient(event.name, event.amount));
    console.log(event.amount);
  }

  constructor() {}

  ngOnInit(): void {}
}
