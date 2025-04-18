import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePgOffersComponent } from './available-pg-offers.component';

describe('AvailablePgOffersComponent', () => {
  let component: AvailablePgOffersComponent;
  let fixture: ComponentFixture<AvailablePgOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailablePgOffersComponent]
    });
    fixture = TestBed.createComponent(AvailablePgOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
