import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Sample Recipe',
      'Tasty Food',
      'https://cbspittsburgh.files.wordpress.com/2015/11/recipes-1024x576.jpg?w=1024',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 12)
      ]),
    new Recipe('Another Sample Recipe',
      'Tasty Food',
      'https://cbspittsburgh.files.wordpress.com/2015/11/recipes-1024x576.jpg?w=1024',
      [
        new Ingredient('patty', 1),
        new Ingredient('Fries', 20)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    console.log('entered recipe service');
    this.shoppingListService.addIngredients(ingredients);
    console.log('going to recipe detail component');
  }
}
