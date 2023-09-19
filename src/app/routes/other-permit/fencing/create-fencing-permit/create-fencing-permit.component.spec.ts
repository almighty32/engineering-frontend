import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFencingPermitComponent } from './create-fencing-permit.component';

describe('CreateFencingPermitComponent', () => {
  let component: CreateFencingPermitComponent;
  let fixture: ComponentFixture<CreateFencingPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFencingPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFencingPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
