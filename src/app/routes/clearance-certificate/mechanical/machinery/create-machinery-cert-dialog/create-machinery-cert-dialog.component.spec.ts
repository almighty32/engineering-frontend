import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineryCertDialogComponent } from './create-machinery-cert-dialog.component';

describe('CreateMachineryCertDialogComponent', () => {
  let component: CreateMachineryCertDialogComponent;
  let fixture: ComponentFixture<CreateMachineryCertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMachineryCertDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMachineryCertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
