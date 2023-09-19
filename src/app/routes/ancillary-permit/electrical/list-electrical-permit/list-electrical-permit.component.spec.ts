import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectricalPermitComponent } from './list-electrical-permit.component';

describe('ListElectricalPermitComponent', () => {
  let component: ListElectricalPermitComponent;
  let fixture: ComponentFixture<ListElectricalPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListElectricalPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElectricalPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
