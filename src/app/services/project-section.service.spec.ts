import { TestBed } from '@angular/core/testing';

import { ProjectSectionService } from './project-section.service';

describe('ProjectSectionService', () => {
  let service: ProjectSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
