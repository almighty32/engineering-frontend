import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectronicPermitComponent } from './list-electronic-permit.component';

describe('ListElectronicPermitComponent', () => {
  let component: ListElectronicPermitComponent;
  let fixture: ComponentFixture<ListElectronicPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListElectronicPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElectronicPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
