import { TestBed } from '@angular/core/testing';

import { CoronanewService } from './coronanew.service';

describe('CoronanewService', () => {
  let service: CoronanewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronanewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
