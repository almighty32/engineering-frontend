import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemporaryServiceConnectionComponent } from './create-temporary-service-connection.component';

describe('CreateTemporaryServiceConnectionComponent', () => {
  let component: CreateTemporaryServiceConnectionComponent;
  let fixture: ComponentFixture<CreateTemporaryServiceConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTemporaryServiceConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTemporaryServiceConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
