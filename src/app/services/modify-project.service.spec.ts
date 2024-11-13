import { TestBed } from '@angular/core/testing';

import { ModifyProjectService } from './modify-project.service';

describe('ModifyProjectService', () => {
  let service: ModifyProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
