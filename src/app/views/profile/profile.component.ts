import { FriendsService } from 'src/app/services/friends.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'xilerth-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public name = 'none';
  public people: any = null;

  constructor(
    private friendsService: FriendsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params['id'];
    });

  }

  get peopleData() {
    return this.friendsService.peopleData;
  }

  navigateTo(name: string){
    this.router.navigate(['/profile', name]);
  }

}
