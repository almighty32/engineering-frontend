import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuildingPermitDialogComponent } from './edit-building-permit-dialog.component';

describe('EditBuildingPermitDialogComponent', () => {
  let component: EditBuildingPermitDialogComponent;
  let fixture: ComponentFixture<EditBuildingPermitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBuildingPermitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBuildingPermitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
