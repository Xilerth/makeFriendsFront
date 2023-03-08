import { FriendsService } from 'src/app/services/friends.service';
import { Component } from '@angular/core';

@Component({
  selector: 'xilerth-top-friends',
  templateUrl: './top-friends.component.html',
  styleUrls: ['./top-friends.component.scss'],
})
export class TopFriendsComponent {
  constructor(private friendsService: FriendsService) {}

  get peopleData() {
    return this.friendsService.peopleData;
  }
}
