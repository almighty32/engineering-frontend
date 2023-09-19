import { AbstractControl, FormGroup } from '@angular/forms';
import { ISignatory } from '../I-signatory';
import { IBuildingPermitModel } from '../building-permit/I-building-permit';
import { IApplicant } from '../i-applicant';
import { IConstructionLocation } from '../shared/I-construction-location';
import { IScopeOfWork } from '../shared/I-scope-of-work';
import { IMechanicalEquipmentsInstalled } from './I-mechanical-equipments-installed';
import { IMechanicalPermit } from './i-mechanical-permit-model';

export interface IMechanicalPermitFormGroup extends FormGroup {
  value: IMechanicalPermit;
  controls: {
    permitNo: AbstractControl;
    applicant: AbstractControl<IApplicant>;
    constructionLocation: AbstractControl<IConstructionLocation>;
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    signatories: AbstractControl<ISignatory[]>;
    scopeOfWorks: AbstractControl<IScopeOfWork[]>;
    mechanicalEquipmentsInstalled: AbstractControl<IMechanicalEquipmentsInstalled[]>;
    dateApproved?: AbstractControl;
    applicationStatus: AbstractControl;
    applicationNo: AbstractControl;
  };
}
