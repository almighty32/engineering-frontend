import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectElectricalPermitComponent } from '@shared/components/select-electrical-permit/select-electrical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { IncomingLowVoltageSwitchgearModel } from '@shared/model/certificates/electrical/incoming-low-voltage-switchgear-model';
import { IIncomingLowVoltageSwitchgearModel } from '@shared/model/interface/certificates/electical/iincoming-low-voltage-switchgear-model';
import { IncomingLowVoltageSwitchGearService } from '@shared/services/certificates-clearances/electrical/incoming-low-voltage-switch-gear.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { NotificationService } from '@shared/services/notification.service';
@Component({
  selector: 'app-create-incoming-low-voltage-switchgear-cert',
  templateUrl: './create-incoming-low-voltage-switchgear-cert.component.html',
  styleUrls: ['./create-incoming-low-voltage-switchgear-cert.component.scss'],
})
export class CreateIncomingLVSwitchgearCertComponent implements OnInit {
  ilvsgCertificate: IIncomingLowVoltageSwitchgearModel = new IncomingLowVoltageSwitchgearModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private electricalPermitService: ElectricalPermitService,
    private ilvsgCertificateService: IncomingLowVoltageSwitchGearService
  ) {}

  ngOnInit(): void {
    this.electricalPermitService.electricalPermit.subscribe(data => {
      this.ilvsgCertificate.electricalPermit = data;
    });

    this.ilvsgCertificateService.ILVSWCertificate.subscribe(data => {
      this.ilvsgCertificate = data;
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
        this.ilvsgCertificate.verifier = data;
        this.ilvsgCertificate.verifierId = data.id;
        break;
      case 'EI':
        this.ilvsgCertificate.electricalInspector = data;
        this.ilvsgCertificate.electricalInspectorId = data.id;
        break;
      case 'CES':
        this.ilvsgCertificate.chiefElectricalSection = data;
        this.ilvsgCertificate.electricalInspectorId = data.id;

        break;
      case 'CIED':
        this.ilvsgCertificate.chiefInspectionEnforcementDivision = data;
        this.ilvsgCertificate.electricalInspectorId = data.id;

        break;
      case 'CPED':
        this.ilvsgCertificate.chiefProcessingAndEvaluationDivision = data;
        this.ilvsgCertificate.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.ilvsgCertificate.buildingOfficial = data;
        this.ilvsgCertificate.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.ilvsgCertificate);
  }

  save() {
    console.log(this.ilvsgCertificate);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.ilvsgCertificateService.create(this.ilvsgCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.ilvsgCertificateService.findAll();
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
    this.ilvsgCertificateService.update(this.ilvsgCertificate).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.ilvsgCertificateService.findAll();
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
    this.ilvsgCertificate = new IncomingLowVoltageSwitchgearModel();
    this.ilvsgCertificateService.setCertificate(new IncomingLowVoltageSwitchgearModel());
  }
}
