import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xilerth-friendship-card',
  templateUrl: './friendship-card.component.html',
  styleUrls: ['./friendship-card.component.scss'],
})
export class FriendshipCardComponent {
  @Input() set data(data: any) {
    if (!data) {
      return;
    }
    this._data = data.item;
    this.index = data.index;
  }

  public _data: any;
  public index = 0;

  constructor(private router: Router) {}

  navigateTo(name: string) {
    this.router.navigate(['/profile', name]);
  }
}
