import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerApplicantComponent } from './owner-applicant.component';

describe('OwnerApplicantComponent', () => {
  let component: OwnerApplicantComponent;
  let fixture: ComponentFixture<OwnerApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerApplicantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
