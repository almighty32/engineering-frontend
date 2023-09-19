import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { ICivilStructuralConstructionLocation } from './i-civil-structural-construction-location';
import { ICivilStructuralNatureOfWork } from './i-civil-structural-nature-of-work';

export interface ICivilOrStructuralPermit {
  id?: string;
  buildingPermit: IBuildingPermitModel;
  applicant: IApplicant;
  signatories: ISignatory[];
  scopeOfWorks: IScopeOfWork[];
  natureOfWorks: ICivilStructuralNatureOfWork[];
  constructionLocation: ICivilStructuralConstructionLocation;

  csPermitNo: string;
  applicationNo: string;
  dateApproved?: Date;
  applicationStatus: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
