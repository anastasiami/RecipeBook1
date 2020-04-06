import {Component, EventEmitter, Output} from '@angular/core';
import {LocalStorageService} from '../recipes/LocalStorage.service';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

constructor(private localStorage: LocalStorageService, private recipeService: RecipeService) {
}
  onSaveData() {

  }

  onClick() {

  }
}
