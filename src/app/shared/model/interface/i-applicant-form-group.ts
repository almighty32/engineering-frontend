import { AbstractControl, FormGroup } from '@angular/forms';
import { IApplicant } from './i-applicant';

export interface IApplicantFormGroup extends FormGroup {
  value: IApplicant;
  controls: {
    id?: AbstractControl;
    lastName: AbstractControl;
    firstName: AbstractControl;
    middleInitial: AbstractControl;
    companyName: AbstractControl;
    tin: AbstractControl;

    addressNo: AbstractControl;
    addressStreet: AbstractControl;
    addressBarangay: AbstractControl;
    addressCity: AbstractControl;
    addressZipCode: AbstractControl;
    contactNo: AbstractControl;
  };
}
