import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastEventsComponent } from './toast-events.component';

describe('ToastEventsComponent', () => {
  let component: ToastEventsComponent;
  let fixture: ComponentFixture<ToastEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
