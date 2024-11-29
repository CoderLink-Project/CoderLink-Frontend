import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSectionComponent } from './freelancer-section.component';

describe('FreelancerSectionComponent', () => {
  let component: FreelancerSectionComponent;
  let fixture: ComponentFixture<FreelancerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
