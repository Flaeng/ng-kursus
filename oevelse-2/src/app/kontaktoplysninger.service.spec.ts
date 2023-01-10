import { TestBed } from '@angular/core/testing';

import { KontaktoplysningerService } from './kontaktoplysninger.service';

describe('KontaktoplysningerService', () => {
  let service: KontaktoplysningerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontaktoplysningerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
