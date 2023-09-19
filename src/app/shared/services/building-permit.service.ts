import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IBuildingPermitFormGroup } from '@shared/model/interface/building-permit/I-building-permit-form-group';
import { IBuildingPermitScopeOfWork } from '@shared/model/interface/building-permit/I-building-permit-scope-of-work';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IScopeOfWork } from '@shared/model/shared/iscope-of-work';
import { ICharacterOfOccupancy } from 'app/routes/building/create-building-permit/use-or-character-of-occupancy/use-or-character-of-occupancy.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { IApplicantOwnerConsent } from '@shared/model/interface/shared/i-applicant-owner-consent';

@Injectable({
  providedIn: 'root',
})
export class BuildingPermitService {
  success(arg0: string, arg1: { keepAfterRouteChange: boolean; }) {
    throw new Error('Method not implemented.');
  }
 // Service method
getBuildingPermitById(id: string): Observable<any> {
  return this.http.get<any>(`/api/building-permits/${id}`);
}

  percentageOfOccupancyDefault = {
    id: '',
    buildingFootPrint: 0,
    imperviousSurfaceArea: 0,
    unpavedSurfaceArea: 0,
    others: 0,
    othersLabel: 0,
  };
  characterOfOccupancies: ICharacterOfOccupancy[] = [
    {
      groupName: 'Group A',
      groupDescription: 'Residential (Dwellings)',
      completed: false,
      subItems: [
        { description: 'Single', isSelected: false },
        { description: 'Duplex', isSelected: false },
        { description: 'Residential R-1, R-2', isSelected: false },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group B',
      groupDescription: 'Residential',
      completed: false,
      subItems: [
        { description: 'Hotel', isSelected: false },
        { description: 'Dormitory', isSelected: false },
        { description: 'Residential R-3, R-4, R-5', isSelected: false },
        { description: 'Motel', isSelected: false },
        { description: 'Townhouse', isSelected: false },
        { description: 'Boarding House, Lodging House', isSelected: false },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group C',
      groupDescription: 'Educational, Recreational',
      completed: false,
      subItems: [
        { description: 'School Building', isSelected: false },
        { description: 'Civic Center', isSelected: false },
        { description: 'Club House', isSelected: false },
        { description: 'School Auditorium, Gymnasium', isSelected: false },
        { description: 'Church, Mosque, Temple, Chapel', isSelected: false },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group D',
      groupDescription: 'Institutional',
      completed: false,
      subItems: [
        { description: 'Hospital', isSelected: false },
        { description: 'Home for the aged', isSelected: false },
        { description: 'Government Office', isSelected: false },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group E',
      groupDescription: 'Commercial',
      completed: false,
      subItems: [
        { description: 'Bank', isSelected: false },
        { description: 'Drinking/Dining Establishments', isSelected: false },
        { description: 'Shop (i.e Dress Shop, Tailoring, Barbershop, etc.)', isSelected: false },
        { description: 'Store', isSelected: false },
        { description: 'Shopping Center/Mall', isSelected: false },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group F',
      groupDescription: 'Light Industrial',
      completed: false,
      subItems: [
        {
          description: 'Factory/plant (using incombustible/non-explosive materials)',
          isSelected: false,
        },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group G',
      groupDescription: 'Medium Industrial',
      completed: false,
      subItems: [
        {
          description: 'Storage/ Warehouse (For Hazardous/Highly Flammable Materials)',
          isSelected: false,
        },
        { description: 'Factory (For Hazardous/ Highly Flammable Materials)', isSelected: false },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group H',
      groupDescription: 'Assembly(Occupant load less than 1,000)',
      completed: false,
      subItems: [
        {
          description: 'Theater, Auditorium, Convention Hall, Grandstand/ Bleacher',
          isSelected: false,
        },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group I',
      groupDescription: 'Assembly(Occupant load 1,000 or more)',
      completed: false,
      subItems: [
        {
          description: 'Coliseum, Sport Complex, Convention Center and Similar Structure',
          isSelected: false,
        },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group J',
      groupDescription: '(J-1) Agricultural',
      completed: false,
      subItems: [
        {
          description: 'Barn Granary, Poultry House, Piggery, Grain Mill, Grain Silo',
          isSelected: false,
        },
        { description: 'Others', isSelected: false },
      ],
    },
    {
      groupName: 'Group J',
      groupDescription: '(J-2) Accessories',
      completed: false,
      subItems: [
        {
          description:
            'Private Carport/Garage, Tower, Swimming Pool, Fence Over 1.5m, Stell/Concrete Tank',
          isSelected: false,
        },
        { description: 'Others', isSelected: false },
      ],
    },
  ];

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
      description: 'Legalization of Existing Building',
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

  form = this.fb.group({
    id: [''],
    scopeOfWork: [[] as IBuildingPermitScopeOfWork[]],
    applicant: [{} as IApplicant],
    signatory: [''],
    constructionLocation: [{} as IConstructionLocation],
    dateApproved: [''],
    characterOfOccupancy: [[] as ICharacterOfOccupancy[]],
    buildingPermitNo: [''],
    applicationNo: [''],
    areaNo: [''],
    isApproved: [false],
    applicationType: ['New'],
    buildingType: ['Simple'],
    formOfOwnership: [''],
    occupancyClassified: [''],
    numberOfUnits: [0],
    numberOfStory: [0],
    floorArea: [0],
    lotArea: [0],
    totalEstimatedCost: [0],
    costOfEquipmentInstalled: [0],
    buildingCost: [0],
    electricalCost: [0],
    mechanicalCost: [0],
    ElectronicCost: [0],
    plumbingCost: [0],
    equipmentCost1: [0],
    equipmentCost2: [0],
    equipmentCost3: [0],
    equipmentCost4: [0],
    expectedCompletion: [''],
    proposedDate: [''],
    signatoryDate: [new Date()],
    applicantOwnerConsent: [{} as IApplicantOwnerConsent],
  }) as unknown as IBuildingPermitFormGroup;

  formDefault = {
    id: '',
    scopeOfWork: [] as IBuildingPermitScopeOfWork[],
    applicant: {} as IApplicant,
    signatory: '',
    constructionLocation: {} as IConstructionLocation,
    dateApproved: '',
    characterOfOccupancy: [] as ICharacterOfOccupancy[],
    buildingPermitNo: '',
    applicationNo: '',
    areaNo: '',
    isApproved: false,
    applicationType: 'New',
    buildingType: 'Simple',
    formOfOwnership: '',
    occupancyClassified: '',
    numberOfUnits: 0,
    numberOfStory: 0,
    floorArea: 0,
    lotArea: 0,
    totalEstimatedCost: 0,
    buildingCost: 0,
    electricalCost: 0,
    mechanicalCost: 0,
    ElectronicCost: 0,
    plumbingCost: 0,
    equipmentCost1: 0,
    equipmentCost2: 0,
    equipmentCost3: 0,
    equipmentCost4: 0,
    expectedCompletion: '',
    proposedDate: '',
    signatoryDate: new Date(),
    applicantOwnerConsent: {} as IApplicantOwnerConsent,
  };

  private _buildingPermit = new BehaviorSubject({} as IBuildingPermitModel);
  private _buildingPermitList = new BehaviorSubject<IBuildingPermitModel[]>([]);
  buildingPermit = this._buildingPermit.asObservable();

  buildingPermitList = this._buildingPermitList.asObservable();

  private baseUrl = '/v1/unified-form-for-building-permit';

  constructor(private http: HttpRequestService, private fb: FormBuilder) {}

  setData(data: IBuildingPermitModel) {
    console.log('The data', { data });
    this._buildingPermit.next(data);
  }

  setBuildingPermitListData(data: IBuildingPermitModel[]) {
    this._buildingPermitList.next(data);
  }

  resetBuildingPermit() {
    const buildingPermit = {} as IBuildingPermitModel;
    buildingPermit.applicationNo = this.getRandomNumbersBy10();
    buildingPermit.buildingPermitNo = this.getRandomNumbersBy8();
    this._buildingPermit.next(buildingPermit);
  }

  create(item: any) {
    console.log(this.form.value);
    // delete item.id;
    return this.http.post<IBuildingPermitModel>(`${this.baseUrl}`, item);
  }

  findAll() {
    const data = this.http.get<IBuildingPermitModel[]>(`${this.baseUrl}`);
    data.subscribe({
      next: res => {
        this.setBuildingPermitListData(res);
      },
      error: err => {
        console.log({
          error: err,
        });
        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }

  approve(id: string) {
    return this.http.patch<IBuildingPermitModel>(`${this.baseUrl}/approve/${id}`, {});
  }
  update(id: string, data: any): Observable<any> {


    return this.http.patch<IBuildingPermitModel>(`${this.baseUrl}/${id}`, data);
  }


  findOne(id: string | null) {
    return this.http.get<IBuildingPermitModel>(`${this.baseUrl}/${id}`);
  }

  findRequirements(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}/requirements`);
  }
  getRandomNumbersBy8() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  }

  getRandomNumbersBy10() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }

  resetCheckboxes() {
    this.scopeOfWorks.forEach(scopeOfWork => {
      scopeOfWork.isSelected = false;
    });

    this.characterOfOccupancies.forEach(character => {
      character.subItems![0].isSelected = false;
    });
  }
}

