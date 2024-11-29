import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteDevelopersServiceComponent } from './FavoriteDevelopersService.component';

describe('FavoriteDevelopersServiceComponent', () => {
  let component: FavoriteDevelopersServiceComponent;
  let fixture: ComponentFixture<FavoriteDevelopersService-projectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteDevelopersService-projectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteDevelopersService-projectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
