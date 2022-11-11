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
import { ShopingService } from './../shoping.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;

  @ViewChild('amount', { static: false }) nameAmountRef!: ElementRef;

  add2() {
    const name: string = this.nameInputRef.nativeElement.value;
    const number: number = this.nameAmountRef.nativeElement.value;
    const newIndigriend = new Ingridient(name, number);
    this.shopingService.add(newIndigriend);
  }

  constructor(private shopingService: ShopingService) {}

  ngOnInit() {}
}
