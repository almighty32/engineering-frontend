import { AbstractControl, FormGroup } from '@angular/forms';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { IElectricalPermit } from './i-electrical-permit-model';
import { IConstructionLocation } from '../shared/I-construction-location';

export interface IElectricalPermitFormGroup extends FormGroup {
  value: IElectricalPermit;
  controls: {
    applicant: AbstractControl<IApplicant>;
    constructionLocation: AbstractControl<IConstructionLocation>;
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    signatories: AbstractControl<ISignatory[]>;
    scopeOfWorks: AbstractControl<IScopeOfWork[]>;
    dateApproved?: AbstractControl;
    applicationNo: AbstractControl;
    permitNo: AbstractControl;
    totalConnectionLoad: AbstractControl;
    totalTransformerCapacity: AbstractControl;
    totalGeneratorCapacity: AbstractControl;
  };
}
