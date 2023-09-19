import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegistrationCreateDialogComponent } from './project-registration-create-dialog.component';

describe('ProjectRegistrationCreateDialogComponent', () => {
  let component: ProjectRegistrationCreateDialogComponent;
  let fixture: ComponentFixture<ProjectRegistrationCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRegistrationCreateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectRegistrationCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
