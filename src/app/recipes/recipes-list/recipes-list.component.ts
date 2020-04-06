import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LocalStorageService} from '../LocalStorage.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
// @ts-ignore
private subscription: Subscription;
  rec: any = [];
  constructor(private recipeService: RecipeService,
              private router: Router, private storageSevice: LocalStorageService
              ) { }

  ngOnInit(): void {

    this.load();

  //  this.router.navigate['recipe'];
   /* this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipyChanged.subscribe(
      (recipe: Recipe[] ) => {
        this.recipes = recipe;
      });
*/
  }
  load(){
    return this.storageSevice.getRecipes().subscribe((data: {}) => {
      this.rec = data;
    //  console.log(this.rec);
    });
  }
/*ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
*/

}
