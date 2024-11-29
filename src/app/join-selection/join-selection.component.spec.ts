import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSelectionComponent } from './join-selection.component';

describe('JoinSelectionComponent', () => {
  let component: JoinSelectionComponent;
  let fixture: ComponentFixture<JoinSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
