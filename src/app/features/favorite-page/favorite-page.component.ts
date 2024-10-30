import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { List } from '../../core/models/lists';
import { ListService } from '../../core/services/list.service';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [SideBarComponent, FormsModule, CommonModule],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent implements OnInit {

  ngOnInit() {
    this.listService.favoritelist$.subscribe(lists => {
      this.lists = lists;
    });
  }

  constructor(private router: Router, private listService: ListService) {}

  newListTitle = "";
  newListText = "";
  lists: List[] = [];
  editingList: List | null = null;
  clicked: boolean = false;
  heartImage: string = 'assets/heart.2.png';

  newList() {
    this.router.navigate(['/Home']);
  }

  clickList(list: List) {
    
  }

  changeHeart(list: List) {
    if (this.heartImage === 'assets/heart.2.png') {
      this.heartImage = 'assets/heart.1.png';
    } else {
      this.heartImage = 'assets/heart.2.png';
    }
    
    this.listService.addFavoriteList(list);

  }

}
