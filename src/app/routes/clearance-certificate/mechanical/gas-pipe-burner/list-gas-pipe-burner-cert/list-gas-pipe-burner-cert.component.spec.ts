import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGasPipeBurnerCertComponent } from './list-gas-pipe-burner-cert.component';

describe('ListGasPipeBurnerCertComponent', () => {
  let component: ListGasPipeBurnerCertComponent;
  let fixture: ComponentFixture<ListGasPipeBurnerCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGasPipeBurnerCertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListGasPipeBurnerCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
