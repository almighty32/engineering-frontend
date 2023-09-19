import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { IElectronicPermit } from '@shared/model/interface/electronic/i-electronic-permit-model';
import { FormBuilder } from '@angular/forms';
import { IElectronicPermitFormGroup } from '@shared/model/interface/electronic/i-electronic-form-group';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { INatureOfCivilStructureWorksModel } from '@shared/model/shared/igeneral-model';
import { IElectronicNatureOfWork } from '@shared/model/interface/electronic/i-electronic-nature-of-work';

@Injectable({
  providedIn: 'root',
})
export class ElectronicPermitService {
  private baseUrl = '/v1/electronics';

  private _electronicPermit = new BehaviorSubject({} as IElectronicPermit);
  private _electronicPermitList = new BehaviorSubject<IElectronicPermit[]>([]);
  electronicPermit = this._electronicPermit.asObservable();
  electronicPermitList = this._electronicPermitList.asObservable();

  scopeOfWorks: IScopeOfWork[] = [
    {
      description: 'New Installation',
      isSelected: false,
      details: '',
    },
    {
      description: 'Annual Inspection',
      isSelected: false,
      details: '',
    },
  ];

  natureOfSystemInstallation: IElectronicNatureOfWork[] = [
    {
      description: 'Telecommunication System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Electronics Fire Alarm System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Electronics Computerized Process Controll Automation System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Broadcasting System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Sound Communication System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Building Automation Management and Control System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Television System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Centralized Clock System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Building Wrining Utilizing Copper Cable Fiber Optic Cable or Other Medial Electronics System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Infoirmation Technology System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Sound System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Security and Alarm System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Electronics and Control Conveyor System',
      isSelected: false,
      details: '',
    },
    {
      description: 'Any Other Electronics And I.T Sstem, Equipment, Appratus, Device and/or Component',
      isSelected: false,
      details: '',
    },
  ];


  form = this.fb.group({
    id: [''],
    permitNo: [''],
    applicant: [{} as IApplicant],
    constructionLocation: [{} as IConstructionLocation],
    buildingPermit: [{} as IBuildingPermitModel],
    signatories: [{} as ISignatory[]],
    scopeOfWorks: [{} as IScopeOfWork[]],
    natureOfSystemInstallation: [{} as IElectronicNatureOfWork[]],
    dateApproved: [''],
    applicationNo: [''],
    applicationType: ['Pending'],
    lotOwner: [''],
  }) as IElectronicPermitFormGroup;

  formDefault = {
    id: '',
    permitNo: '',
    applicant: {} as IApplicant,
    constructionLocation: {} as IConstructionLocation,
    buildingPermit: {} as IBuildingPermitModel,
    signatories: {} as ISignatory,
    scopeOfWorks: {} as IScopeOfWork,
    natureOfSystemInstallation: {} as IElectronicNatureOfWork,
    dateApproved: '',
    applicationNo: '',
    applicationType: 'Pending',
    lotOwner: '',
  };

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IElectronicPermit) {
    this._electronicPermit.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IElectronicPermit>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IElectronicPermit[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this._electronicPermitList.next(res);
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
    return this.http.patch<IElectronicPermit>(`${this.baseUrl}/${item.id}`, item);
  }
  approve(id: string) {
    return this.http.patch<IElectronicPermit>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<IElectronicPermit>(`${this.baseUrl}/${id}`);
  }
}
