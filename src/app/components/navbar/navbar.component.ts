import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xilerth-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.altKey) {
      document.querySelectorAll('.accesibility').forEach((el) => {
        el.classList.add('accesibility-on');
      });
    }
    if (event.altKey && event.key === 'b') {
      this.router.navigate(['searchFriends']);
    }
    if (event.altKey && event.key === 't') {
      this.router.navigate(['topFriends']);
    }
    if (event.altKey && event.key === 'r') {
      this.router.navigate(['makemepopular']);
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEventUp(event: KeyboardEvent) {
    if (!event.altKey) {
      document.querySelectorAll('.accesibility').forEach((el) => {
        el.classList.remove('accesibility-on');
      });
    }
  }

  constructor(private router: Router) {}
}
