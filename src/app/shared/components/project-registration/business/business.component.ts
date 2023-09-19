import { Component, OnInit } from '@angular/core';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();

  constructor() {}

  ngOnInit(): void {
    this.projectRegistration.businessName = 'My Business';
    this.projectRegistration.businessAddress = 'North Reclemation Area Cebu City';
    this.projectRegistration.businessOrganizationType = 'My Organization';
    this.projectRegistration.businesskind = 'Pawnshop';
    this.projectRegistration.businessCapitalization = 5000;
    this.projectRegistration.businessContactNo = '09394300929';
  }
}
