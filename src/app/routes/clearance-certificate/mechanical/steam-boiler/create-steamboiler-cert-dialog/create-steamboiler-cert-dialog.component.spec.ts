import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSteamboilerCertDialogComponent } from './create-steamboiler-cert-dialog.component';

describe('CreateSteamboilerCertDialogComponent', () => {
  let component: CreateSteamboilerCertDialogComponent;
  let fixture: ComponentFixture<CreateSteamboilerCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSteamboilerCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSteamboilerCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
