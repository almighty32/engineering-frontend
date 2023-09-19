import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMechanicalReqNoticeDialogComponent } from './create-mechanical-req-notice-dialog.component';

describe('CreateMechanicalReqNoticeDialogComponent', () => {
  let component: CreateMechanicalReqNoticeDialogComponent;
  let fixture: ComponentFixture<CreateMechanicalReqNoticeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMechanicalReqNoticeDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMechanicalReqNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
