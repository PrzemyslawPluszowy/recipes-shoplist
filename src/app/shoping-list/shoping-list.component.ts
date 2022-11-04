import { Component, OnInit } from '@angular/core';
import { Ingridient } from './../shared/ingridient.model';

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

  constructor() {}

  ngOnInit(): void {}
}
