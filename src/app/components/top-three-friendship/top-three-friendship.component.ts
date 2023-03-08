import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'xilerth-top-three-friendship',
  templateUrl: './top-three-friendship.component.html',
  styleUrls: ['./top-three-friendship.component.scss'],
})
export class TopThreeFriendshipComponent {
  @Input() set data(data: any) {
    this._data = data;
  }

  public _data: any;

  
  constructor(private router: Router) {}

  navigateTo(name: string) {
    this.router.navigate(['/profile', name]);
  }
}
