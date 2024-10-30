import { Component} from '@angular/core';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { List } from '../../core/models/lists';
import { ListService } from '../../core/services/list.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SideBarComponent, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  newListTitle = "";
  newListText = "";

  constructor(private listService: ListService) {}

  saveList() {
    const newList = new List(this.newListTitle, this.newListText);
    this.listService.addList(newList);

    this.newListTitle = "";
    this.newListText = "";
  }

  newList() {
    this.newListTitle = "";
    this.newListText = "";
  }
}
