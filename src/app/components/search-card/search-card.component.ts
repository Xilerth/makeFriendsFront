import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'xilerth-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input() set data(data: any) {
    this._data = data;
    this.calculatePercentage();
  }

  public _data: any;
  public percentage = 0;

  constructor(private router: Router) {}

  calculatePercentage() {
    this.percentage = Math.round(
      (this._data.value.accepted.length /
        (this._data.value.accepted.length + this._data.value.denied.length) ||
        0) * 100
    );
  }

  navigateTo(name: string) {
    this.router.navigate(['/profile', name]);
  }
}
