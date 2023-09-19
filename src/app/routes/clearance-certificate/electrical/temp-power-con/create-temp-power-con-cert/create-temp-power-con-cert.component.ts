import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { TemporaryPowerConnectionModel } from '@shared/model/certificates/electrical/temporary-power-connection-model';
import { ITemporaryPowerConnectionModel } from '@shared/model/interface/certificates/electical/itemporary-power-connection-model';
import { TemporaryPowerConnectionService } from '@shared/services/certificates-clearances/electrical/temporary-power-connection.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-temp-power-con-cert',
  templateUrl: './create-temp-power-con-cert.component.html',
  styleUrls: ['./create-temp-power-con-cert.component.scss'],
})
export class CreateTemporaryPowerConCertComponent implements OnInit {
  TCPCertificate: ITemporaryPowerConnectionModel = new TemporaryPowerConnectionModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private TPCService: TemporaryPowerConnectionService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.TCPCertificate.electricalPermit = data;
    });

    this.TPCService.tpcCertificate.subscribe(data => {
      this.TCPCertificate = data;
    });
  }
  showSelectElectronicPermitDialog() {
    const dialogRef = this.dialog.open(SelectElectricalPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      // minHeight: '90vh',
      // maxHeight: '80vh',
      disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });
  }

  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'VFR':
        this.TCPCertificate.verifier = data;
        this.TCPCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.TCPCertificate.electricalInspector = data;
        this.TCPCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.TCPCertificate.chiefElectricalSection = data;
        this.TCPCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.TCPCertificate.chiefInspectionEnforcementDivision = data;
        this.TCPCertificate.electricalInspectorId = data.id;

        break;
      case 'BO':
        this.TCPCertificate.buildingOfficial = data;
        this.TCPCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.TCPCertificate);
  }

  save() {
    console.log(this.TCPCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.TPCService.create(this.TCPCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.TPCService.findAll();
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
    this.TPCService.update(this.TCPCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.TPCService.findAll();
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
    this.TCPCertificate = new TemporaryPowerConnectionModel();
    this.TPCService.setTPCCertificate(new TemporaryPowerConnectionModel());
  }
}
