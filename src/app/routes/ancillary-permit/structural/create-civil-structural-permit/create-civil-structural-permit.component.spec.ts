import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCivilStructuralPermitComponent } from './create-civil-structural-permit.component';

describe('CreateCivilStructuralPermitComponent', () => {
  let component: CreateCivilStructuralPermitComponent;
  let fixture: ComponentFixture<CreateCivilStructuralPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCivilStructuralPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCivilStructuralPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
