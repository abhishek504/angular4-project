import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
   public name: string;
   public description: string;
   public ImagePath: string;
   public ingredients: Ingredient[];

   constructor(name: string, desc: string, imagepath: string, ingredients: Ingredient[]) {
       this.name = name;
       this.description = desc;
       this.ImagePath = imagepath;
       this.ingredients = ingredients;
   }
}
