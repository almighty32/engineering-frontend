import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectricalPermitComponent } from './create-electrical-permit.component';

describe('CreateElectricalPermitComponent', () => {
  let component: CreateElectricalPermitComponent;
  let fixture: ComponentFixture<CreateElectricalPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectricalPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectricalPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
