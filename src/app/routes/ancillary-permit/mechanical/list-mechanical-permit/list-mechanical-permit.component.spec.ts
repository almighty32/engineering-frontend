import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMechanicalPermitComponent } from './list-mechanical-permit.component';

describe('ListMechanicalPermitComponent', () => {
  let component: ListMechanicalPermitComponent;
  let fixture: ComponentFixture<ListMechanicalPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMechanicalPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMechanicalPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
