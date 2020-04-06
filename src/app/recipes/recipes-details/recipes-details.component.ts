import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.module';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocalStorageService} from '../LocalStorage.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe: any = {};
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router, private storageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = this.route.snapshot.params['id'];
        this.storageService.getRecipe(this.id).subscribe((data: {}) => {
          this.recipe = data;
        });

      }
    );


  }

  onEdit() {
    this.router.navigate(['edit', this.id]);
  }

  onDelete() {

    if (window.confirm('Are you sure, you want to delete?')) {
      this.storageService.deleteRecipe(this.id).subscribe(data => {
        this.router.navigate(['recipes']);
      });

    }
  }
}
