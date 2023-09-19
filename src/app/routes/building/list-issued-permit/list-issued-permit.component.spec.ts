import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIssuedPermitComponent } from './list-issued-permit.component';

describe('ListIssuedPermitComponent', () => {
  let component: ListIssuedPermitComponent;
  let fixture: ComponentFixture<ListIssuedPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIssuedPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIssuedPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
