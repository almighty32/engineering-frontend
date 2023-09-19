import { IProjectPropertyModel } from '../shared/iproject-property-model';

export interface IProjectRegistrationlModel {
  id: string;
  applicationType: string;
  // person
  personFullName: string;
  personAddress: string;
  personNationality: string;
  personCivilStatus: string;
  personGender: string;
  personAge: string;
  personContactNo: string;

  // business
  businessName: string;
  businessAddress: string;
  businessOrganizationType: string;
  businesskind: string;
  businessCapitalization: number;
  businessContactNo: string;

  // broker
  brokerName: string;
  brokerAddress: string;
  brokerContactNo: string;

  // board of director
  boardOfDirectorName: string;
  boardOfDirectorPosition: string;
  boardOfDirectorContactNo: string;

  // property
  property: IProjectPropertyModel[];

  // project
  projectRegistrationDate: Date;
  projectRegistrationNo: number;
  projectType: string;
  projectName: string;
  projectLocation: string;
  projectClassification: string;

  // duration
  durationStart: Date;
  durationEnd: Date;
  rightOverLand: string;
  rightOverLandOthersSpecify: string;
  projectZoningClassification: string;
}
