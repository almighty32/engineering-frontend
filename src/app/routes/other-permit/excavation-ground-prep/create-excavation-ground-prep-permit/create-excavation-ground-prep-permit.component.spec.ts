import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExcavationGroundPrepPermitComponent } from './create-excavation-ground-prep-permit.component';

describe('CreateExcavationGroundPrepPermitComponent', () => {
  let component: CreateExcavationGroundPrepPermitComponent;
  let fixture: ComponentFixture<CreateExcavationGroundPrepPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExcavationGroundPrepPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExcavationGroundPrepPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
