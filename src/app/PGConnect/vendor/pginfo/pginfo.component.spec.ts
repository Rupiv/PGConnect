import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PginfoComponent } from './pginfo.component';

describe('PginfoComponent', () => {
  let component: PginfoComponent;
  let fixture: ComponentFixture<PginfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PginfoComponent]
    });
    fixture = TestBed.createComponent(PginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
