import { TestBed } from '@angular/core/testing';

import { FindbyService } from './findby.service';

describe('FindbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindbyService = TestBed.get(FindbyService);
    expect(service).toBeTruthy();
  });
});
