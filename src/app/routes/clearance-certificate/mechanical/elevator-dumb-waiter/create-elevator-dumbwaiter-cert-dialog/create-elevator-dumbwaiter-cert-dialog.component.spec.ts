import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElevatorDumbwaiterCertDialogComponent } from './create-elevator-dumbwaiter-cert-dialog.component';

describe('CreateElevatorDumbwaiterCertDialogComponent', () => {
  let component: CreateElevatorDumbwaiterCertDialogComponent;
  let fixture: ComponentFixture<CreateElevatorDumbwaiterCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateElevatorDumbwaiterCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateElevatorDumbwaiterCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
