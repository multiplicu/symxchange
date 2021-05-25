import { TestBed } from '@angular/core/testing';

import { CreditReportService } from './credit-report.service';

describe('CreditReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditReportService = TestBed.get(CreditReportService);
    expect(service).toBeTruthy();
  });
});
