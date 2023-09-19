import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnfiredPressureVesselCertDialogComponent } from './create-unfired-pressure-vessel-cert-dialog.component';

describe('CreateUnfiredPressureVesselCertDialogComponent', () => {
  let component: CreateUnfiredPressureVesselCertDialogComponent;
  let fixture: ComponentFixture<CreateUnfiredPressureVesselCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUnfiredPressureVesselCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUnfiredPressureVesselCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
