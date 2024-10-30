import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { List } from '../../core/models/lists';
import { ListService } from '../../core/services/list.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-list-page',
  standalone: true,
  imports: [SideBarComponent, CommonModule, FormsModule],
  templateUrl: './my-list-page.component.html',
  styleUrl: './my-list-page.component.css'
})
export class MyListPageComponent implements OnInit {
  
  newListTitle = "";
  newListText = "";
  isFavorite = false;
  editingList: List | null = null;
  lists: List[] = [];
  clicked: boolean = false;
  heartImage: string = 'assets/heart.1.png';
  
  constructor(private listService: ListService, private router: Router) {} 

  ngOnInit() {
    this.listService.lists$.subscribe(lists => {
      this.lists = lists;
    });
  }

  changeHeart(list: List) {
    if (this.heartImage === 'assets/heart.1.png') {
      this.heartImage = 'assets/heart.2.png';
    } else {
      this.heartImage = 'assets/heart.1.png';
    }

    this.listService.addFavoriteList(list);

  }

  clickList(list: List) {
    this.newListTitle = list.listtitle;
    this.newListText = list.listtext
    this.editingList = list;
    this.clicked = true;
  }

  saveList() {
    if (this.editingList) {
      this.editingList.listtitle = this.newListTitle;
      this.editingList.listtext = this.newListText;

      this.listService.updateList(this.editingList);

      this.clicked = false;
      this.editingList = null;
    }
  }

  newList() {
    this.router.navigate(['/Home']);
  }

  deleteList(listTitle: string, listText: string) {
    this.listService.removeList(listTitle, listText);
    this.clicked = false;
  }

  returnList() {
    this.clicked = false;
  }

}