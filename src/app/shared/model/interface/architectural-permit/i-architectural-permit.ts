import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IArchitecturalConstructionLocation } from './I-architectural-permit-construction-location';
import { IArchitecturalPermitFacilities } from './I-architectural-permit-facilities';
import { IArchitecturalPermitFireCodeConformance } from './I-architectural-permit-firecode-conformance';
import { IArchitecturalPermitScopeOfWork } from './I-architectural-permit-scope-of-work';
import { IArchitecturalPermitSiteOccupancyPercentage } from './i-architectural-permit-site-occupancy-percentage';

export interface IArchitectural {
  id: string;
  dateApproved: Date;
  applicationStatus: string;
  applicationNo: string;
  applicant: IApplicant;
  signatories: ISignatory[];
  architecturalPermitNo: string;
  buildingPermit?: IBuildingPermitModel;
  facilities: IArchitecturalPermitFacilities[];
  scopeOfWork: IArchitecturalPermitScopeOfWork[];
  constructionLocation: IArchitecturalConstructionLocation;
  conformanceToFireCode: IArchitecturalPermitFireCodeConformance[];
  siteOccupancyPercentage: IArchitecturalPermitSiteOccupancyPercentage;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
