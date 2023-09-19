import { Component, Input, OnInit } from '@angular/core';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';

@Component({
  selector: 'app-project-registration-owner-application',
  templateUrl: './project-registration-owner-application.component.html',
  styleUrls: ['./project-registration-owner-application.component.scss'],
})
export class ProjectRegistrationOwnerApplicationComponent implements OnInit {
  @Input() title = '';

  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();

  constructor() {}

  ngOnInit(): void {
    this.projectRegistration.applicationType = 'Person';
    this.projectRegistration.personFullName = 'Jordan Torreon';
    this.projectRegistration.personAddress = 'Address';
    this.projectRegistration.personNationality = 'Amirican';
    this.projectRegistration.personCivilStatus = 'Single';
    this.projectRegistration.personGender = 'Male';
    this.projectRegistration.personAge = '20';
    this.projectRegistration.personContactNo = '09394300929';
  }
}
