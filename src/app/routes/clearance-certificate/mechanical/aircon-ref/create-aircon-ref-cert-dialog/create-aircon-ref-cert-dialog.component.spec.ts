import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirconRefCertDialogComponent } from './create-aircon-ref-cert-dialog.component';

describe('CreateAirconRefCertDialogComponent', () => {
  let component: CreateAirconRefCertDialogComponent;
  let fixture: ComponentFixture<CreateAirconRefCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAirconRefCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAirconRefCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
