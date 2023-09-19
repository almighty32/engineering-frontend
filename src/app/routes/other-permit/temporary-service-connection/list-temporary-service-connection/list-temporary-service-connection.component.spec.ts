import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemporaryServiceConnectionComponent } from './list-temporary-service-connection.component';

describe('ListTemporaryServiceConnectionComponent', () => {
  let component: ListTemporaryServiceConnectionComponent;
  let fixture: ComponentFixture<ListTemporaryServiceConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTemporaryServiceConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTemporaryServiceConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
