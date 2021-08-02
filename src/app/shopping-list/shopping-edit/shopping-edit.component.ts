import { Component, OnInit ,ViewChild,Output,EventEmitter,ElementRef, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 // @ViewChild('nameInput')name:ElementRef;
 // @ViewChild('amountInput')amount:ElementRef;
 subscription:Subscription;
 editMode=false;
 edittedItemIndex:number;
 edittedItem:Ingredient;
 @ViewChild('f')slForm:NgForm
  constructor(private shoppinglistService:ShoppingListService) {  }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe((index)=>{
      this.editMode=true;
      this.edittedItemIndex=index;
      this.edittedItem=this.shoppinglistService.getIngredient(index);
      this.slForm.setValue({
        name:this.edittedItem.name,
        amount:this.edittedItem.amount
      })
    })
  }
  addIngredient(){
    const value = this.slForm.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(!this.editMode){
    this.shoppinglistService.addIngredient(newIngredient);
    }
    else{
    this.shoppinglistService.updateIngredient(this.edittedItemIndex,newIngredient);
    }
    this.editMode=false;
    this.slForm.reset();
    //this.shoppinglistService.addIngredient({name:this.name.nativeElement.value,amount:this.amount.nativeElement.value});
  }
  onClear(){
    this.editMode=false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppinglistService.deleteIngredient(this.edittedItemIndex);
     this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
   
  }
}
