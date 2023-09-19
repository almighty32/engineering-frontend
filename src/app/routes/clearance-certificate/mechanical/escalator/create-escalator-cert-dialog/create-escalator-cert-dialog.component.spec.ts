import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEscalatorCertDialogComponent } from './create-escalator-cert-dialog.component';

describe('CreateEscalatorCertDialogComponent', () => {
  let component: CreateEscalatorCertDialogComponent;
  let fixture: ComponentFixture<CreateEscalatorCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEscalatorCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEscalatorCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
