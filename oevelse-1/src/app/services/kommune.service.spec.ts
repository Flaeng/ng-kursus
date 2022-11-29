import { TestBed } from '@angular/core/testing';

import { KommuneService } from './kommune.service';

describe('KommuneService', () => {
  let service: KommuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KommuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
