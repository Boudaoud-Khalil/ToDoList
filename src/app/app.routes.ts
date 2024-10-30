import { Routes } from '@angular/router';
import { MyListPageComponent } from './features/my-list-page/my-list-page.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { FavoritePageComponent } from './features/favorite-page/favorite-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Home', component: HomePageComponent},
    {path: 'MyList', component: MyListPageComponent},
    {path: 'Favorite', component: FavoritePageComponent}
];
