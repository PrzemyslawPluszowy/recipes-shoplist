import { outputAst } from '@angular/compiler';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { singleIndygriend } from './model.component';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;

  @ViewChild('amount', { static: false }) nameAmountRef!: ElementRef;
  @Output()
  SingleIngredient = new EventEmitter<Ingridient>();

  sendIngredients(singleIndygriend: Ingridient) {
    this.SingleIngredient.emit(singleIndygriend);
  }

  // singleIndygriend: { name: string; amount: number } = { name: '', amount: 0 };

  // add(nameInput: HTMLInputElement, amount: HTMLInputElement) {
  //   let amountNumber = parseFloat(amount.value);
  //   this.singleIndygriend = { name: nameInput.value, amount: amountNumber };

  //   this.sendIngredients(this.singleIndygriend);
  // }
  add2() {
    const name: string = this.nameInputRef.nativeElement.value;
    const number: number = this.nameAmountRef.nativeElement.value;
    const newIndiegrents = new Ingridient(name, number);
    this.sendIngredients(newIndiegrents);
  }

  constructor() {}

  ngOnInit() {}
}
