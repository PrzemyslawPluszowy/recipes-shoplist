import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { ShopingService } from './shoping-list/shoping.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShopingListComponent,
    ShopingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule],

  providers: [ShopingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
