import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { IndoorOutdoorStationTransformerModel } from '@shared/model/certificates/electrical/indoor-outdoor-station-transformer-model';
import { IIndoorOutdoorStationTransformerModel } from '@shared/model/interface/certificates/electical/iindoor-outdoor-station-transformer-model';
import { IndoorOutdoorStationTransformerService } from '@shared/services/certificates-clearances/electrical/indoor-outdoor-station-transformer.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-create-coo-indoor-outdoor-station-transformer-cert',
  templateUrl: './create-coo-indoor-outdoor-station-transformer-cert.component.html',
  styleUrls: ['./create-coo-indoor-outdoor-station-transformer-cert.component.scss'],
})
export class CreateCOOIndoorOutdoorStationTransformerCertComponent implements OnInit {
  IOSTCertificate: IIndoorOutdoorStationTransformerModel =
    new IndoorOutdoorStationTransformerModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private IOSTCertificateService: IndoorOutdoorStationTransformerService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.IOSTCertificate.electricalPermit = data;
    });

    this.IOSTCertificateService.inOutStationTransformer.subscribe(data => {
      this.IOSTCertificate = data;
    });
  }
  showSelectElectronicPermitDialog() {
    this.dialog.open(SelectElectricalPermitComponent, {
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
        this.IOSTCertificate.verifier = data;
        this.IOSTCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.IOSTCertificate.electricalInspector = data;
        this.IOSTCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.IOSTCertificate.chiefElectricalSection = data;
        this.IOSTCertificate.chiefElectricalSectionId = data.id;

        break;
      case 'CIED':
        this.IOSTCertificate.chiefInspectionEnforcementDivision = data;
        this.IOSTCertificate.chiefInspectionEnforcementDivisionId = data.id;

        break;
      case 'CPED':
        this.IOSTCertificate.chiefProcessingAndEvaluationDivision = data;
        this.IOSTCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.IOSTCertificate.buildingOfficial = data;
        this.IOSTCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.IOSTCertificate);
  }

  save() {
    console.log(this.IOSTCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.IOSTCertificateService.create(this.IOSTCertificate).subscribe({
      next: res => {
        const _res = res;
        console.log(_res);
        this.IOSTCertificateService.findAll();
        this.resetInputs();
        this.notificationService.openSnackBar('New Certificate Successfully Created.');
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {},
    });
  }
  update() {
    console.log('update record');
    this.IOSTCertificateService.update(this.IOSTCertificate).subscribe({
      next: res => {
        const _res = res;
        console.log(_res);
        this.IOSTCertificateService.findAll();
        this.resetInputs();
        this.notificationService.openSnackBar('Fencing Permit Created Successfully');
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
    this.IOSTCertificate = new IndoorOutdoorStationTransformerModel();
    this.IOSTCertificateService.setInOutStationTransformerCert(
      new IndoorOutdoorStationTransformerModel()
    );
  }
}
