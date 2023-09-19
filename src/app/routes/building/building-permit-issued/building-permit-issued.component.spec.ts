import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitIssuedComponent } from './building-permit-issued.component';

describe('BuildingPermitIssuedComponent', () => {
  let component: BuildingPermitIssuedComponent;
  let fixture: ComponentFixture<BuildingPermitIssuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitIssuedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
