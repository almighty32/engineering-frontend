import { AbstractControl, FormGroup } from '@angular/forms';
import { IBuildingPermitModel } from './building-permit/I-building-permit';
import { IOccupancyCertificate } from './I-occupancy-certificate';

export interface IOccupancyCertificateFormGroup extends FormGroup {
  value: IOccupancyCertificate;
  controls: {
    type: AbstractControl;
    occupancyPermitNo: AbstractControl;
    nameOfProject: AbstractControl;
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    fsicNo: AbstractControl;
    fsicDateIssued?: AbstractControl;
    feesPaid: AbstractControl;
    orNo: AbstractControl;
    datePaid?: AbstractControl;
  };
}
