import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitCreateDlgComponent } from './building-permit-create-dlg.component';

describe('BuildingPermitCreateDlgComponent', () => {
  let component: BuildingPermitCreateDlgComponent;
  let fixture: ComponentFixture<BuildingPermitCreateDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitCreateDlgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitCreateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
