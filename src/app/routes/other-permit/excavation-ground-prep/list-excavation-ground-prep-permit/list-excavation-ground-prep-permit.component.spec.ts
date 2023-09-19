import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExcavationGroundPrepPermitComponent } from './list-excavation-ground-prep-permit.component';

describe('ListExcavationGroundPrepPermitComponent', () => {
  let component: ListExcavationGroundPrepPermitComponent;
  let fixture: ComponentFixture<ListExcavationGroundPrepPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExcavationGroundPrepPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExcavationGroundPrepPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
