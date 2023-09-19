import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IArchitecturalConstructionLocation } from './I-architectural-permit-construction-location';
import { IArchitecturalPermitFacilities } from './I-architectural-permit-facilities';
import { IArchitecturalPermitFireCodeConformance } from './I-architectural-permit-firecode-conformance';
import { IArchitecturalPermitScopeOfWork } from './I-architectural-permit-scope-of-work';

export interface IArchitecturalPermitSiteOccupancyPercentage {
  buildingFootPrint: number;
  imperviousSurfaceArea: number;
  unpavedSurfaceArea: number;
  others: number;
  othersLabel: number;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
