import { AbstractControl, FormGroup } from '@angular/forms';
import { IApplicant } from '../i-applicant';

export interface IApplicantOwnerConsent {
  id: string;
  fullName: string;
  address: string;
  isOwner: boolean;
  lotOwner: string;
  lotOwnerAddress: string;
  lotOwnerCTCno: string;
  lotOwnerCTCdateissued: Date;
  lotOwnerPlaceIssued: string;
  ctcNo: string;
  dateIssued: Date;
  placeIssued: string;
}

export interface IApplicantOwnerConsentFormGroup extends FormGroup {
  value: IApplicantOwnerConsent;
  controls: {
    id: AbstractControl;
    fullName: AbstractControl;
    address: AbstractControl;
    date: AbstractControl;
    ctcNo: AbstractControl;
    dateIssued: AbstractControl;
    placeIssued: AbstractControl;
    isOwner: AbstractControl;
    lotOwner: AbstractControl;
    lotOwnerAddress: AbstractControl;
    lotOwnerDate: AbstractControl;
    lotOwnerCTCno: AbstractControl;
    lotOwnerCTCdateissued: AbstractControl;
    lotOwnerPlaceIssued: AbstractControl;
  };
}
