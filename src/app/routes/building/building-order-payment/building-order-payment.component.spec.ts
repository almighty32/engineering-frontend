import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingOrderPaymentComponent } from './building-order-payment.component';

describe('BuildingOrderPaymentComponent', () => {
  let component: BuildingOrderPaymentComponent;
  let fixture: ComponentFixture<BuildingOrderPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingOrderPaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingOrderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
