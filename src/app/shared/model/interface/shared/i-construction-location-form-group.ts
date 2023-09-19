import { AbstractControl, FormGroup } from '@angular/forms';
import { IConstructionLocation } from './I-construction-location';

export interface IConstructionLocationFormGroup extends FormGroup {
  value: IConstructionLocation;
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
