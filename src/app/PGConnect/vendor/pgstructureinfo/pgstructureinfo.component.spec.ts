import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgstructureinfoComponent } from './pgstructureinfo.component';

describe('PgstructureinfoComponent', () => {
  let component: PgstructureinfoComponent;
  let fixture: ComponentFixture<PgstructureinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgstructureinfoComponent]
    });
    fixture = TestBed.createComponent(PgstructureinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
