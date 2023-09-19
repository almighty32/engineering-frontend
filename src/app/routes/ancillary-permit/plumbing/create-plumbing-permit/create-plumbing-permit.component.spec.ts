import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlumbingPermitComponent } from './create-plumbing-permit.component';

describe('CreatePlumbingPermitComponent', () => {
  let component: CreatePlumbingPermitComponent;
  let fixture: ComponentFixture<CreatePlumbingPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlumbingPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlumbingPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
