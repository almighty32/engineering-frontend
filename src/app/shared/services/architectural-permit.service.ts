import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IArchitecturalPermitFormGroup } from '@shared/model/interface/architectural-permit/I-architectural-form-group';
import { IArchitecturalConstructionLocation } from '@shared/model/interface/architectural-permit/I-architectural-permit-construction-location';
import { IArchitecturalPermitFacilities } from '@shared/model/interface/architectural-permit/I-architectural-permit-facilities';
import { IArchitecturalPermitFireCodeConformance } from '@shared/model/interface/architectural-permit/I-architectural-permit-firecode-conformance';
import { IArchitecturalPermitScopeOfWork } from '@shared/model/interface/architectural-permit/I-architectural-permit-scope-of-work';
import { IArchitectural } from '@shared/model/interface/architectural-permit/i-architectural-permit';
import { IArchitecturalPermitSiteOccupancyPercentage } from '@shared/model/interface/architectural-permit/i-architectural-permit-site-occupancy-percentage';
import { IArchitecturalPermitSiteOccupancyFormGroup } from '@shared/model/interface/architectural-permit/i-architectural-permit-site-occupancy-percentage-form-group';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { BehaviorSubject } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class ArchitecturalPermitService {
  private baseUrl = '/v1/architecturals';

  private _architecturalPermit = new BehaviorSubject({} as IArchitectural);
  private _architecturalPermitList = new BehaviorSubject<IArchitectural[]>([]);

  scopeOfWorks: IArchitecturalPermitScopeOfWork[] = [
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
      description: 'Accessory Building/Structure',
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

  facilities: IArchitecturalPermitFacilities[] = [
    {
      description: 'Stairs',
      isSelected: false,
      details: '',
    },
    {
      description: 'Wash Rooms and Toilets',
      isSelected: false,
      details: '',
    },
    {
      description: 'Switches, Controls, Buzzers',
      isSelected: false,
      details: '',
    },
    {
      description: 'Drinking Fountains',
      isSelected: false,
      details: '',
    },
    {
      description: 'Walkaways',
      isSelected: false,
      details: '',
    },
    {
      description: 'Lifts/Elevators',
      isSelected: false,
      details: '',
    },
    {
      description: 'Handrails',
      isSelected: false,
      details: '',
    },
    {
      description: 'Public Telephones',
      isSelected: false,
      details: '',
    },
    {
      description: 'Corridors',
      isSelected: false,
      details: '',
    },
    {
      description: 'Ramps',
      isSelected: false,
      details: '',
    },
    {
      description: 'Thresholds',
      isSelected: false,
      details: '',
    },
    {
      description: 'Seating Accommodations',
      isSelected: false,
      details: '',
    },
    {
      description: 'Doors, Entrances & Thresholds',
      isSelected: false,
      details: '',
    },
    {
      description: 'Parking Areas',
      isSelected: false,
      details: '',
    },
    {
      description: 'Floor Finishes',
      isSelected: false,
      details: '',
    },
    {
      description: 'Others',
      isSelected: false,
      details: '',
    },
  ];

  conformanceToFireCodes: IArchitecturalPermitFireCodeConformance[] = [
    {
      description: 'Number and Width of Exit Doors',
      isSelected: false,
      details: '',
    },
    {
      description: 'Fire Walls',
      isSelected: false,
      details: '',
    },
    {
      description: 'Width of Corridors',
      isSelected: false,
      details: '',
    },
    {
      description: 'Fire Fighting and Safety Facilities',
      isSelected: false,
      details: '',
    },
    {
      description: 'Distance to Fire Exits',
      isSelected: false,
      details: '',
    },
    {
      description: 'Smoke Detectors',
      isSelected: false,
      details: '',
    },
    {
      description: 'Access to Public Streets',
      isSelected: false,
      details: '',
    },
    {
      description: 'Emergency Lights',
      isSelected: false,
      details: '',
    },
    {
      description: 'Others',
      isSelected: false,
      details: '',
    },
  ];

  percentageOfOccupancyForm = this.fb.group({
    id: [''],
    buildingFootPrint: [0, Validators.required],
    imperviousSurfaceArea: [0, Validators.required],
    unpavedSurfaceArea: [0, Validators.required],
    others: [0, Validators.required],
    othersLabel: [0, Validators.required],
  }) as IArchitecturalPermitSiteOccupancyFormGroup;

  form = this.fb.group({
    id: [''],
    dateApproved: [new Date()],
    applicationStatus: ['Pending'],
    applicationNo: [''],
    applicant: [{} as IApplicant],
    signatories: [[] as ISignatory[]],
    architecturalPermitNo: [''],
    buildingPermit: [{} as IBuildingPermitModel],
    facilities: [[] as IArchitecturalPermitFacilities[]],
    scopeOfWork: [[] as IArchitecturalPermitScopeOfWork[]],
    constructionLocation: [{} as IArchitecturalConstructionLocation],
    conformanceToFireCode: [[] as IArchitecturalPermitFireCodeConformance[]],
    siteOccupancyPercentage: [{} as IArchitecturalPermitSiteOccupancyPercentage],
  }) as IArchitecturalPermitFormGroup;

  formDefault = {
    id: '',
    dateApproved: new Date(),
    applicationStatus: 'Pending',
    applicationNo: '',
    applicant: {} as IApplicant,
    signatories: [] as ISignatory[],
    architecturalPermitNo: '',
    buildingPermit: {} as IBuildingPermitModel,
    facilities: [] as IArchitecturalPermitFacilities[],
    scopeOfWork: [] as IArchitecturalPermitScopeOfWork[],
    constructionLocation: {} as IArchitecturalConstructionLocation,
    conformanceToFireCode: [] as IArchitecturalPermitFireCodeConformance[],
    siteOccupancyPercentage: {} as IArchitecturalPermitSiteOccupancyPercentage,
  };

  percentageOfOccupancyDefault = {
    id: '',
    buildingFootPrint: 0,
    imperviousSurfaceArea: 0,
    unpavedSurfaceArea: 0,
    others: 0,
    othersLabel: 0,
  };

  architecturalPermit = this._architecturalPermit.asObservable();
  architecturalPermitList = this._architecturalPermitList.asObservable();

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IArchitectural) {
    this._architecturalPermit.next(data);
  }

  setArchitecturalPermitListData(data: IArchitectural[]) {
    this._architecturalPermitList.next(data);
  }

  create(item: any) {
    delete item.id;
    return this.http.post<IArchitectural>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IArchitectural[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setArchitecturalPermitListData(res);
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {},
    });
  }

  update(item: any) {
    return this.http.patch<IArchitectural>(`${this.baseUrl}/${item.id}`, item);
  }
  approve(id: string) {
    return this.http.patch<IArchitectural>(`${this.baseUrl}/approve/${id}`, {});
  }

  findOne(id: string | null) {
    return this.http.get<IArchitectural>(`${this.baseUrl}/${id}`);
  }

  resetCheckboxes() {
    this.scopeOfWorks.forEach(scopeOfWork => {
      scopeOfWork.isSelected = false;
    });

    this.facilities.forEach(facility => {
      facility.isSelected = false;
    });

    this.conformanceToFireCodes.forEach(fireCode => {
      fireCode.isSelected = false;
    });
  }
}
