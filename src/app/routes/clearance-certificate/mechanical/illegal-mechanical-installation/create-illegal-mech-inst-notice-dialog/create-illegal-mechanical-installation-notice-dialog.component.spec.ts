import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from './create-illegal-mechanical-installation-notice-dialog.component';

describe('CreateIllegalMechanicalInstallationNoticeDialogComponent', () => {
  let component: CreateIllegalMechanicalInstallationNoticeDialogComponent;
  let fixture: ComponentFixture<CreateIllegalMechanicalInstallationNoticeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIllegalMechanicalInstallationNoticeDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateIllegalMechanicalInstallationNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
