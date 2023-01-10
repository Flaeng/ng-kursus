import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReactKontaktoplysningerComponent } from './crud-react-kontaktoplysninger.component';

describe('CrudReactKontaktoplysningerComponent', () => {
  let component: CrudReactKontaktoplysningerComponent;
  let fixture: ComponentFixture<CrudReactKontaktoplysningerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReactKontaktoplysningerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudReactKontaktoplysningerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
