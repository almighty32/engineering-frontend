import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectMechanicalPermitComponent } from '@shared/components/select-mechanical-permit/select-mechanical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { NoticeMechanicalRequirementsModel } from '@shared/model/certificates/mechanical/notice-mechanical-requirements-model';
import { INoticeMechanicalRequirementsModel } from '@shared/model/interface/certificates/mechanical/inotice-mechanical-requirements-model';
import { NoticeOfMechanicalReqService } from '@shared/services/certificates-clearances/mechanical/mechanical-req.service';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-create-mechanical-req-notice',
  templateUrl: './create-mechanical-req-notice.component.html',
  styleUrls: ['./create-mechanical-req-notice.component.scss'],
})
export class CreateMechanicalReqNoticeComponent implements OnInit {
  mechanicalReq: INoticeMechanicalRequirementsModel = new NoticeMechanicalRequirementsModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private mpService: MechanicalPermitService,
    private mrService: NoticeOfMechanicalReqService
  ) {}

  ngOnInit(): void {
    this.mpService.mechanicalPermit.subscribe(data => {
      this.mechanicalReq.mechanicalPermit = data;
    });

    this.mrService.MRCertificate.subscribe(data => {
      this.mechanicalReq = data;
    });
  }
  showSelectMechanicalPermitDialog() {
    const dialogRef = this.dialog.open(SelectMechanicalPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      // minHeight: '90vh',
      // maxHeight: '80vh',
      // disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });
  }
  copyRecipient(event: any) {
    const { checked } = event;
    const { mechanicalPermit } = this.mechanicalReq;

    if (!checked) {
      this.mechanicalReq.receivedByOwner = false;
      this.mechanicalReq.receivedByFirstName = '';
      this.mechanicalReq.receivedByMiddleName = '';
      this.mechanicalReq.receivedByLastName = '';
      this.mechanicalReq.receivedByCompleteName = '';
    }

    if (checked) {
      this.mechanicalReq.receivedByOwner = true;
      this.mechanicalReq.receivedByFirstName = mechanicalPermit.buildingPermit.applicant.firstName;
      this.mechanicalReq.receivedByMiddleName =
        mechanicalPermit.buildingPermit.applicant.middleInitial;
      this.mechanicalReq.receivedByLastName = mechanicalPermit.buildingPermit.applicant.lastName;
      this.mechanicalReq.receivedByCompleteName = `${this.mechanicalReq.receivedByFirstName} ${this.mechanicalReq.receivedByMiddleName} ${this.mechanicalReq.receivedByLastName}`;
    }
  }
  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'VFR':
        // this.mechanicalReq.verifier = data;
        // this.mechanicalReq.verifierId = data.id;
        break;
      case 'MI':
        this.mechanicalReq.mechanicalInspector = data;
        this.mechanicalReq.mechanicalInspectorId = data.id;
        break;
      case 'CMS':
        this.mechanicalReq.chiefMechanicalSection = data;
        this.mechanicalReq.chiefMechanicalSectionId = data.id;

        break;
      case 'CIED':
        this.mechanicalReq.chiefInspectionEnforcementDivision = data;
        this.mechanicalReq.chiefInspectionEnforcementDivisionId = data.id;

        break;
      case 'CPED':
        // this.mechanicalReq.chiefProcessingAndEvaluationDivision = data;
        // this.mechanicalReq.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.mechanicalReq.buildingOfficial = data;
        this.mechanicalReq.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.mechanicalReq);
  }

  save() {
    console.log(this.mechanicalReq);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.mrService.create(this.mechanicalReq).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.mrService.findAll();
        this.resetInputs();
        this.notificationService.openSnackBar('Create Illegal Electrical Installation Cert');
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
  update() {
    console.log('update record');
    this.mrService.update(this.mechanicalReq).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.mrService.findAll();
        this.resetInputs();
        this.notificationService.openSnackBar('Create Fencing Permit Succesfull');
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
  resetInputs() {
    // this.setApplicationNumber();
    this.mechanicalReq = new NoticeMechanicalRequirementsModel();
    this.mrService.setCertificate(new NoticeMechanicalRequirementsModel());
  }
}
