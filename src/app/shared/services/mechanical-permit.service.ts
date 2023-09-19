import { Injectable } from '@angular/core';
import { IMechanicalPermit } from '@shared/model/interface/mechanical-permit/i-mechanical-permit-model';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { FormBuilder } from '@angular/forms';
import { IMechanicalPermitFormGroup } from '@shared/model/interface/mechanical-permit/i-mechanical-form-group';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IMechanicalEquipmentsInstalled } from '@shared/model/interface/mechanical-permit/I-mechanical-equipments-installed';

@Injectable({
  providedIn: 'root',
})
export class MechanicalPermitService {
  private _mechanicalPermit = new BehaviorSubject({} as IMechanicalPermit);
  private _mechanicalPermitList = new BehaviorSubject<IMechanicalPermit[]>([]);
  mechanicalPermit = this._mechanicalPermit.asObservable();
  mechanicalPermitList = this._mechanicalPermitList.asObservable();

  scopeOfWorks: IScopeOfWork[] = [
    {
      description: 'New Construction',
      isSelected: false,
      details: '',
    },
    {
      description: 'Alteration',
      isSelected: false,
      details: '',
    },
    {
      description: 'Repair',
      isSelected: false,
      details: '',
    },
    {
      description: 'Demolition',
      isSelected: false,
      details: '',
    },
    {
      description: 'Erection',
      isSelected: false,
      details: '',
    },
    {
      description: 'Renovation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Moving',
      isSelected: false,
      details: '',
    },
    {
      description: 'Accessory Building or Structure',
      isSelected: false,
      details: '',
    },
    {
      description: 'Addition',
      isSelected: false,
      details: '',
    },
    {
      description: 'Conversion',
      isSelected: false,
      details: '',
    },
    {
      description: 'Raising',
      isSelected: false,
      details: '',
    },
  ];

  mechanicalEquipmentsInstalled: IMechanicalEquipmentsInstalled[] = [
    {
      description: 'Boiler',
      isSelected: false,
      details: '',
    },
    {
      description: 'Central Airconditioning',
      isSelected: false,
      details: '',
    },
    {
      description: 'Moving Sidewalk',
      isSelected: false,
      details: '',
    },
    {
      description: 'Pressure Vessel',
      isSelected: false,
      details: '',
    },
    {
      description: 'Mechanical Ventilation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Pumps',
      isSelected: false,
      details: '',
    },
    {
      description: 'Internal Combustion Engine',
      isSelected: false,
      details: '',
    },
    {
      description: 'Escalator',
      isSelected: false,
      details: '',
    },
  ];

  form = this.fb.group({
    id: [''],
    permitNo: ['-'],
    applicant: [{} as IApplicant],
    constructionLocation: [{} as IConstructionLocation],
    buildingPermit: [{} as IBuildingPermitModel],
    signatories: [[] as ISignatory[]],
    scopeOfWorks: [[] as IScopeOfWork[]],
    mechanicalEquipmentsInstalled: [[] as IMechanicalEquipmentsInstalled[]],
    dateApproved: [''],
    applicationStatus: [''],
    applicationNo: [''],
  }) as IMechanicalPermitFormGroup;

  formDefault = {
    id: '',
    permitNo: '-',
    applicant: {} as IApplicant,
    constructionLocation: {} as IConstructionLocation,
    buildingPermit: {} as IBuildingPermitModel,
    signatories: [] as ISignatory[],
    scopeOfWorks: [] as IScopeOfWork[],
    mechanicalEquipmentsInstalled: [] as IMechanicalEquipmentsInstalled[],
    dateApproved: '',
    applicationStatus: '',
    applicationNo: '',
  };

  private baseUrl = '/v1/mechanical';
  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IMechanicalPermit) {
    console.log({ data });
    this._mechanicalPermit.next(data);
  }
  setMechanicalPermitList(data: IMechanicalPermit[]) {
    this._mechanicalPermitList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IMechanicalPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IMechanicalPermit[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setMechanicalPermitList(res);
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
    return this.http.patch<IMechanicalPermit>(`${this.baseUrl}/${item.id}`, item);
  }
  approve(id: string) {
    return this.http.patch<IMechanicalPermit>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<IMechanicalPermit>(`${this.baseUrl}/${id}`);
  }
}
