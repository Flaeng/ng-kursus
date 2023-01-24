import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavnComponent } from './navn.component';

describe('NavnComponent', () => {
  let component: NavnComponent;
  let fixture: ComponentFixture<NavnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
