import { TestBed } from '@angular/core/testing';

import { ApartmentsServiceService } from './apartments-service.service';

describe('ApartmentsServiceService', () => {
  let service: ApartmentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
