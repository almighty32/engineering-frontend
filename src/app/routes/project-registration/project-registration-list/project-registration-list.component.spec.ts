import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegistrationListComponent } from './project-registration-list.component';

describe('ProjectRegistrationListComponent', () => {
  let component: ProjectRegistrationListComponent;
  let fixture: ComponentFixture<ProjectRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRegistrationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
