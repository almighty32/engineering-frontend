import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCivilStructuralPermitComponent } from './list-civil-structural-permit.component';

describe('ListCivilStructuralPermitComponent', () => {
  let component: ListCivilStructuralPermitComponent;
  let fixture: ComponentFixture<ListCivilStructuralPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCivilStructuralPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCivilStructuralPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
