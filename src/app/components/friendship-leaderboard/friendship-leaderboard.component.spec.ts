import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendshipLeaderboardComponent } from './friendship-leaderboard.component';

describe('FriendshipleaderboardComponent', () => {
  let component: FriendshipLeaderboardComponent;
  let fixture: ComponentFixture<FriendshipLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendshipLeaderboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendshipLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
