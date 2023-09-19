import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnfiredPressureVesselCertComponent } from './list-unfired-pressure-vessel-cert.component';

describe('ListUnfiredPressureVesselCertComponent', () => {
  let component: ListUnfiredPressureVesselCertComponent;
  let fixture: ComponentFixture<ListUnfiredPressureVesselCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUnfiredPressureVesselCertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListUnfiredPressureVesselCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
