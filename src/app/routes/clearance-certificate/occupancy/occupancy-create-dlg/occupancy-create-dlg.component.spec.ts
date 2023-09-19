import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyCreateDlgComponent } from './occupancy-create-dlg.component';

describe('OccupancyCreateDlgComponent', () => {
  let component: OccupancyCreateDlgComponent;
  let fixture: ComponentFixture<OccupancyCreateDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OccupancyCreateDlgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OccupancyCreateDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
