import { Component, Input } from '@angular/core';

@Component({
  selector: 'xilerth-friendship-leaderboard',
  templateUrl: './friendship-leaderboard.component.html',
  styleUrls: ['./friendship-leaderboard.component.scss']
})
export class FriendshipLeaderboardComponent {
  @Input() set data(data: any) {
    console.log(data)
    this._data = data;
  }

  public _data: any;

}
