import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View-available-projectsComponent } from './View-available-projects.component';

describe('View-available-projectsComponent', () => {
  let component: View-available-projectsComponent;
  let fixture: ComponentFixture<View-available-projectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View-available-projectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View-available-projectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
