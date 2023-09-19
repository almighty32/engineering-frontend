import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { MotorControlCenterModel } from '@shared/model/certificates/electrical/imotor-control-center-model';
import { IMotorControlCenterModel } from '@shared/model/interface/certificates/electical/imotor-control-center-model';
import { MotorControlCenterService } from '@shared/services/certificates-clearances/electrical/motor-control-center.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-motor-control-center-cert',
  templateUrl: './create-motor-control-center-cert.component.html',
  styleUrls: ['./create-motor-control-center-cert.component.scss'],
})
export class CreateMotorControlCenterCertComponent implements OnInit {
  mccCertificate: IMotorControlCenterModel = new MotorControlCenterModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private mccCertificateService: MotorControlCenterService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.mccCertificate.electricalPermit = data;
    });

    this.mccCertificateService.MCCCertificate.subscribe(data => {
      this.mccCertificate = data;
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

  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'VFR':
        this.mccCertificate.verifier = data;
        this.mccCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.mccCertificate.electricalInspector = data;
        this.mccCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.mccCertificate.chiefElectricalSection = data;
        this.mccCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.mccCertificate.chiefInspectionEnforcementDivision = data;
        this.mccCertificate.electricalInspectorId = data.id;

        break;
      case 'CPED':
        this.mccCertificate.chiefProcessingAndEvaluationDivision = data;
        this.mccCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.mccCertificate.buildingOfficial = data;
        this.mccCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.mccCertificate);
  }

  save() {
    console.log(this.mccCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.mccCertificateService.create(this.mccCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.mccCertificateService.findAll();
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
    this.mccCertificateService.update(this.mccCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.mccCertificateService.findAll();
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
    this.mccCertificate = new MotorControlCenterModel();
    this.mccCertificateService.setCertificate(new MotorControlCenterModel());
  }
}
