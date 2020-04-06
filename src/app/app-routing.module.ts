import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';

import {RecipesDetailsComponent} from './recipes/recipes-details/recipes-details.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent},
  {path: 'add', component: RecipeEditComponent },
  {path: 'recipes/:id', component: RecipesDetailsComponent},
  {path: 'edit/:id', component: RecipeEditComponent },

  //{path: '-redirect', redirectTo: '/recipes', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
