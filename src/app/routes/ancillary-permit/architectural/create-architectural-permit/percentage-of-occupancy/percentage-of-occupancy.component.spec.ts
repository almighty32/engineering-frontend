import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfOccupancyComponent } from './percentage-of-occupancy.component';

describe('PercentageOfOccupancyComponent', () => {
  let component: PercentageOfOccupancyComponent;
  let fixture: ComponentFixture<PercentageOfOccupancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PercentageOfOccupancyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageOfOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
