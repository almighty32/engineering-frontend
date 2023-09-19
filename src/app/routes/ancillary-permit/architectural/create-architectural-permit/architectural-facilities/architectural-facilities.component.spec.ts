import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalFacilitiesComponent } from './architectural-facilities.component';

describe('ArchitecturalFacilitiesComponent', () => {
  let component: ArchitecturalFacilitiesComponent;
  let fixture: ComponentFixture<ArchitecturalFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchitecturalFacilitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitecturalFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
