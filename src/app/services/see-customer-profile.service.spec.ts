import { TestBed } from '@angular/core/testing';

import { SeeCustomerProfileService } from './see-customer-profile.service';

describe('SeeCustomerProfileService', () => {
  let service: SeeCustomerProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeCustomerProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
