import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAirconRefCertComponent } from './list-aircon-ref-cert.component';

describe('ListAirconRefCertComponent', () => {
  let component: ListAirconRefCertComponent;
  let fixture: ComponentFixture<ListAirconRefCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAirconRefCertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAirconRefCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
