import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { HvMvPrimaryDisconnectingMeansModel } from '@shared/model/certificates/electrical/hvmv-primary-disconnecting-means-model';
import { IHvMvPrimaryDisconnectingMeansModel } from '@shared/model/interface/certificates/electical/ihvmv-primary-disconnecting-means-model';
import { HVMVPrimaryDisconnectingMeansService } from '@shared/services/certificates-clearances/electrical/hvmv-primary-disconnecting-means.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-hvmv-primary-discon-means-cert',
  templateUrl: './create-hvmv-primary-discon-means-cert.component.html',
  styleUrls: ['./create-hvmv-primary-discon-means-cert.component.scss'],
})
export class CreateHvmvPrimaryDisconMeansCertComponent implements OnInit {
  hvmvpdmCertificate: IHvMvPrimaryDisconnectingMeansModel =
    new HvMvPrimaryDisconnectingMeansModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private HVMVPDMService: HVMVPrimaryDisconnectingMeansService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.hvmvpdmCertificate.electricalPermit = data;
    });

    this.HVMVPDMService.HVMVPDMCertificate.subscribe(data => {
      this.hvmvpdmCertificate = data;
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
        this.hvmvpdmCertificate.verifier = data;
        this.hvmvpdmCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.hvmvpdmCertificate.electricalInspector = data;
        this.hvmvpdmCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.hvmvpdmCertificate.chiefElectricalSection = data;
        this.hvmvpdmCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.hvmvpdmCertificate.chiefInspectionEnforcementDivision = data;
        this.hvmvpdmCertificate.electricalInspectorId = data.id;

        break;
      case 'CPED':
        this.hvmvpdmCertificate.chiefProcessingAndEvaluationDivision = data;
        this.hvmvpdmCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.hvmvpdmCertificate.buildingOfficial = data;
        this.hvmvpdmCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.hvmvpdmCertificate);
  }

  save() {
    console.log(this.hvmvpdmCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.HVMVPDMService.create(this.hvmvpdmCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.HVMVPDMService.findAll();
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
    this.HVMVPDMService.update(this.hvmvpdmCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.HVMVPDMService.findAll();
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
    this.hvmvpdmCertificate = new HvMvPrimaryDisconnectingMeansModel();
    this.HVMVPDMService.setCertificate(new HvMvPrimaryDisconnectingMeansModel());
  }
}
