import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuildingPermitComponent } from './create-building-permit.component';

describe('CreateBuildingPermitComponent', () => {
  let component: CreateBuildingPermitComponent;
  let fixture: ComponentFixture<CreateBuildingPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBuildingPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBuildingPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
