import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarPortafolioFreelancerComponent } from './review-freelancer-portfolio.component';

describe('RevisarPortafolioFreelancerComponent', () => {
  let component: RevisarPortafolioFreelancerComponent;
  let fixture: ComponentFixture<RevisarPortafolioFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarPortafolioFreelancerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarPortafolioFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
