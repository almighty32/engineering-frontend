import { INatureOfCivilStructureWorksModel } from '@shared/model/shared/igeneral-model';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { IElectronicNatureOfWork } from './i-electronic-nature-of-work';

export interface IElectronicPermit {
  id?: string;
  permitNo?: string;
  applicant: IApplicant;
  constructionLocation: IConstructionLocation;
  buildingPermit: IBuildingPermitModel;
  signatories: ISignatory[];
  scopeOfWorks: IScopeOfWork[];
  natureOfSystemInstallation: IElectronicNatureOfWork[];
  dateApproved?: Date;
  applicationNo: string;
  applicationType: string;
  lotOwner: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
