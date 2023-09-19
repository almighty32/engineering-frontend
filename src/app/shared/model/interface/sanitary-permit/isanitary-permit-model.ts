import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IConstructionLocation } from '../shared/I-construction-location';
import { ISanitarySystemOfDisposal } from './i-sanitary-system-of-disposal';
import { ISanitaryWaterSupply } from './i-sanitary-water-supply';

export interface ISanitaryPermit {
  id?: string;
  applicant: IApplicant;
  constructionLocation: IConstructionLocation;
  buildingPermit: IBuildingPermitModel;
  signatories: ISignatory[];
  scopeOfWorks: IScopeOfWork[];
  waterSupplies: ISanitaryWaterSupply[];
  systemOfDisposals: ISanitarySystemOfDisposal[];
  applicationNo: string;
  permitNo: string;
  applicationStatus: string;
  dateApproved?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
