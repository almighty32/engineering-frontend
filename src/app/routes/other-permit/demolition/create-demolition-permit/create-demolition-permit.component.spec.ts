import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemolitionPermitComponent } from './create-demolition-permit.component';

describe('CreateDemolitionPermitComponent', () => {
  let component: CreateDemolitionPermitComponent;
  let fixture: ComponentFixture<CreateDemolitionPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDemolitionPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemolitionPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
