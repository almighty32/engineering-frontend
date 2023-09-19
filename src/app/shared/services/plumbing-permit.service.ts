import { Injectable } from '@angular/core';
import { IPlumbingPermit } from '@shared/model/interface/plumbing-permit/i-plumbing-permit-model';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { FormBuilder } from '@angular/forms';
import { IPlumbingPermitFormGroup } from '@shared/model/interface/plumbing-permit/i-plumbing-form-group';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IPlumbingPermitFixture, IPlumbingPermitFixtureSystem } from '@shared/model/interface/plumbing-permit/i-plumbing-permit-fixtures';

@Injectable({
  providedIn: 'root',
})
export class PlumbingPermitService {
  private baseUrl = '/v1/plumbings';

  private _plumbingPermit = new BehaviorSubject({} as IPlumbingPermit);
  private _plumbingPermitList = new BehaviorSubject<IPlumbingPermit[]>([]);

  plumbingPermit = this._plumbingPermit.asObservable();
  plumbingPermitList = this._plumbingPermitList.asObservable();

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
      description: 'Accessory and Building or Structure',
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

  fixtures: IPlumbingPermitFixture[] = [
    {
      qty: 0,
      kindStatus: '',
      kind: 'Water Closet',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Floor Drain',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Lavatory',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Kitchen Sink',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Faucet',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Shower Head',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Water Meter',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Grease Trap',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Bath Tub',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Slop Sink',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Urinal',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Air Conditioning Unit',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Water Tank/Reservoir',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Bidets',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Laundry Trays',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Dental Cuspidor',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Drinking Fountain',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Bar Sink',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Soda Fountain Sink',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Laboratory Sink',
    },
    {
      qty: 0,
      kindStatus: '',
      kind: 'Sterilizer',
    },
  ];

  fixturesSystems: IPlumbingPermitFixtureSystem[] = [
    {
      description: 'Water Distribution System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Sewage System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Septic Tank',
      isSelected: false,
      details: '',
    },
    {
      description: 'Storm Drainage System',
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
    fixTures: [[] as IPlumbingPermitFixture[]],
    permitNo: [''],
    dateApproved: [''],
    applicationNo: [''],
  }) as IPlumbingPermitFormGroup;

  formDefault = {
    id: '',
    applicant: {} as IApplicant,
    constructionLocation: {} as IConstructionLocation,
    buildingPermit: {} as IBuildingPermitModel,
    signatories: [] as ISignatory[],
    scopeOfWorks: [] as IScopeOfWork[],
    fixTures: [] as IPlumbingPermitFixture[],
    permitNo: '',
    dateApproved: '',
    applicationNo: '',
  };

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IPlumbingPermit) {
    this._plumbingPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IPlumbingPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IPlumbingPermit[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._plumbingPermitList.next(res);
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
    return this.http.patch<IPlumbingPermit>(`${this.baseUrl}/${item.id}`, item);
  }
  approve(id: string) {
    return this.http.patch<IPlumbingPermit>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<IPlumbingPermit>(`${this.baseUrl}/${id}`);
  }
}
