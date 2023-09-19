import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArchitecturalPermitComponent } from './create-architectural-permit.component';

describe('CreateArchitecturalPermitComponent', () => {
  let component: CreateArchitecturalPermitComponent;
  let fixture: ComponentFixture<CreateArchitecturalPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArchitecturalPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArchitecturalPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
