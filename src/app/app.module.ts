import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';

import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Recipe} from './recipes/recipe.module';
import {RecipeService} from './recipes/recipe.service';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {HttpClientModule} from '@angular/common/http';
import {LocalStorageService} from './recipes/LocalStorage.service';
import { RecipeFilterComponent } from './recipes/recipe-filter/recipe-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [RecipeService, LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
