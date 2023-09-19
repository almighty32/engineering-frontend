import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternalCombustionEngineCertDialogComponent } from './create-internal-combustion-engine-cert-dialog.component';

describe('CreateInternalCombustionEngineCertDialogComponent', () => {
  let component: CreateInternalCombustionEngineCertDialogComponent;
  let fixture: ComponentFixture<CreateInternalCombustionEngineCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInternalCombustionEngineCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateInternalCombustionEngineCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
