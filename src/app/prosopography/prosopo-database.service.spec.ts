import { TestBed } from '@angular/core/testing';

import { ProsopoDatabaseService } from './prosopo-database.service';

describe('ProsopoDatabaseService', () => {
  let service: ProsopoDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProsopoDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
