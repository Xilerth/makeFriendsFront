import { MakeMePopularComponent } from './views/make-me-popular/make-me-popular.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TopFriendsComponent } from './views/top-friends/top-friends.component';
import { SearchFriendsComponent } from './views/search-friends/search-friends.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'searchFriends', pathMatch: 'full'},
  {component: SearchFriendsComponent, path: 'searchFriends'},
  {component: TopFriendsComponent, path: 'topFriends'},
  {component: ProfileComponent, path: 'profile/:id'},
  {component: MakeMePopularComponent, path: 'makemepopular'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
