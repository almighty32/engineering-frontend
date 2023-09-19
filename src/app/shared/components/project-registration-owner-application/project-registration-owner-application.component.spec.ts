import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectRegistrationOwnerApplicationComponent } from './project-registration-owner-application.component';

describe('OwnerApplicationComponent', () => {
  let component: ProjectRegistrationOwnerApplicationComponent;
  let fixture: ComponentFixture<ProjectRegistrationOwnerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectRegistrationOwnerApplicationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRegistrationOwnerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
