import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IPlumbingPermitFixture } from './i-plumbing-permit-fixtures';

export interface IPlumbingPermit {
  id?: string;
  applicant: IApplicant;
  constructionLocation: IConstructionLocation;
  buildingPermit: IBuildingPermitModel;
  signatories: ISignatory[];
  scopeOfWorks: IScopeOfWork[];
  fixTures: IPlumbingPermitFixture[];
  permitNo: string;
  dateApproved?: Date;
  applicationNo: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
