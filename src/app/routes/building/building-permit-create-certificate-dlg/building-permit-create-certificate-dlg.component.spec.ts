import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitCreateCertificateDlgComponent } from './building-permit-create-certificate-dlg.component';

describe('BuildingPermitCreateCertificateDlgComponent', () => {
  let component: BuildingPermitCreateCertificateDlgComponent;
  let fixture: ComponentFixture<BuildingPermitCreateCertificateDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitCreateCertificateDlgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitCreateCertificateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
