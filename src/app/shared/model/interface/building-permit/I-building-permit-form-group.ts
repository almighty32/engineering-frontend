import { AbstractControl, FormGroup } from '@angular/forms';
import { ICharacterOfOccupancy } from 'app/routes/building/create-building-permit/use-or-character-of-occupancy/use-or-character-of-occupancy.component';
import { IScopeOfWork } from '../../shared/iscope-of-work';
import { IApplicant } from '../i-applicant';
import { ISignatory } from '../I-signatory';
import { IBuildingPermitModel } from './I-building-permit';
import { IBuildingPermitScopeOfWork } from './I-building-permit-scope-of-work';
import { IConstructionLocation } from '../shared/I-construction-location';

export interface IBuildingPermitFormGroup extends FormGroup {
  value: IBuildingPermitModel;
  controls: {
    id?: AbstractControl;
    scopeOfWork: AbstractControl<IBuildingPermitScopeOfWork[]>;
    applicant: AbstractControl<IApplicant>;
    signatory: AbstractControl;
    constructionLocation: AbstractControl<IConstructionLocation>;
    dateApproved: AbstractControl;
    characterOfOccupancy: AbstractControl<ICharacterOfOccupancy[]>;
    buildingPermitNo: AbstractControl;
    applicationNo: AbstractControl;
    areaNo: AbstractControl;
    isApproved: AbstractControl;
    applicationType: AbstractControl;
    buildingType: AbstractControl;
    formOfOwnership: AbstractControl;
    occupancyClassified: AbstractControl;
    numberOfUnits: AbstractControl;
    numberOfStory: AbstractControl;
    floorArea: AbstractControl;
    lotArea: AbstractControl;
    totalEstimatedCost: AbstractControl;
    buildingCost: AbstractControl;
    electricalCost: AbstractControl;
    mechanicalCost: AbstractControl;
    ElectronicCost: AbstractControl;
    plumbingCost: AbstractControl;
    expectedCompletion: AbstractControl;
    equipmentCost1: AbstractControl;
    equipmentCost2: AbstractControl;
    equipmentCost3: AbstractControl;
    equipmentCost4: AbstractControl;
    proposedDate: AbstractControl;
  };
}
