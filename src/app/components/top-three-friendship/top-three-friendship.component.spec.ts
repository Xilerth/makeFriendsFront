import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeFriendshipComponent } from './top-three-friendship.component';

describe('TopThreeFrienshipComponent', () => {
  let component: TopThreeFriendshipComponent;
  let fixture: ComponentFixture<TopThreeFriendshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopThreeFriendshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeFriendshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
