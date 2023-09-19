import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { CreateBuildingPermitDialogComponent } from '../create-building-permit-dialog/create-building-permit-dialog.component';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { ApplicantOwnerConsentService } from '@shared/services/applicant-owner-consent.service';

import { IBuildingPermitScopeOfWork } from '@shared/model/interface/building-permit/I-building-permit-scope-of-work';
import { Subscription } from 'rxjs';
import { IApplicationType } from '../create-building-permit/create-building-permit.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-edit-building-permit-dialog',
  templateUrl: './edit-building-permit-dialog.component.html',
  styleUrls: ['./edit-building-permit-dialog.component.scss']
})
export class EditBuildingPermitDialogComponent implements OnInit {
  @Input() label = '';
  @Output() selectApplicationTypes = new EventEmitter<any>();
  @Input() companyOwnerInit!: string;
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
    // eslint-disable-next-line max-len
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<EditBuildingPermitDialogComponent>,
    public dialog2: MatDialog,
    public createBuildingPermitDialog: MatDialogRef<CreateBuildingPermitDialogComponent>,
    private buildingPermitService: BuildingPermitService, // Import your services
    private applicantService: ApplicantService,
    private constructionLocation: ConstructionLocationService,
    private signaturyService: SignatoryService,
    private applicantOwnerConsentService: ApplicantOwnerConsentService

  ) {
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
    console.log('Building Permit Data:', this.buildingPermit);
    console.log('Data:', this.data);
    console.log('company:', this.companyFullname);

    this.form.patchValue({
      dialogData: this.data,
      buildingType: this.buildingPermit.buildingType,
      applicationType: this.buildingPermit.applicationType,

    });
      this.buildingPermitService.buildingPermit.subscribe(msg => {
        this.buildingPermit = msg;
      }),

      this.applicantServiceForm.valueChanges.subscribe(() => {
        this.updateFullName();
        const newBuildingType = this.form.get('buildingType')?.value || 'DefaultBuildingType';
        this.buildingPermit = { ...this.buildingPermit, buildingType: newBuildingType };

      });
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

      }

  scrollToTop() {
    window.scroll(0, 0);
  }

  update() {
    this.buildingPermitService.update(this.data.id, this.form.value).subscribe({
    next: res => {
      console.log(res);
      this.buildingPermitService.findAll();
      this.resetInputs();
      this.dialog2.closeAll();
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
    // const formOfOwnership = objectWithOptionalProperties.formOfOwnership ?? 'defaultValue';

    // console.log(this.form.value.formOfOwnership);
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
  closeDialog() {
    this.dialog.close();
  }
}
