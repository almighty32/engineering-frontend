import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEscalatorCertComponent } from './list-escalator-cert.component';

describe('ListEscalatorCertComponent', () => {
  let component: ListEscalatorCertComponent;
  let fixture: ComponentFixture<ListEscalatorCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEscalatorCertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEscalatorCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
