import { AbstractControl, FormGroup } from '@angular/forms';
import { ISignatory } from '../I-signatory';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { IElectronicNatureOfWork } from './i-electronic-nature-of-work';
import { IElectronicPermit } from './i-electronic-permit-model';

export interface IElectronicPermitFormGroup extends FormGroup {
  value: IElectronicPermit;
  controls: {
    permitNo?: AbstractControl;
    applicant: AbstractControl<IApplicant>;
    constructionLocation: AbstractControl<IConstructionLocation>;
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    signatories: AbstractControl<ISignatory[]>;
    scopeOfWorks: AbstractControl<IScopeOfWork[]>;
    natureOfSystemInstallation: AbstractControl<IElectronicNatureOfWork[]>;
    dateApproved?: AbstractControl;
    applicationNo: AbstractControl;
    applicationType: AbstractControl;
    lotOwner: AbstractControl;
  };
}
