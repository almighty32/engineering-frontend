import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { GeneratorOrUPSModel } from '@shared/model/certificates/electrical/generator-or-ups-model';
import { UnsafeElectricalInstallationModel } from '@shared/model/certificates/electrical/unsafe-electrical-installation-model';
import { IGeneratorOrUPSModelModel } from '@shared/model/interface/certificates/electical/igenerator-or-ups-model';
import { UninterruptedPowerSupplyService } from '@shared/services/certificates-clearances/electrical/uninterrupted-power-supply.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-generator-or-ups-cert',
  templateUrl: './create-generator-or-ups-cert.component.html',
  styleUrls: ['./create-generator-or-ups-cert.component.scss'],
})
export class CreateGeneratorOrUpsCertComponent implements OnInit {
  gupsCertificate: IGeneratorOrUPSModelModel = new GeneratorOrUPSModel();
  saveButtonSelector = `SAVE`;

  //
  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private gupsCertificateService: UninterruptedPowerSupplyService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.gupsCertificate.electricalPermit = data;
    });

    this.gupsCertificateService.GUPSCertificate.subscribe(data => {
      this.gupsCertificate = data;
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
        this.gupsCertificate.verifier = data;
        this.gupsCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.gupsCertificate.electricalInspector = data;
        this.gupsCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.gupsCertificate.chiefElectricalSection = data;
        this.gupsCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.gupsCertificate.chiefInspectionEnforcementDivision = data;
        this.gupsCertificate.electricalInspectorId = data.id;

        break;
      case 'CPED':
        this.gupsCertificate.chiefProcessingAndEvaluationDivision = data;
        this.gupsCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.gupsCertificate.buildingOfficial = data;
        this.gupsCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.gupsCertificate);
  }

  save() {
    console.log(this.gupsCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.gupsCertificateService.create(this.gupsCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.gupsCertificateService.findAll();
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
    this.gupsCertificateService.update(this.gupsCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.gupsCertificateService.findAll();
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
    this.gupsCertificate = new GeneratorOrUPSModel();
    this.gupsCertificateService.setData(new GeneratorOrUPSModel());
  }
}
