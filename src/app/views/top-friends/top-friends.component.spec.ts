import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFriendsComponent } from './top-friends.component';

describe('TopFriendsComponent', () => {
  let component: TopFriendsComponent;
  let fixture: ComponentFixture<TopFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
