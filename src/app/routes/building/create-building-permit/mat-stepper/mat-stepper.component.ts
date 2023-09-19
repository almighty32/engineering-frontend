import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ProjectRegistrationOwnerApplicationComponent } from '@shared/components/project-registration-owner-application/project-registration-owner-application.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.scss'],
})
export class MatStepperComponent implements OnInit {
  @ViewChild('app') data = new ProjectRegistrationOwnerApplicationComponent();

  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  testVar: any;
  applicationType = new UntypedFormControl('', Validators.required);
  selectapplicationType = new UntypedFormControl('', Validators.required);
  title = 'This is page Title';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  isEditable = false;
  toppings!: UntypedFormGroup;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private fb: UntypedFormBuilder,
    private buildingPermitService: BuildingPermitService
  ) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    // this.setInitialData();
  }

  viewData() {
    this.data.projectRegistration;
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
  create() {
    console.log('create');

    // this.buildingPermitService.create(this.buildingPermit).subscribe({
    //   next: res => {
    //     const ress = res;
    //     console.log(ress);
    //   },
    //   error: err => {
    //     console.log({
    //       error: err,
    //     });
    //   },
    //   complete: () => {
    //     console.log('completed');
    //   },
    // });
  }

  async onClickNext() {
    // this.notificationService.openSnackBar('Record Succesfully Saved.');

    setTimeout(() => {
      // this.router.navigate(['/permit/building']);
    }, 500);
  }

  allComplete = false;

  // updateAllComplete(index: number) {
  //   this.allComplete =
  //     this.occupancy[1].subCharacterOfOccupancy != null &&
  //     this.occupancy[1].subCharacterOfOccupancy.every(t => t.completed);
  // }

  // someComplete(index: number): boolean {
  //   if (this.occupancy[1].subCharacterOfOccupancy == null) {
  //     return false;
  //   }
  //   return (
  //     this.occupancy[1].subCharacterOfOccupancy.filter(t => t.completed).length > 0 &&
  //     !this.allComplete
  //   );
  // }

  // setAll(completed: boolean, index: number) {
  //   this.allComplete = completed;
  //   if (this.occupancy[1].subCharacterOfOccupancy == null) {
  //     return;
  //   }
  //   this.occupancy[1].subCharacterOfOccupancy.forEach(t => (t.completed = completed));
  // }
  setInitialData() {
    (this.buildingPermit.applicationNo = '123456789'),
      (this.buildingPermit.areaNo = '0987654321'),
      (this.buildingPermit.applicant.lastName = 'Torreon'),
      (this.buildingPermit.applicant.firstName = 'Jordan'),
      (this.buildingPermit.applicant.middleInitial = 'C'),
      (this.buildingPermit.applicant.tin = '143223123'),
      (this.buildingPermit.formOfOwnership = 'Sole'),
      (this.buildingPermit.applicant.addressNo = '123D'),
      (this.buildingPermit.applicant.addressStreet = 'T Padilla St'),
      (this.buildingPermit.applicant.addressBarangay = 'T Padilla'),
      (this.buildingPermit.applicant.addressCity = 'Cebu City'),
      (this.buildingPermit.applicant.addressZipCode = '6000'),
      (this.buildingPermit.applicant.contactNo = '09394300929'),
      (this.buildingPermit.constructionLocation.lotNo = '4321'),
      (this.buildingPermit.constructionLocation.blockNo = '43'),
      // (this.buildingPermit.constructionLocation.middleInitial = '21'),
      (this.buildingPermit.constructionLocation.tctNo = '5432'),
      (this.buildingPermit.constructionLocation.taxDecNo = '432111'),
      (this.buildingPermit.constructionLocation.street = 'Magallanes St.'),
      (this.buildingPermit.constructionLocation.barangay = 'Parian'),
      (this.buildingPermit.constructionLocation.cityMun = 'Cebu City'),
      // (this.buildingPermit.charOccupancygroupA = false),
      // (this.buildingPermit.charOccupancygroupASingle = false),
      // (this.buildingPermit.charOccupancygroupADuplex = false),
      // (this.buildingPermit.charOccupancygroupAResidential = false),
      // (this.buildingPermit.charOccupancygroupAOthers = false),
      // (this.buildingPermit.charOccupancygroupB = true),
      // (this.buildingPermit.charOccupancygroupBHotel = false),
      // (this.buildingPermit.charOccupancygroupBDormitory = true),
      // (this.buildingPermit.charOccupancygroupBResidential = false),
      // (this.buildingPermit.charOccupancygroupBTownhouse = false),
      // (this.buildingPermit.charOccupancygroupBBoardingHouse = false),
      // (this.buildingPermit.charOccupancygroupBOthers = false),
      // (this.buildingPermit.charOccupancygroupC = false),
      // (this.buildingPermit.charOccupancygroupCSchoolBuilding = false),
      // (this.buildingPermit.charOccupancygroupCCivicCenter = false),
      // (this.buildingPermit.charOccupancygroupCResidential = false),
      // (this.buildingPermit.charOccupancygroupCClubHouse = false),
      // (this.buildingPermit.charOccupancygroupCSchoolAuditorumGym = false),
      // (this.buildingPermit.charOccupancygroupCChurchMosqueTempleChapel = false),
      // (this.buildingPermit.charOccupancygroupCOthers = false),
      // (this.buildingPermit.charOccupancygroupD = false),
      // (this.buildingPermit.charOccupancygroupDHospital = false),
      // (this.buildingPermit.charOccupancygroupDHomeForTheAged = false),
      // (this.buildingPermit.charOccupancygroupDResidential = false),
      // (this.buildingPermit.charOccupancygroupDGovernmentOffice = false),
      // (this.buildingPermit.charOccupancygroupDOthers = false),
      // (this.buildingPermit.charOccupancygroupE = false),
      // (this.buildingPermit.charOccupancygroupEBank = false),
      // (this.buildingPermit.charOccupancygroupEDrinkingDining = false),
      // (this.buildingPermit.charOccupancygroupEResidential = false),
      // (this.buildingPermit.charOccupancygroupEShop = false),
      // (this.buildingPermit.charOccupancygroupEMall = false),
      // (this.buildingPermit.charOccupancygroupEOthers = false),
      // (this.buildingPermit.charOccupancygroupF = false),
      // (this.buildingPermit.charOccupancygroupFFactory = false),
      // (this.buildingPermit.charOccupancygroupFOthers = false),
      // (this.buildingPermit.charOccupancygroupG = false),
      // (this.buildingPermit.charOccupancygroupGStorage = false),
      // (this.buildingPermit.charOccupancygroupGFactory = false),
      // (this.buildingPermit.charOccupancygroupGOthers = false),
      // (this.buildingPermit.charOccupancygroupH = false),
      // (this.buildingPermit.charOccupancygroupHTheater = false),
      // (this.buildingPermit.charOccupancygroupHOthers = false),
      // (this.buildingPermit.charOccupancygroupI = false),
      // (this.buildingPermit.charOccupancygroupIColiseum = false),
      // (this.buildingPermit.charOccupancygroupIBarn = false),
      // (this.buildingPermit.charOccupancygroupIOthers = false),
      // (this.buildingPermit.charOccupancygroupJ = false),
      // (this.buildingPermit.charOccupancygroupJPrivateCarport = false),
      // (this.buildingPermit.charOccupancygroupJOthers = false),
      // (this.buildingPermit.occupancyClassified = ''),
      (this.buildingPermit.numberOfUnits = 0),
      (this.buildingPermit.numberOfStory = 0),
      (this.buildingPermit.floorArea = 0),
      (this.buildingPermit.lotArea = 0),
      (this.buildingPermit.totalEstimatedCost = 0),
      (this.buildingPermit.buildingCost = 0),
      (this.buildingPermit.electricalCost = 0),
      (this.buildingPermit.mechanicalCost = 0),
      (this.buildingPermit.ElectronicCost = 0),
      (this.buildingPermit.plumbingCost = 0),
      (this.buildingPermit.expectedCompletion = new Date()),
      (this.buildingPermit.costOfEquipmentInstalled = 0);
    // (this.buildingPermit.assigArchitec = 'Jordan Architect'),
    // (this.buildingPermit.dateSign = new Date());

    // (this.buildingPermit.scopeOfWork.newConstruction = true),
    // (this.buildingPermit.scopeOfWork.erection = false),
    // (this.buildingPermit.scopeOfWork.addition = false),
    // (this.buildingPermit.scopeOfWork.alteration = false),
    // (this.buildingPermit.scopeOfWork.renovation = false),
    // (this.buildingPermit.scopeOfWork.convertion = false),
    // (this.buildingPermit.scopeOfWork.repair = false),
    // (this.buildingPermit.scopeOfWork.moving = false),
    // (this.buildingPermit.scopeOfWork.raising = false),
    // (this.buildingPermit.scopeOfWork.accessoryBuildingOrStruc = false),
    // (this.buildingPermit.scopeOfWork.legalization = false),
    // (this.buildingPermit.scopeOfWork.other = false),
    // (this.buildingPermit.scopeOfWork.otherDetail = '');
  }
}
