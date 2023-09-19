import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPermitListComponent } from './building-permit-list.component';

describe('BuildingPermitListComponent', () => {
  let component: BuildingPermitListComponent;
  let fixture: ComponentFixture<BuildingPermitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingPermitListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingPermitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
