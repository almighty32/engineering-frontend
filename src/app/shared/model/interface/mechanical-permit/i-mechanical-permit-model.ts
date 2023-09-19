import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IMechanicalEquipmentsInstalled } from './I-mechanical-equipments-installed';

export interface IMechanicalPermit {
  id?: string;
  permitNo: string;
  applicant: IApplicant;
  constructionLocation: IConstructionLocation;
  buildingPermit: IBuildingPermitModel;
  signatories: ISignatory[];
  scopeOfWorks: IScopeOfWork[];
  mechanicalEquipmentsInstalled: IMechanicalEquipmentsInstalled[];
  dateApproved?: Date;
  applicationStatus: string;
  applicationNo: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
