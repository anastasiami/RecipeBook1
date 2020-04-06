import {Recipe} from './recipe.module';
import {Subject} from 'rxjs';
import {now} from 'moment';






export class RecipeService {
 /* recipyChanged = new Subject<Recipe[]>();
date = new Date().toLocaleDateString();
 private  recipes: Recipe[] = [
    new Recipe(1, 'one','this is my recipe','hslkjf;skfeoefs;nkf;sn', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg', 'main', new Date().toLocaleDateString() ),
   new Recipe(2, 'two','this is my recipe','hslkjf;skfeoefs;nkf;sn', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg', 'main', new Date().toLocaleDateString() ),
   new Recipe(3, 'three','this is my recipe','hslkjf;skfeoefs;nkf;sn', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg', 'main', new Date().toLocaleDateString() )

 ];?
 getRecipes(){
   return this.recipes.slice();
 }
 getRecipe(index: number){
   return this.recipes.slice()[index] ;
 }
 addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipyChanged.next(this.recipes.slice());
console.log(this.recipes.length);
 }
  updateRecipe(index: number, newRecipe: Recipe){
this.recipes[index] = newRecipe;
this.recipyChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
this.recipes.splice(id, 1);
this.recipyChanged.next(this.recipes.slice());
  }*/
}
