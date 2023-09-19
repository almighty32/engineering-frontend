import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { LightingDistributionPanelModel } from '@shared/model/certificates/electrical/lighting-distribution-panel-model';
import { ILightingDistributionPanelModel } from '@shared/model/interface/certificates/electical/ilighting-distribution-panel-model';
import { LightningDistributionPanelService } from '@shared/services/certificates-clearances/electrical/lighting-distribution-panel.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-lighting-distribution-panels-cert',
  templateUrl: './create-lighting-distribution-panels-cert.component.html',
  styleUrls: ['./create-lighting-distribution-panels-cert.component.scss'],
})
export class CreateLightingDistributionPanelCertComponent implements OnInit {
  ldpCertificate: ILightingDistributionPanelModel = new LightingDistributionPanelModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private ldpCertificateService: LightningDistributionPanelService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.ldpCertificate.electricalPermit = data;
    });

    this.ldpCertificateService.LDPCertificate.subscribe(data => {
      this.ldpCertificate = data;
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
        this.ldpCertificate.verifier = data;
        this.ldpCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.ldpCertificate.electricalInspector = data;
        this.ldpCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.ldpCertificate.chiefElectricalSection = data;
        this.ldpCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.ldpCertificate.chiefInspectionEnforcementDivision = data;
        this.ldpCertificate.electricalInspectorId = data.id;

        break;
      case 'CPED':
        this.ldpCertificate.chiefProcessingAndEvaluationDivision = data;
        this.ldpCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.ldpCertificate.buildingOfficial = data;
        this.ldpCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.ldpCertificate);
  }

  save() {
    console.log(this.ldpCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.ldpCertificateService.create(this.ldpCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.ldpCertificateService.findAll();
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
    this.ldpCertificateService.update(this.ldpCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.ldpCertificateService.findAll();
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
    this.ldpCertificate = new LightingDistributionPanelModel();
    this.ldpCertificateService.setCertificate(new LightingDistributionPanelModel());
  }
}
