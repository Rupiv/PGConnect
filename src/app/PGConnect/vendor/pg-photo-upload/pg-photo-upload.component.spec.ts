import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPhotoUploadComponent } from './pg-photo-upload.component';

describe('PgPhotoUploadComponent', () => {
  let component: PgPhotoUploadComponent;
  let fixture: ComponentFixture<PgPhotoUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgPhotoUploadComponent]
    });
    fixture = TestBed.createComponent(PgPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
