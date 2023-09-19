import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { AutomaticManualTransferSwitchModel } from '@shared/model/certificates/electrical/automatic-manual-transfer-switch-model';
import { IAutomaticManualTransferSwitchModel } from '@shared/model/interface/certificates/electical/iautomatic-manual-transfer-switch-model';
import { AutomaticManualTransferSwitchService } from '@shared/services/certificates-clearances/automatic-manual-transfer-switch.service';
import { UnsafeElectricalInstallationService } from '@shared/services/certificates-clearances/electrical/notice-unsafe-electrical-installation.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-automatic-manual-transfer-switch-cert',
  templateUrl: './create-automatic-manual-transfer-switch-cert.component.html',
  styleUrls: ['./create-automatic-manual-transfer-switch-cert.component.scss'],
})
export class CreateAutomaticManualTransferSwitchCertComponent implements OnInit {
  amtsCertificate: IAutomaticManualTransferSwitchModel = new AutomaticManualTransferSwitchModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private amtsCertificateService: AutomaticManualTransferSwitchService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.amtsCertificate.electricalPermit = data;
    });

    this.amtsCertificateService.AMTSCertificate.subscribe(data => {
      this.amtsCertificate = data;
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
        this.amtsCertificate.verifier = data;
        this.amtsCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.amtsCertificate.electricalInspector = data;
        this.amtsCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.amtsCertificate.chiefElectricalSection = data;
        this.amtsCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.amtsCertificate.chiefInspectionEnforcementDivision = data;
        this.amtsCertificate.electricalInspectorId = data.id;

        break;
      case 'CPED':
        this.amtsCertificate.chiefProcessingAndEvaluationDivision = data;
        this.amtsCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.amtsCertificate.buildingOfficial = data;
        this.amtsCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.amtsCertificate);
  }

  save() {
    console.log(this.amtsCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.amtsCertificateService.create(this.amtsCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.amtsCertificateService.findAll();
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
    this.amtsCertificateService.update(this.amtsCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.amtsCertificateService.findAll();
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
    this.amtsCertificate = new AutomaticManualTransferSwitchModel();
    this.amtsCertificateService.setCertificate(new AutomaticManualTransferSwitchModel());
  }
}
