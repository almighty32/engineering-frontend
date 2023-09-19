import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectronicPermitComponent } from './create-electronic-permit.component';

describe('CreateElectronicPermitComponent', () => {
  let component: CreateElectronicPermitComponent;
  let fixture: ComponentFixture<CreateElectronicPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectronicPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectronicPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
