import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(private router: Router) {}  

  GoHomePage() {
    this.router.navigate(['/Home']);
  }

  GoMyList() {
    this.router.navigate(['/MyList']);
  }

  GoFavorite() {
    this.router.navigate(['/Favorite']);
  }

}
