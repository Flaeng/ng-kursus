import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktoplysningerComponent } from './kontaktoplysninger.component';

describe('KontaktoplysningerComponent', () => {
  let component: KontaktoplysningerComponent;
  let fixture: ComponentFixture<KontaktoplysningerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktoplysningerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaktoplysningerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
