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
  searchText;
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


    });
  }
/*ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
*/
  sortRecipeUp(){
    console.log(this.rec);
    let newrec = this.rec;
    for(var j=0,tmp;j<newrec.length-1;j++) {
    for(var i = 0; i<newrec.length-1;i++){
      let date1= new Date(newrec[i].createDate);
      let date2 = new Date(newrec[i+1].createDate);
      if( date1.getTime()>date2.getTime())
      {
        tmp=newrec[i];
        newrec[i]=newrec[i+1];
        newrec[i+1]=tmp;
      }
    }
    this.rec=newrec;

  }}
  sortRecipeDown(){

    console.log(this.rec);
    let newrec = this.rec;

    for(var j=0,tmp;j<newrec.length-1;j++) {
      for (var i = 0; i < newrec.length - 1; i++) {
        let date1 = new Date(newrec[i].createDate);
        let date2 = new Date(newrec[i + 1].createDate);
        if (date1.getTime() < date2.getTime()) {
          tmp = newrec[i];
          newrec[i] = newrec[i + 1];
          newrec[i + 1] = tmp;
        }
      }
    }
    this.rec=newrec;

  }
  onChange(deviceValue) {
    if (deviceValue==''){
      this.load();
    } else {
      if (deviceValue == 'from old to new') {
        this.sortRecipeUp();
      } else {
        this.sortRecipeDown();
      }
    }
  }
  getCategoryRecipeList(value:string){

    let newList= [];
    for (var i = 0; i < this.rec.length ; i++){
      if(this.rec[i].category ==value){
        newList.push(this.rec[i]);
      }

    }
    this.rec=newList;

}
  onChangeCategory(value){
    if (value==''){
      this.load();
    }else
    this.getCategoryRecipeList(value);

  }
  onNewRecipe() {

    this.router.navigate(['add']);
  }
}
