import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../LocalStorage.service';

@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.component.html',
  styleUrls: ['./recipe-filter.component.css']
})
export class RecipeFilterComponent implements OnInit  {
// @ts-ignore
private subscription: Subscription;
  recipes: any = [];
  category: string [];
  constructor(
    private router: Router,
    private route: ActivatedRoute, private storageService: LocalStorageService) { }

  ngOnInit(): void {
console.log('i am strarted' );
this.load();

}

  load(){
    return this.storageService.getRecipes().subscribe((data: {}) => {
      this.recipes = data;
  //  this.getCategory();
      //console.log(this.recipes[1].category);
    });
  }

  getCategory(){
    for ( let i = 0; i < this.recipes.length; i++){
      this.category.push(this.recipes[i].category);
    }

  }
  onNewRecipe() {

    this.router.navigate(['add']);
  }
}
