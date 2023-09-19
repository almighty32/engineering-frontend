import { AbstractControl, FormGroup } from '@angular/forms';
import { IBuildingPermitConstructionLocation } from './I-building-permit-construction-location';

export interface IBuildingPermitConstructionLocationFormGroup extends FormGroup {
  value: IBuildingPermitConstructionLocation;
  controls: {
    lotNo: AbstractControl;
    blockNo: AbstractControl;
    tctNo: AbstractControl;
    taxDecNo: AbstractControl;
    street: AbstractControl;
    barangay: AbstractControl;
    cityMun: AbstractControl;
  };
}
