import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemolitionPermitComponent } from './list-demolition-permit.component';

describe('ListDemolitionPermitComponent', () => {
  let component: ListDemolitionPermitComponent;
  let fixture: ComponentFixture<ListDemolitionPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemolitionPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemolitionPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
