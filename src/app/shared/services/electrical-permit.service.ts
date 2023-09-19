import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IElectricalPermitFormGroup } from '@shared/model/interface/electrical-permit/i-electrical-form-group';
import { IElectricalPermit } from '@shared/model/interface/electrical-permit/i-electrical-permit-model';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class ElectricalPermitService {
  private _electricalPermit = new BehaviorSubject({} as IElectricalPermit);
  private _electricalPermitList = new BehaviorSubject<IElectricalPermit[]>([]);
  electricalPermit = this._electricalPermit.asObservable();
  electricalPermitList = this._electricalPermitList.asObservable();

  scopeOfWorks: IScopeOfWork[] = [
    {
      description: 'New Installation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Reconnection of Service Entrance',
      isSelected: false,
      details: '',
    },
    {
      description: 'Relocation of Service Entrance',
      isSelected: false,
      details: '',
    },
    {
      description: 'Annual Inspection',
      isSelected: false,
      details: '',
    },
    {
      description: 'Separation of Service Entrance',
      isSelected: false,
      details: '',
    },
    {
      description: 'Temporary',
      isSelected: false,
      details: '',
    },
    {
      description: 'Upgrading of Service Entrance',
      isSelected: false,
      details: '',
    },
    {
      description: 'Others',
      isSelected: false,
      details: '',
    },
  ];

  form = this.fb.group({
    id: [''],
    applicant: [{} as IApplicant],
    constructionLocation: [{} as IConstructionLocation],
    buildingPermit: [{} as IBuildingPermitModel],
    signatories: [[] as ISignatory[]],
    scopeOfWorks: [[] as IScopeOfWork[]],
    dateApproved: [''],
    applicationNo: [''],
    permitNo: [''],
    totalConnectionLoad: [''],
    totalTransformerCapacity: [''],
    totalGeneratorCapacity: [''],
  }) as IElectricalPermitFormGroup;

  formDefault = {
    id: '',
    applicant: {} as IApplicant,
    constructionLocation: {} as IConstructionLocation,
    buildingPermit: {} as IBuildingPermitModel,
    signatories: [] as ISignatory[],
    scopeOfWorks: [] as IScopeOfWork[],
    dateApproved: '',
    applicationNo: '',
    permitNo: '',
    totalConnectionLoad: '',
    totalTransformerCapacity: '',
    totalGeneratorCapacity: '',
  };

  private baseUrl = '/v1/electrical';
  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IElectricalPermit) {
    this._electricalPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IElectricalPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IElectricalPermit[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._electricalPermitList.next(res);
      },
      error: err => {
        console.log({
          error: err,
        });

        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        console.log('completed');
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }

  update(item: any) {
    return this.http.patch<IElectricalPermit>(`${this.baseUrl}/${item.id}`, item);
  }
  approve(id: string) {
    return this.http.patch<IElectricalPermit>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<IElectricalPermit>(`${this.baseUrl}/${id}`);
  }
}
