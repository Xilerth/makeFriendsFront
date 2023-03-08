import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFriendsComponent } from './views/search-friends/search-friends.component';
import { TopFriendsComponent } from './views/top-friends/top-friends.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { LookingForFriendshipPipe } from './pipes/looking-for-friendship.pipe';
import { PeopleStatusPipe } from './pipes/people-status.pipe';
import { TopThreeFriendshipComponent } from './components/top-three-friendship/top-three-friendship.component';
import { FriendshipLeaderboardComponent } from './components/friendship-leaderboard/friendship-leaderboard.component';
import { MakeMePopularComponent } from './views/make-me-popular/make-me-popular.component';
import { FriendshipCardComponent } from './components/friendship-leaderboard/friendship-card/friendship-card.component';
import { NgVarDirective } from './ng-var.directive';
import { ToastEventsComponent } from './components/toast-events/toast-events.component';
import { ToastComponent } from './components/toast/toast.component';
const config: SocketIoConfig = { url: 'https://makefriendsapi.xilerth.com/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFriendsComponent,
    TopFriendsComponent,
    ProfileComponent,
    SearchCardComponent,
    LookingForFriendshipPipe,
    PeopleStatusPipe,
    TopThreeFriendshipComponent,
    FriendshipLeaderboardComponent,
    MakeMePopularComponent,
    FriendshipCardComponent,
    NgVarDirective,
    ToastEventsComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
