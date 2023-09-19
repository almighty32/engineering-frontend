import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitRequirementsListDlgComponent } from './building-permit-requirements-list-dlg.component';

describe('BuildingPermitRequirementsListDlgComponent', () => {
  let component: BuildingPermitRequirementsListDlgComponent;
  let fixture: ComponentFixture<BuildingPermitRequirementsListDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitRequirementsListDlgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitRequirementsListDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
