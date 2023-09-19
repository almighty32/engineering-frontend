import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSanitaryPermitComponent } from './create-sanitary-permit.component';

describe('CreateSanitaryPermitComponent', () => {
  let component: CreateSanitaryPermitComponent;
  let fixture: ComponentFixture<CreateSanitaryPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSanitaryPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSanitaryPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
