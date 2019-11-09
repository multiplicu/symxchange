import { TestBed } from '@angular/core/testing';

import { PoweronService } from './poweron.service';

describe('PoweronService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoweronService = TestBed.get(PoweronService);
    expect(service).toBeTruthy();
  });
});
