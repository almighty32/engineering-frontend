import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitCreateCertificateComponent } from './building-permit-create-certificate.component';

describe('BuildingPermitCreateCertificateComponent', () => {
  let component: BuildingPermitCreateCertificateComponent;
  let fixture: ComponentFixture<BuildingPermitCreateCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitCreateCertificateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitCreateCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
