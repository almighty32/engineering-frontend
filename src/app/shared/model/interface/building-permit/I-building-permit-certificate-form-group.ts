import { AbstractControl, FormGroup } from '@angular/forms';
import { IBuildingPermitModel } from './I-building-permit';
import { IBuildingPermitCertificateModel } from './I-building-permit-certificate';

export interface IBuildingPermitCertificateFormGroup extends FormGroup {
  value: IBuildingPermitCertificateModel;
  controls: {
    buildingPermit: AbstractControl<IBuildingPermitModel>;
    fsecNo: AbstractControl;
    projectTitle: AbstractControl;
    fsecDateIssued: AbstractControl;
    orNo: AbstractControl;
    datePaid: AbstractControl;
  };
}
