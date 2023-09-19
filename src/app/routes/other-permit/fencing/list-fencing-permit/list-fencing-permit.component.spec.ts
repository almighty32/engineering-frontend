import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFencingPermitComponent } from './list-fencing-permit.component';

describe('ListFencingPermitComponent', () => {
  let component: ListFencingPermitComponent;
  let fixture: ComponentFixture<ListFencingPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFencingPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFencingPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
