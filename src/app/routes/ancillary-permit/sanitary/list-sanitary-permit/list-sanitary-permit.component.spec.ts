import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSanitaryPermitComponent } from './list-sanitary-permit.component';

describe('ListSanitaryPermitComponent', () => {
  let component: ListSanitaryPermitComponent;
  let fixture: ComponentFixture<ListSanitaryPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSanitaryPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSanitaryPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
