import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { UnsafeElectricalInstallationModel } from '@shared/model/certificates/electrical/unsafe-electrical-installation-model';
import { IAutomaticManualTransferSwitchModel } from '@shared/model/interface/certificates/electical/iautomatic-manual-transfer-switch-model';
import { IUnsafeElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iunsafe-electrical-installation-model';
import { AutomaticManualTransferSwitchService } from '@shared/services/certificates-clearances/automatic-manual-transfer-switch.service';
import { UnsafeElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-unsafe-electrical-installation.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';
import { AutomaticManualTransferSwitchPrintService } from '@shared/services/print/certificates/electrical/automatic-manual-transfer-switch-print.service';
import { TableService } from '@shared/services/table.service';
import { CreateIllegalMechanicalInstallationNoticeDialogComponent } from '../../illegal-mechanical-installation/create-illegal-mech-inst-notice-dialog/create-illegal-mechanical-installation-notice-dialog.component';

@Component({
  selector: 'app-create-elevator-dumbwaiter-cert',
  templateUrl: './create-elevator-dumbwaiter-cert.component.html',
  styleUrls: ['./create-elevator-dumbwaiter-cert.component.scss'],
})
export class CreateElevatorDumbwaiterCertComponent implements OnInit {
  unsafeElectricalInstallation: IUnsafeElectricalInstallationModel =
    new UnsafeElectricalInstallationModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private unsafeElectricalInstallationService: UnsafeElectricalInstallationService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.unsafeElectricalInstallation.electricalPermit = data;
    });

    this.unsafeElectricalInstallationService.unsafeElectricalInstallationCert.subscribe(data => {
      this.unsafeElectricalInstallation = data;
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
    const { electricalPermit } = this.unsafeElectricalInstallation;

    if (!checked) {
      this.unsafeElectricalInstallation.isOwner = false;
      this.unsafeElectricalInstallation.receivedByFirstName = '';
      this.unsafeElectricalInstallation.receivedByMiddleName = '';
      this.unsafeElectricalInstallation.receivedByLastName = '';
      this.unsafeElectricalInstallation.receivedByCompleteName = '';
    }

    if (checked) {
      this.unsafeElectricalInstallation.isOwner = true;
      this.unsafeElectricalInstallation.receivedByFirstName =
        electricalPermit.buildingPermit.applicant.firstName;
      this.unsafeElectricalInstallation.receivedByMiddleName =
        electricalPermit.buildingPermit.applicant.middleInitial;
      this.unsafeElectricalInstallation.receivedByLastName =
        electricalPermit.buildingPermit.applicant.lastName;
      this.unsafeElectricalInstallation.receivedByCompleteName = `${this.unsafeElectricalInstallation.receivedByFirstName} ${this.unsafeElectricalInstallation.receivedByMiddleName} ${this.unsafeElectricalInstallation.receivedByLastName}`;
    }
  }
  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'EI':
        this.unsafeElectricalInstallation.electricalInspector = data;
        this.unsafeElectricalInstallation.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.unsafeElectricalInstallation.chiefElectricalSection = data;
        this.unsafeElectricalInstallation.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.unsafeElectricalInstallation.chiefInspectionEnforcementDivision = data;
        this.unsafeElectricalInstallation.electricalInspectorId = data.id;

        break;
      case 'BO':
        this.unsafeElectricalInstallation.buildingOfficial = data;
        this.unsafeElectricalInstallation.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.unsafeElectricalInstallation);
  }

  save() {
    console.log(this.unsafeElectricalInstallation);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.unsafeElectricalInstallationService.create(this.unsafeElectricalInstallation).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.unsafeElectricalInstallationService.findAll();
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
    this.unsafeElectricalInstallationService.update(this.unsafeElectricalInstallation).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.unsafeElectricalInstallationService.findAll();
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
    this.unsafeElectricalInstallation = new UnsafeElectricalInstallationModel();
    this.unsafeElectricalInstallationService.setData(new UnsafeElectricalInstallationModel());
  }
}
