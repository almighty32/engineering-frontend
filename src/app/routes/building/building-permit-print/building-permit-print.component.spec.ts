import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitPrintComponent } from './building-permit-print.component';

describe('BuildingPermitPrintComponent', () => {
  let component: BuildingPermitPrintComponent;
  let fixture: ComponentFixture<BuildingPermitPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitPrintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
