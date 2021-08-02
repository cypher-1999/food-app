import { EventEmitter, Injectable, Output } from "@angular/core";

import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    @Output()startedEditing = new Subject<number>();
    @Output()ingredientsChanged=new Subject<Ingredient[]>();
    private ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",3)
  ];
  getIngredients(){
      return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredient(index:number){
    return this.ingredients[index];
  }
  addIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number,update:Ingredient){
    this.ingredients[index]=update;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  
}