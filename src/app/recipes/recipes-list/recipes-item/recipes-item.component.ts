import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import {Recipe} from "../../recipe.model";
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 
  @Input()recipe:Recipe;
  @Input()id:number;
  constructor(private recipeService:RecipeService,
    private router:Router) { }

  ngOnInit(): void {
  }


  //no more needed
  onDetail(){
    //this.recipeService.recipeSelected.emit(this.recipe);
    //this.router.navigate(["/recipes",this.id]);
    //console.log(this.recipe)
  }

}
