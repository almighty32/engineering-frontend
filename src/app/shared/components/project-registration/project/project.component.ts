import { Component, OnInit } from '@angular/core';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();

  constructor() {}

  ngOnInit(): void {
    this.projectRegistration.projectRegistrationNo = 10;
    this.projectRegistration.projectType = 'New Project';
    this.projectRegistration.projectName = 'projectName';
    this.projectRegistration.projectLocation = 'projectLocation';
    this.projectRegistration.projectClassification = 'projectClassification';
    this.projectRegistration.rightOverLand = 'Owner';
    this.projectRegistration.projectZoningClassification = 'Residential';
  }
}
