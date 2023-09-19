import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IConstructionLocation } from '../shared/I-construction-location';

export interface IElectricalPermit {
  id?: string;
  applicant: IApplicant;
  constructionLocation: IConstructionLocation;
  buildingPermit: IBuildingPermitModel;
  signatories: ISignatory[];
  scopeOfWorks: IScopeOfWork[];
  dateApproved?: Date;
  applicationNo: string;
  permitNo: string;
  totalConnectionLoad: string;
  totalTransformerCapacity: string;
  totalGeneratorCapacity: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
