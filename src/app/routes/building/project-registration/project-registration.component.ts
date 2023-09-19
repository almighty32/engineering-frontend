import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER, NINE } from '@angular/cdk/keycodes';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';
import { BusinessComponent } from '@shared/components/project-registration/business/business.component';
import { BrokerComponent } from '@shared/components/project-registration/broker/broker.component';
import { BoardOfDirectorsComponent } from '@shared/components/project-registration/board-of-directors/board-of-directors.component';
import { ProjectComponent } from '@shared/components/project-registration/project/project.component';
import { PropertyListComponent } from '@shared/components/project-registration/property-list/property-list.component';
import { ProjectRegistrationService } from '@shared/services/project-registration.service';
import { ProjectRegistrationOwnerApplicationComponent } from '@shared/components/project-registration-owner-application/project-registration-owner-application.component';

export interface Fruit {
  name: string;
}
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
export interface CharacterOfOccupancy {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCharacterOfOccupancy?: CharacterOfOccupancy[];
}

@Component({
  selector: 'app-project-registration',
  templateUrl: './project-registration.component.html',
  styleUrls: ['./project-registration.component.scss'],
})
export class ProjectRegistrationComponent implements OnInit {
  @ViewChild(ProjectRegistrationOwnerApplicationComponent) ownerApplication =
    new ProjectRegistrationOwnerApplicationComponent();
  @ViewChild(BusinessComponent) business = new BusinessComponent();
  @ViewChild(BrokerComponent) broker = new BrokerComponent();
  @ViewChild(BoardOfDirectorsComponent) boardOfDirector = new BoardOfDirectorsComponent();
  @ViewChild(PropertyListComponent) property = new PropertyListComponent();
  @ViewChild(ProjectComponent) project = new ProjectComponent();

  projectRegistration: IProjectRegistrationlModel = new ProjectRegistrationModel();

  applicationType = new UntypedFormControl('', Validators.required);
  selectapplicationType = new UntypedFormControl('', Validators.required);
  title = 'This is page Title';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  isEditable = false;
  toppings!: UntypedFormGroup;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    fb: UntypedFormBuilder,
    private projectRegistrationService: ProjectRegistrationService
  ) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  create() {
    const ownerApplication = this.ownerApplication.projectRegistration;
    const business = this.business?.projectRegistration;
    const broker = this.broker?.projectRegistration;
    const boardOfDirector = this.boardOfDirector?.projectRegistration;
    const property = this.property.projectRegistration;
    const project = this.project.projectRegistration;

    this.projectRegistration.personFullName = ownerApplication.personFullName;
    this.projectRegistration.personAddress = ownerApplication.personAddress;
    this.projectRegistration.personCivilStatus = ownerApplication.personCivilStatus;
    this.projectRegistration.personNationality = ownerApplication.personNationality;
    this.projectRegistration.personGender = ownerApplication.personGender;
    this.projectRegistration.personAge = ownerApplication.personAge;
    this.projectRegistration.personContactNo = ownerApplication.personContactNo;

    if (business) {
      this.projectRegistration.businessName = business.businessName;
      this.projectRegistration.businessAddress = business.businessAddress;
      this.projectRegistration.businessOrganizationType = business.businessOrganizationType;
      this.projectRegistration.businesskind = business.businesskind;
      this.projectRegistration.businessCapitalization = business.businessCapitalization;
      this.projectRegistration.businessContactNo = business.businessContactNo;
    }

    if (broker) {
      this.projectRegistration.brokerName = broker.brokerName;
      this.projectRegistration.brokerAddress = broker.brokerAddress;
      this.projectRegistration.brokerContactNo = broker.brokerContactNo;
    }

    if (boardOfDirector) {
      this.projectRegistration.boardOfDirectorName = boardOfDirector.boardOfDirectorName;
      this.projectRegistration.boardOfDirectorPosition = boardOfDirector.boardOfDirectorPosition;
      this.projectRegistration.boardOfDirectorContactNo = boardOfDirector.boardOfDirectorContactNo;
      this.projectRegistration.property = property.property;
    }

    this.projectRegistration.projectRegistrationDate = project.projectRegistrationDate;
    this.projectRegistration.projectRegistrationNo = project.projectRegistrationNo;
    this.projectRegistration.projectType = project.projectType;
    this.projectRegistration.projectName = project.projectName;
    this.projectRegistration.projectLocation = project.projectLocation;
    this.projectRegistration.projectClassification = project.projectClassification;
    this.projectRegistration.durationStart = project.durationStart;
    this.projectRegistration.durationEnd = project.durationEnd;
    this.projectRegistration.rightOverLand = project.rightOverLand;
    this.projectRegistration.projectZoningClassification = project.projectZoningClassification;

    // console.log(this.projectRegistration);

    this.projectRegistrationService.create(this.projectRegistration).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);

        this.ownerApplication.projectRegistration = new ProjectRegistrationModel();
        this.business.projectRegistration = new ProjectRegistrationModel();
        this.broker.projectRegistration = new ProjectRegistrationModel();
        this.boardOfDirector.projectRegistration = new ProjectRegistrationModel();
        this.property.projectRegistration = new ProjectRegistrationModel();
        this.project.projectRegistration = new ProjectRegistrationModel();
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

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  async onClickNext() {
    // this.notificationService.openSnackBar('Record Succesfully Saved.');

    setTimeout(() => {
      // this.router.navigate(['/permit/building']);
    }, 500);
  }

  allComplete = false;
}
