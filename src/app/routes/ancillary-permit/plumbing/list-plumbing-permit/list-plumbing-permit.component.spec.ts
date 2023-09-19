import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlumbingPermitComponent } from './list-plumbing-permit.component';

describe('ListPlumbingPermitComponent', () => {
  let component: ListPlumbingPermitComponent;
  let fixture: ComponentFixture<ListPlumbingPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlumbingPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlumbingPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
