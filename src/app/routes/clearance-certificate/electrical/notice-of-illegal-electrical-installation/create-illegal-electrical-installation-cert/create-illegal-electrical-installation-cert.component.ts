import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { IllegalElectricalInstallationModel } from '@shared/model/certificates/electrical/illegal-electrical-installation-model';
import { IIllegalElectricalInstallationModel } from '@shared/model/interface/certificates/electical/iillegal-electrical-installation-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignaturyModel } from '@shared/model/signatury-model';
import { IllegalElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-illegal-electrical-installation.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-create-illegal-electrical-installation-cert',
  templateUrl: './create-illegal-electrical-installation-cert.component.html',
  styleUrls: ['./create-illegal-electrical-installation-cert.component.scss'],
})
export class CreateIllegalElectricalInstallationCertComponent implements OnInit {
  noticeOfIllegalElectInst: IIllegalElectricalInstallationModel =
    new IllegalElectricalInstallationModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private illegalElectricalInstallationService: IllegalElectricalInstallationService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.noticeOfIllegalElectInst.electricalPermit = data;
    });

    this.illegalElectricalInstallationService.illegalElectricalInst.subscribe(data => {
      this.noticeOfIllegalElectInst = data;
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
    const { electricalPermit } = this.noticeOfIllegalElectInst;

    if (!checked) {
      this.noticeOfIllegalElectInst.isOwner = false;
      this.noticeOfIllegalElectInst.receivedByFirstName = '';
      this.noticeOfIllegalElectInst.receivedByMiddleName = '';
      this.noticeOfIllegalElectInst.receivedByLastName = '';
      this.noticeOfIllegalElectInst.receivedByCompleteName = '';
    }

    if (checked) {
      this.noticeOfIllegalElectInst.isOwner = true;
      this.noticeOfIllegalElectInst.receivedByFirstName =
        electricalPermit.buildingPermit.applicant.firstName;
      this.noticeOfIllegalElectInst.receivedByMiddleName =
        electricalPermit.buildingPermit.applicant.middleInitial;
      this.noticeOfIllegalElectInst.receivedByLastName =
        electricalPermit.buildingPermit.applicant.lastName;
      this.noticeOfIllegalElectInst.receivedByCompleteName = `${this.noticeOfIllegalElectInst.receivedByFirstName} ${this.noticeOfIllegalElectInst.receivedByMiddleName} ${this.noticeOfIllegalElectInst.receivedByLastName}`;
    }
  }
  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'EI':
        this.noticeOfIllegalElectInst.electricalInspector = data;
        this.noticeOfIllegalElectInst.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.noticeOfIllegalElectInst.chiefElectricalSection = data;
        this.noticeOfIllegalElectInst.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.noticeOfIllegalElectInst.chiefInspectionEnforcementDivision = data;
        this.noticeOfIllegalElectInst.electricalInspectorId = data.id;

        break;
      case 'BO':
        this.noticeOfIllegalElectInst.buildingOfficial = data;
        this.noticeOfIllegalElectInst.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.noticeOfIllegalElectInst);
  }

  save() {
    console.log(this.noticeOfIllegalElectInst);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.illegalElectricalInstallationService.create(this.noticeOfIllegalElectInst).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.illegalElectricalInstallationService.findAll();
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
    this.illegalElectricalInstallationService.update(this.noticeOfIllegalElectInst).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.illegalElectricalInstallationService.findAll();
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
    this.noticeOfIllegalElectInst = new IllegalElectricalInstallationModel();
    this.illegalElectricalInstallationService.setData(new IllegalElectricalInstallationModel());
  }
}
