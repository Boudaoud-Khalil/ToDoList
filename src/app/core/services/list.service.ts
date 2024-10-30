import { Injectable } from '@angular/core';
import { List } from '../models/lists';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  private listsSubject = new BehaviorSubject<List[]>([]);
  lists$ = this.listsSubject.asObservable();
  
  private favoritesSubject = new BehaviorSubject<List[]>([]);
  favoritelist$ = this.favoritesSubject.asObservable();

  addList(newList: List) {
    const currentLists = this.listsSubject.value;
    this.listsSubject.next([...currentLists, newList]);
  }

  addFavoriteList(list: List) {
    let currentFavorites = this.favoritesSubject.value;

    if (currentFavorites.includes(list)) {
      // If it's already a favorite, remove it
      currentFavorites = currentFavorites.filter(fav => fav !== list);
    } else {
      // Otherwise, add to favorites
      currentFavorites = [...currentFavorites, list];
    }
    this.favoritesSubject.next(currentFavorites);
  
  }

  removeList(listTitle: string, listText: string) {
    const currentLists = this.listsSubject.value;

    const updatedLists = currentLists.filter(list => 
      list.listtitle !== listTitle || list.listtext !== listText
    );
    this.listsSubject.next(updatedLists);
  }

  updateList(updatedList: List) {
    const currentLists = this.listsSubject.value;
    const index = currentLists.findIndex(list => list === updatedList);

    if (index !== -1) {
      currentLists[index] = updatedList;
      this.listsSubject.next([...currentLists]);
    }
  }
}
