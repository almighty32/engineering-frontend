import { AbstractControl, FormGroup } from '@angular/forms';
import { IArchitectural } from './i-architectural-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IArchitecturalPermitFacilities } from './I-architectural-permit-facilities';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IArchitecturalPermitScopeOfWork } from './I-architectural-permit-scope-of-work';
import { IArchitecturalConstructionLocation } from './I-architectural-permit-construction-location';
import { IArchitecturalPermitFireCodeConformance } from './I-architectural-permit-firecode-conformance';
import { IArchitecturalPermitSiteOccupancyPercentage } from './i-architectural-permit-site-occupancy-percentage';

export interface IArchitecturalPermitFormGroup extends FormGroup {
  value: IArchitectural;
  controls: {
    dateApproved: AbstractControl;
    applicationStatus: AbstractControl;
    applicationNo: AbstractControl;
    applicant: AbstractControl<IApplicant>;
    signatories: AbstractControl<ISignatory[]>;
    architecturalPermitNo: AbstractControl;
    buildingPermit?: AbstractControl<IBuildingPermitModel>;
    facilities: AbstractControl<IArchitecturalPermitFacilities[]>;
    scopeOfWork: AbstractControl<IArchitecturalPermitScopeOfWork[]>;
    constructionLocation: AbstractControl<IArchitecturalConstructionLocation>;
    conformanceToFireCode: AbstractControl<IArchitecturalPermitFireCodeConformance[]>;
    siteOccupancyPercentage: AbstractControl<IArchitecturalPermitSiteOccupancyPercentage>;
  };
}
