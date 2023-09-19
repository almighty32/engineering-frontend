import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitCertificatesComponent } from './building-permit-certificates.component';

describe('BuildingPermitCertificatesComponent', () => {
  let component: BuildingPermitCertificatesComponent;
  let fixture: ComponentFixture<BuildingPermitCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitCertificatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
