import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForConstructionOwnedComponent } from './for-construction-owned.component';

describe('ForConstructionOwnedComponent', () => {
  let component: ForConstructionOwnedComponent;
  let fixture: ComponentFixture<ForConstructionOwnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForConstructionOwnedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForConstructionOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
