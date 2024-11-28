import { TestBed } from '@angular/core/testing';

import { Service } from './View-available-projects.service';

describe('ModifyProjectService', () => {
  let service: Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
