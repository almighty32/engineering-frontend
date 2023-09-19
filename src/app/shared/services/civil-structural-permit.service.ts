import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ICivilStructuralConstructionLocation } from '@shared/model/interface/civil-structural/i-civil-structural-construction-location';
import { ICivilStructuralFormGroup } from '@shared/model/interface/civil-structural/i-civil-structural-form-group';
import { ICivilStructuralNatureOfWork } from '@shared/model/interface/civil-structural/i-civil-structural-nature-of-work';
import { ICivilOrStructuralPermit } from '@shared/model/interface/civil-structural/i-civil-structural-permit-model';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class CivilStructuralPermitService {
  private baseUrl = '/v1/civil-structural';
  private _civilStructuralPermit = new BehaviorSubject({} as ICivilOrStructuralPermit);
  private _civilStructuralPermitList = new BehaviorSubject<ICivilOrStructuralPermit[]>([]);

  civilStructuralPermit = this._civilStructuralPermit.asObservable();
  civilStructuralPermitList = this._civilStructuralPermitList.asObservable();

  scopeOfWorks: IScopeOfWork[] = [
    {
      description: 'New Construction',
      isSelected: false,
      details: '',
    },
    {
      description: 'Renovation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Raising',
      isSelected: false,
      details: '',
    },
    {
      description: 'Erection',
      isSelected: false,
      details: '',
    },
    {
      description: 'Conversion',
      isSelected: false,
      details: '',
    },
    {
      description: 'Demolition',
      isSelected: false,
      details: '',
    },
    {
      description: 'Addition',
      isSelected: false,
      details: '',
    },
    {
      description: 'Repair',
      isSelected: false,
      details: '',
    },
    {
      description: 'Accessory Building/Structure',
      isSelected: false,
      details: '',
    },
    {
      description: 'Alteration',
      isSelected: false,
      details: '',
    },
    {
      description: 'Moving',
      isSelected: false,
      details: '',
    },
    {
      description: 'Others',
      isSelected: false,
      details: '',
    },
  ];

  natureOfWorks: ICivilStructuralNatureOfWork[] = [
    {
      description: 'Staking',
      isSelected: false,
      details: '',
    },
    {
      description: 'Erection/Lifting',
      isSelected: false,
      details: '',
    },
    {
      description: 'Prestress Works',
      isSelected: false,
      details: '',
    },
    {
      description: 'Excavation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Concrete Framing',
      isSelected: false,
      details: '',
    },
    {
      description: 'Material Testing',
      isSelected: false,
      details: '',
    },
    {
      description: 'Soil Stabilization',
      isSelected: false,
      details: '',
    },
    {
      description: 'Structural Steel Framing',
      isSelected: false,
      details: '',
    },
    {
      description: 'Steel Towers',
      isSelected: false,
      details: '',
    },
    {
      description: 'Piling Works',
      isSelected: false,
      details: '',
    },
    {
      description: 'Slabs',
      isSelected: false,
      details: '',
    },
    {
      description: 'Tanks',
      isSelected: false,
      details: '',
    },
    {
      description: 'Foundation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Walls',
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
    buildingPermit: [{} as IBuildingPermitModel],
    applicant: [{} as IApplicant],
    constructionLocation: [{} as ICivilStructuralConstructionLocation],
    signatories: [[] as ISignatory[]],
    scopeOfWorks: [[] as IScopeOfWork[]],
    natureOfWorks: [[] as ICivilStructuralNatureOfWork[]],
    csPermitNo: [''],
    applicationNo: [''],
    dateApproved: [new Date()],
    applicationStatus: ['Pending'],
  }) as ICivilStructuralFormGroup;

  formDefault = {
    id: '',
    buildingPermit: {} as IBuildingPermitModel,
    applicant: {} as IApplicant,
    constructionLocation: {} as ICivilStructuralConstructionLocation,
    signatories: [] as ISignatory[],
    scopeOfWorks: [] as IScopeOfWork[],
    natureOfWorks: [] as ICivilStructuralNatureOfWork[],
    csPermitNo: '',
    applicationNo: '',
    dateApproved: new Date(),
    applicationStatus: 'Pending',
  };

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: ICivilOrStructuralPermit) {
    this._civilStructuralPermit.next(data);
  }
  setCspListData(data: ICivilOrStructuralPermit[]) {
    this._civilStructuralPermitList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<ICivilOrStructuralPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<ICivilOrStructuralPermit[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setCspListData(res);
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
    return this.http.patch<ICivilOrStructuralPermit>(`${this.baseUrl}/${item.id}`, item);
  }

  approve(id: string) {
    return this.http.patch<ICivilOrStructuralPermit>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<ICivilOrStructuralPermit>(`${this.baseUrl}/${id}`);
  }

  resetCheckboxes() {
    this.scopeOfWorks.forEach(scopeOfWork => {
      scopeOfWork.isSelected = false;
    });

    this.natureOfWorks.forEach(work => {
      work.isSelected = false;
    });
  }
}
