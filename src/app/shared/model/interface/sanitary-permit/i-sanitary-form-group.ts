import { AbstractControl, FormGroup } from '@angular/forms';
import { ISignatory } from '../I-signatory';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { ISanitaryPermit } from './isanitary-permit-model';
import { ISanitaryWaterSupply } from './i-sanitary-water-supply';
import { ISanitarySystemOfDisposal } from './i-sanitary-system-of-disposal';

export interface ISanitaryPermitFormGroup extends FormGroup {
  value: ISanitaryPermit;
  controls: {
    applicant: AbstractControl<IApplicant>;
    constructionLocation: AbstractControl<IConstructionLocation>;
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    signatories: AbstractControl<ISignatory[]>;
    scopeOfWorks: AbstractControl<IScopeOfWork[]>;
    waterSupplies: AbstractControl<ISanitaryWaterSupply[]>;
    systemOfDisposals: AbstractControl<ISanitarySystemOfDisposal[]>;
    applicationNo: AbstractControl;
    applicationStatus: AbstractControl;
    permitNo: AbstractControl;
    dateApproved?: AbstractControl;
  };
}
