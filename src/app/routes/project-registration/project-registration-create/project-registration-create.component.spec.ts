import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegistrationCreateComponent } from './project-registration-create.component';

describe('ProjectRegistrationCreateComponent', () => {
  let component: ProjectRegistrationCreateComponent;
  let fixture: ComponentFixture<ProjectRegistrationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRegistrationCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectRegistrationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
