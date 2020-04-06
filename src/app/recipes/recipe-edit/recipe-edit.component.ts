import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../LocalStorage.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  editMode = false;
  recipeForm: FormGroup;
  recipe: any = {};
  rec:any = [];
  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
              private router: Router, private storageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.editMode = this.id != null;
    if (this.editMode) {
      this.storageService.getRecipe(this.id).subscribe((data: {}) => {
          this.recipe = data;


          this.initForm();
        }
      );
    } else{
     this.initForm();
    }

    this.load();
  }
  load(){
    return this.storageService.getRecipes().subscribe((data: {}) => {
      this.rec = data;

    });
  }

onSubmit(){


  console.log(new  Date().toString().slice(0, 15));
const newRecipe = new Recipe(  this.recipeForm.value.name,
  this.recipeForm.value.shortDesc, this.recipeForm.value.longDesc,
  this.recipeForm.value.imagePath, this.recipeForm.value.category,
  new  Date().toISOString().slice(0, 10));
    if (this.editMode){
      if(window.confirm('Are you sure, you want to update?')){
        const editedRecipe = new Recipe(  this.recipeForm.value.name,
          this.recipeForm.value.shortDesc, this.recipeForm.value.longDesc,
          this.recipeForm.value.imagePath, this.recipeForm.value.category,
          this.recipe.createDate);
        this.storageService.updateRecipe(this.id, editedRecipe).subscribe(data => {
          this.router.navigate(['/recipes']);
        });
      }
} else {
      this.storageService.createRecipes(newRecipe).subscribe((data: {}) => {

      });
    }
  this.onCancel();
}

private initForm() {
    let recipeName = '';
    let category = '';
    let image = '';
    let shortDesc = '';
    let longDesc = '';
    if (this.editMode) {
      recipeName = this.recipe.name ;
      image =  this.recipe.imagePath;
      shortDesc =  this.recipe.shortDesc;
      longDesc =  this.recipe.longDesc;
      category =  this.recipe.category;
    }
    this.recipeForm = new FormGroup({
    name: new FormControl(recipeName, Validators.required),
      category: new FormControl(category, Validators.required),
    imagePath: new FormControl(image, Validators.required),
    shortDesc: new FormControl(shortDesc, Validators.required),
      longDesc: new FormControl(longDesc, Validators.required)

  });

   }

  onCancel() {
    this.router.navigate(['recipes']);

  }
}
