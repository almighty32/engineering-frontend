import { AbstractControl, FormGroup } from '@angular/forms';
import { IArchitecturalConstructionLocation } from './I-architectural-permit-construction-location';

export interface IArchitecturalConstructionLocationFormGroup extends FormGroup {
  value: IArchitecturalConstructionLocation;
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
