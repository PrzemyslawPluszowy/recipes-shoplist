import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() recipeComponent = new EventEmitter<boolean>();
  @Output() shopingComponent = new EventEmitter<boolean>();
  recipeFired(value: boolean) {
    this.recipeComponent.emit(value);
  }
  shopingFired(value: boolean) {
    this.shopingComponent.emit(value);
  }
}
