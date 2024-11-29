import { TestBed } from '@angular/core/testing';

import { FavoriteDevelopersService } from './FavoriteDevelopersService.service';

describe('ModifyProjectService', () => {
  let service: FavoriteDevelopersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteDevelopersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
