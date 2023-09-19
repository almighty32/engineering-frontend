import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGasPipeBurnerCertDialogComponent } from './create-gas-pipe-burner-cert-dialog.component';

describe('CreateGasPipeBurnerCertDialogComponent', () => {
  let component: CreateGasPipeBurnerCertDialogComponent;
  let fixture: ComponentFixture<CreateGasPipeBurnerCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateGasPipeBurnerCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGasPipeBurnerCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
