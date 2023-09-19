import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { UnsafeElectricalInstallationModel } from '@shared/model/certificates/electrical/unsafe-electrical-installation-model';
import { NoticeIllegalMechanicalInstallationModel } from '@shared/model/certificates/mechanical/notice-illegal-mechanical-installation-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { INoticeIllegalMechanicalInstallationModel } from '@shared/model/interface/certificates/mechanical/inotice-illegal-mechanical-installation-model';
import { UnsafeElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-unsafe-electrical-installation.service';
import { IllegalMechanicalInstallationService } from '@shared/services/certificates-clearances/mechanical/illegal-mechanical-inst.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-create-illegal-mechanical-installation-notice',
  templateUrl: './create-illegal-mechanical-installation-notice.component.html',
  styleUrls: ['./create-illegal-mechanical-installation-notice.component.scss'],
})
export class CreateIllegalMechanicalInstallationNoticeComponent implements OnInit {
  illegalMechanicalInstallation: INoticeIllegalMechanicalInstallationModel =
    new NoticeIllegalMechanicalInstallationModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private mechanicalPermitService: MechanicalPermitService,
    private imiService: IllegalMechanicalInstallationService
  ) {}

  ngOnInit(): void {
    this.mechanicalPermitService.mechanicalPermit.subscribe(data => {
      this.illegalMechanicalInstallation.mechanicalPermit = data;
    });

    this.imiService.IMICertificate.subscribe(data => {
      this.illegalMechanicalInstallation = data;
    });
  }
  showSelectElectronicPermitDialog() {
    const dialogRef = this.dialog.open(SelectElectricalPermitComponent, {
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
    const { mechanicalPermit } = this.illegalMechanicalInstallation;

    if (!checked) {
      this.illegalMechanicalInstallation.receivedByOwner = false;
      this.illegalMechanicalInstallation.receivedByFirstName = '';
      this.illegalMechanicalInstallation.receivedByMiddleName = '';
      this.illegalMechanicalInstallation.receivedByLastName = '';
      this.illegalMechanicalInstallation.receivedByCompleteName = '';
    }

    if (checked) {
      this.illegalMechanicalInstallation.receivedByOwner = true;
      this.illegalMechanicalInstallation.receivedByFirstName =
        mechanicalPermit.buildingPermit.applicant.firstName;
      this.illegalMechanicalInstallation.receivedByMiddleName =
        mechanicalPermit.buildingPermit.applicant.middleInitial;
      this.illegalMechanicalInstallation.receivedByLastName =
        mechanicalPermit.buildingPermit.applicant.lastName;
      this.illegalMechanicalInstallation.receivedByCompleteName = `${this.illegalMechanicalInstallation.receivedByFirstName} ${this.illegalMechanicalInstallation.receivedByMiddleName} ${this.illegalMechanicalInstallation.receivedByLastName}`;
    }
  }
  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'VFR':
        this.illegalMechanicalInstallation.verifier = data;
        this.illegalMechanicalInstallation.verifierId = data.id;
        break;
      case 'MI':
        this.illegalMechanicalInstallation.mechanicalInspector = data;
        this.illegalMechanicalInstallation.mechanicalInspectorId = data.id;
        break;
      case 'CMS':
        this.illegalMechanicalInstallation.chiefMechanicalSection = data;
        this.illegalMechanicalInstallation.chiefMechanicalSectionId = data.id;

        break;
      case 'CIED':
        this.illegalMechanicalInstallation.chiefInspectionEnforcementDivision = data;
        this.illegalMechanicalInstallation.chiefInspectionEnforcementDivisionId = data.id;

        break;
      case 'CPED':
        // this.illegalMechanicalInstallation.chiefProcessingAndEvaluationDivision = data;
        // this.illegalMechanicalInstallation.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.illegalMechanicalInstallation.buildingOfficial = data;
        this.illegalMechanicalInstallation.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.illegalMechanicalInstallation);
  }

  save() {
    console.log(this.illegalMechanicalInstallation);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.imiService.create(this.illegalMechanicalInstallation).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.imiService.findAll();
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
    this.imiService.update(this.illegalMechanicalInstallation).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.imiService.findAll();
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
    this.illegalMechanicalInstallation = new NoticeIllegalMechanicalInstallationModel();
    this.imiService.setCertificate(new NoticeIllegalMechanicalInstallationModel());
  }
}
