import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitCreateComponent } from './building-permit-create.component';

describe('BuildingPermitCreateComponent', () => {
  let component: BuildingPermitCreateComponent;
  let fixture: ComponentFixture<BuildingPermitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
