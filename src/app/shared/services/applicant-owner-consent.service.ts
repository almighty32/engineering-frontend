import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IApplicant } from '@shared/model/interface/i-applicant';
import {
  IApplicantOwnerConsent,
  IApplicantOwnerConsentFormGroup,
} from '@shared/model/interface/shared/i-applicant-owner-consent';

@Injectable({
  providedIn: 'root',
})
export class ApplicantOwnerConsentService {
  form = this.fb.group({
    id: [''],
    fullName: ['', Validators.required],
    address: ['', Validators.required],
    date: [new Date()],
    ctcNo: ['', Validators.required],
    dateIssued: [new Date()],
    placeIssued: ['', Validators.required],
    isOwner: [false],
    lotOwner: ['', Validators.required],
    lotOwnerAddress: ['', Validators.required],
    lotOwnerDate: [new Date()],
    lotOwnerCTCno: ['', Validators.required],
    lotOwnerCTCdateissued: [new Date()],
    lotOwnerPlaceIssued: ['', Validators.required],
  }) as IApplicantOwnerConsentFormGroup;

  constructor(private fb: FormBuilder) {}

  formSetVal() {
    this.form.get('lotOwner')?.setValue(this.form.get('fullName')?.value);
    this.form.get('lotOwnerAddress')?.setValue(this.form.get('address')?.value);
    this.form.get('lotOwnerDate')?.setValue(this.form.get('date')?.value);
    this.form.get('lotOwnerCTCno')?.setValue(this.form.get('ctcNo')?.value);
    this.form.get('lotOwnerCTCdateissued')?.setValue(this.form.get('dateIssued')?.value);
    this.form.get('lotOwnerPlaceIssued')?.setValue(this.form.get('placeIssued')?.value);
  }

  formRemoveVal() {
    this.form.get('lotOwner')?.reset();
    this.form.get('lotOwnerAddress')?.reset();
    this.form.get('lotOwnerDate')?.reset();
    this.form.get('lotOwnerCTCno')?.reset();
    this.form.get('lotOwnerCTCdateissued')?.reset();
    this.form.get('lotOwnerPlaceIssued')?.reset();
  }

  formDefault = {
    id: '',
    fullName: '',
    address: '',
    date: new Date(),
    ctcNo: '',
    dateIssued: new Date(),
    placeIssued: '',
    isOwner: false,
    lotOwner: '',
    lotOwnerAddress: '',
    lotOwnerDate: new Date(),
    lotOwnerCTCno: '',
    lotOwnerCTCdateissued: new Date(),
    lotOwnerPlaceIssued: '',
  };
}
