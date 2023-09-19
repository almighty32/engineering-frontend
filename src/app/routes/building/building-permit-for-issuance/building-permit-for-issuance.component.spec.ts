import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitForIssuanceComponent } from './building-permit-for-issuance.component';

describe('BuildingPermitForIssuanceComponent', () => {
  let component: BuildingPermitForIssuanceComponent;
  let fixture: ComponentFixture<BuildingPermitForIssuanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitForIssuanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitForIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
