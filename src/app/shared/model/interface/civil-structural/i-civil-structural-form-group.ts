import { AbstractControl, FormGroup } from '@angular/forms';
import { ICivilOrStructuralPermit } from './i-civil-structural-permit-model';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { ICivilStructuralNatureOfWork } from './i-civil-structural-nature-of-work';
import { ICivilStructuralConstructionLocation } from './i-civil-structural-construction-location';

export interface ICivilStructuralFormGroup extends FormGroup {
  value: ICivilOrStructuralPermit;
  controls: {
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    applicant: AbstractControl<IApplicant>;
    signatories: AbstractControl<ISignatory[]>;
    scopeOfWorks: AbstractControl<IScopeOfWork[]>;
    natureOfWorks: AbstractControl<ICivilStructuralNatureOfWork[]>;
    constructionLocation: AbstractControl<ICivilStructuralConstructionLocation>;
    csPermitNo: AbstractControl;
    applicationNo: AbstractControl;
    dateApproved: AbstractControl;
    applicationStatus: AbstractControl;
  };
}
