import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { CreateBuildingPermitDialogComponent } from '../create-building-permit-dialog/create-building-permit-dialog.component';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { ApplicantOwnerConsentService } from '@shared/services/applicant-owner-consent.service';
import { ICharacterOfOccupancy } from './use-or-character-of-occupancy/use-or-character-of-occupancy.component';
import { IBuildingPermitScopeOfWork } from '@shared/model/interface/building-permit/I-building-permit-scope-of-work';
import { Subscription } from 'rxjs';

export interface IApplicationType {
  value: string;
  description: string;
}

@Component({
  selector: 'app-create-building-permit',
  templateUrl: './create-building-permit.component.html',
  styleUrls: ['./create-building-permit.component.scss'],
})
export class CreateBuildingPermitComponent implements OnInit {
  @Input() label = '';
  @Output() selectApplicationTypes = new EventEmitter<any>();
  saveButtonSelector = 'SAVE';
  private subscriptions: Subscription[] = [];

  radioValue = '1';
  companyFullname = '';
  applicantFullName = {
    lastName: '',
    firstName: '',
    middleInitial: '',
  };

  applicationTypeControl = new FormControl();

  applicationTypes: IApplicationType[] = [
    {
      value: 'New',
      description: 'New',
    },
    {
      value: 'Renew',
      description: 'Renew',
    },
    {
      value: 'Amendatory',
      description: 'Amendatory',
    },
  ];

  buildingTypeData: IApplicationType[] = [
    {
      value: 'Simple',
      description: 'Simple',
    },
    {
      value: 'Complex',
      description: 'Complex',
    },
  ];

  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  testVar: any;

  title = 'This is page Title';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  isEditable = false;
  toppings!: UntypedFormGroup;

  form = this.buildingPermitService.form;
  applicantServiceForm = this.applicantService.form;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public createBuildingPermitDialog: MatDialogRef<CreateBuildingPermitDialogComponent>, // private notificationService: NotificationService, // private router: Router, // private route: ActivatedRoute,
    private _formBuilder: UntypedFormBuilder,
    private fb: UntypedFormBuilder,
    private buildingPermitService: BuildingPermitService,
    private applicantService: ApplicantService,
    private constructionLocation: ConstructionLocationService,
    private signaturyService: SignatoryService,
    private applicantOwnerConsentService: ApplicantOwnerConsentService,
    private dialog: MatDialog,
  ) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  selectOption(event: any) {
    this.selectApplicationTypes.emit({
      fieldName: this.label,
      signatory: event,
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
    this.checkApplicant();
    this.updateFullName();

    this.subscriptions.push(
      this.signaturyService.inspectorSupervisor.subscribe(msg => {
        const { id } = msg;
        this.buildingPermit.signatoryId = id;
        console.log('inspector', msg);
      }),
      this.buildingPermitService.buildingPermit.subscribe(msg => {
        this.buildingPermit = msg;
      }),
      this.applicantServiceForm.valueChanges.subscribe(() => {
        this.updateFullName();
      })
    );

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    console.log(this.buildingPermitService.form.value);
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
  save() {
    this.saveButtonSelector === 'SAVE' ? this.update() : this.create();
  }
  update() {
    this.buildingPermitService.update(this.data.id, this.form.value).subscribe({
      next: res => {
        console.log(res);
        this.buildingPermitService.findAll();
        this.resetInputs();
        this.dialog.closeAll();
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
  create() {
    console.log('Create building permit');

    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocation.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.buildingPermitService.scopeOfWorks;
    this.form.value.scopeOfWork = scopeOfWorks;

    const characterOfOccupancies = this.buildingPermitService.characterOfOccupancies;
    this.form.value.characterOfOccupancy = characterOfOccupancies;

    const applicantOwnerConsent = this.applicantOwnerConsentService.form.value;
    this.form.value.applicantOwnerConsent = applicantOwnerConsent;

    const signatory = this.buildingPermit.signatoryId;
    this.form.value.signatoryId = signatory;

    console.log(this.form.value);

    this.buildingPermitService.create(this.form.value).subscribe({
      next: res => {
        const res_ = res;
        console.log({ res_ });
        this.buildingPermitService.findAll();
        this.resetInputs();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {},
    });
    this.createBuildingPermitDialog.close();
    this.subscriptions.forEach(subscription => console.log(subscription.unsubscribe()));
  }

  resetInputs() {
    this.form.reset(this.buildingPermitService.formDefault);
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocation.form.reset(this.constructionLocation.formDefault);
    this.applicantOwnerConsentService.form.reset(this.applicantOwnerConsentService.formDefault);
    this.buildingPermitService.resetCheckboxes();
  }

  allComplete = false;

  checkApplicant() {
    this.companyFullname = '';
    this.applicantFullName = {
      lastName: '',
      firstName: '',
      middleInitial: '',
    };

    console.log(this.radioValue);
    console.log(this.form.value.formOfOwnership);
  }

  fullName = '';
  updateFullName() {
    const firstName = this.applicantServiceForm.get('firstName')?.value;
    const middleInitial = this.applicantServiceForm.get('middleInitial')?.value;
    const lastName = this.applicantServiceForm.get('lastName')?.value;

    this.fullName = `${firstName ? firstName + ' ' : ''}${
      middleInitial ? middleInitial + ' ' : ''
    }${lastName || ''}`.trim();

    this.applicantService.changeApplicantData(this.fullName);
  }
}
