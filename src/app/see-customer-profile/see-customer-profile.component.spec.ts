import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCustomerProfileComponent } from './see-customer-profile.component';

describe('SeeCustomerProfileComponent', () => {
  let component: SeeCustomerProfileComponent;
  let fixture: ComponentFixture<SeeCustomerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeCustomerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
