import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMePopularComponent } from './make-me-popular.component';

describe('MakeMePopularComponent', () => {
  let component: MakeMePopularComponent;
  let fixture: ComponentFixture<MakeMePopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeMePopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeMePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
