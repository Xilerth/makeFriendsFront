import { Component } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'xilerth-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.scss']
})
export class SearchFriendsComponent {
  constructor(private friendsService: FriendsService) {}
  
  get peopleData() {
    return this.friendsService.peopleData;
  }
}
