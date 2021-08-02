import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import {Recipe} from "../recipe.model";
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  //@Input()item:Recipe;
  item:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.item=this.recipeService.getRecipeById(+params['id'])
      this.id= +params['id'];
    })
  }
  addToSL(){
    this.recipeService.addIngredientsToShoppingList(this.item.ingredients)
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }

}
