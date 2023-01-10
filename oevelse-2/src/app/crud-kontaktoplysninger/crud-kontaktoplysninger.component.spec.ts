import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudKontaktoplysningerComponent } from './crud-kontaktoplysninger.component';

describe('CrudKontaktoplysningerComponent', () => {
  let component: CrudKontaktoplysningerComponent;
  let fixture: ComponentFixture<CrudKontaktoplysningerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudKontaktoplysningerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudKontaktoplysningerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
