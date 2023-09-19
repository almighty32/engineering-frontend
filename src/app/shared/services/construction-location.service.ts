import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IConstructionLocationFormGroup } from '@shared/model/interface/shared/i-construction-location-form-group';

@Injectable({
  providedIn: 'root',
})
export class ConstructionLocationService {
  form = this.fb.group({
    id: [''],
    lotNo: [''],
    blockNo: [''],
    tctNo: [''],
    taxDecNo: [''],
    street: [''],
    barangay: [''],
    cityMun: ['Prosperidad'],
  }) as IConstructionLocationFormGroup;

  formDefault = {
    id: '',
    lotNo: '',
    blockNo: '',
    tctNo: '',
    taxDecNo: '',
    street: '',
    barangay: '',
    cityMun: 'Prosperidad',
  };

  constructor(private fb: FormBuilder) {}
}
