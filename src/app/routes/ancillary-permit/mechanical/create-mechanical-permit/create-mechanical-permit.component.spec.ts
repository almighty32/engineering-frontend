import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMechanicalPermitComponent } from './create-mechanical-permit.component';

describe('CreateMechanicalPermitComponent', () => {
  let component: CreateMechanicalPermitComponent;
  let fixture: ComponentFixture<CreateMechanicalPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMechanicalPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMechanicalPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
