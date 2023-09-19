import { Injectable } from '@angular/core';
import { ISanitarySystemOfDisposal } from '@shared/model/interface/sanitary-permit/i-sanitary-system-of-disposal';
import { ISanitaryWaterSupply } from '@shared/model/interface/sanitary-permit/i-sanitary-water-supply';
import { ISanitaryPermit } from '@shared/model/interface/sanitary-permit/isanitary-permit-model';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { FormBuilder } from '@angular/forms';
import { ISanitaryPermitFormGroup } from '@shared/model/interface/sanitary-permit/i-sanitary-form-group';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ISignatory } from '@shared/model/interface/I-signatory';

@Injectable({
  providedIn: 'root',
})
export class SanitaryPermitService {
  private _sanitaryPermit = new BehaviorSubject({} as ISanitaryPermit);
  private _sanitaryPermitList = new BehaviorSubject<ISanitaryPermit[]>([]);

  sanitaryPermit = this._sanitaryPermit.asObservable();
  sanitaryPermitList = this._sanitaryPermitList.asObservable();

  private baseUrl = '/v1/sanitary';

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

  waterSupplies: ISanitaryWaterSupply[] = [
    {
      description: 'Shallow Well',
      isSelected: false,
      details: '',
    },
    {
      description: 'Deep Well Pump Set',
      isSelected: false,
      details: '',
    },
    {
      description: 'City/Municipality Water System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Others',
      isSelected: false,
      details: '',
    },
  ];
  systemOfDisposals: ISanitarySystemOfDisposal[] = [
    {
      description: 'Waste Water',
      isSelected: false,
      details: '',
    },
    {
      description: 'Imhoff tank',
      isSelected: false,
      details: '',
    },
    {
      description: 'Sanitary Sewer Condition',
      isSelected: false,
      details: '',
    },
    {
      description: 'Sub-surfaces and Filter',
      isSelected: false,
      details: '',
    },
    {
      description: 'Surface Drainage',
      isSelected: false,
      details: '',
    },
    {
      description: 'Street Canal',
      isSelected: false,
      details: '',
    },
    {
      description: 'Water Course',
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
    waterSupplies: [[] as ISanitaryWaterSupply[]],
    systemOfDisposals: [[] as ISanitarySystemOfDisposal[]],
    applicationNo: [''],
    applicationStatus: ['Pending'],
    permitNo: [''],
    dateApproved: [''],
  }) as ISanitaryPermitFormGroup;

  formDefault = {
    id: '',
    applicant: {} as IApplicant,
    constructionLocation: {} as IConstructionLocation,
    buildingPermit: {} as IBuildingPermitModel,
    signatories: [] as ISignatory[],
    scopeOfWorks: [] as IScopeOfWork[],
    waterSupplies: [] as ISanitaryWaterSupply[],
    systemOfDisposals: [] as ISanitarySystemOfDisposal[],
    applicationNo: '',
    applicationStatus: 'Pending',
    permitNo: '',
    dateApproved: '',
  };

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: ISanitaryPermit) {
    console.log({ data });
    this._sanitaryPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ISanitaryPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ISanitaryPermit[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        console.log(res);
        this._sanitaryPermitList.next(res);
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  update(item: any) {
    return this.http.patch<ISanitaryPermit>(`${this.baseUrl}/${item.id}`, item);
  }

  approve(id: string) {
    return this.http.patch<ISanitaryPermit>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<ISanitaryPermit>(`${this.baseUrl}/${id}`);
  }
}
