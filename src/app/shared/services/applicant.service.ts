import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IApplicantFormGroup } from '@shared/model/interface/i-applicant-form-group';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  public applicantData = new BehaviorSubject<string>('');
  private applicantAddress = new BehaviorSubject<string>('');
  private companyData = new BehaviorSubject<string>('');

  currentApplicantData$ = this.applicantData.asObservable();
  currentApplicantAddress$ = this.applicantAddress.asObservable();
  currentCompanyName$ = this.companyData.asObservable();

  form = this.fb.group({
    id: [''],
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    middleInitial: ['', Validators.required],
    companyName: ['', Validators.required],
    tin: [''],
    addressNo: [''],
    addressStreet: [''],
    addressBarangay: [''],
    addressCity: [''],
    addressZipCode: [''],
    contactNo: [''],
  }) as IApplicantFormGroup;

  formDefault = {
    id: '',
    lastName: '',
    firstName: '',
    middleInitial: '',
    companyName: '',
    tin: '',
    addressNo: '',
    addressStreet: '',
    addressBarangay: '',
    addressCity: '',
    addressZipCode: '',
    contactNo: '',
  };

  changeApplicantData(data: string) {
    this.applicantData.next(data);
  }

  changeApplicantAddress(data: string) {
    this.applicantAddress.next(data);
  }

  changeCompanyName(data: string) {
    this.companyData.next(data);
  }

  constructor(private fb: FormBuilder) {}
}
