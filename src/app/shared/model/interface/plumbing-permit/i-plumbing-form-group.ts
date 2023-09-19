import { AbstractControl, FormGroup } from '@angular/forms';
import { ISignatory } from '../I-signatory';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { IPlumbingPermit } from './i-plumbing-permit-model';
import { IPlumbingPermitFixture } from './i-plumbing-permit-fixtures';

export interface IPlumbingPermitFormGroup extends FormGroup {
  value: IPlumbingPermit;
  controls: {
    applicant: AbstractControl<IApplicant>;
    constructionLocation: AbstractControl<IConstructionLocation>;
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    signatories: AbstractControl<ISignatory[]>;
    scopeOfWorks: AbstractControl<IScopeOfWork[]>;
    fixTures: AbstractControl<IPlumbingPermitFixture[]>;
    permitNo: AbstractControl;
    dateApproved?: AbstractControl;
    applicationNo: AbstractControl;
  };
}
