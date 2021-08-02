import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  collapsed = true;
  @Output() Nav = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) {}
  onRecipeTrigger() {
    this.Nav.emit('recipe');
  }

  onShoppingTrigger() {
    this.Nav.emit('shop');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();     
  }
}
