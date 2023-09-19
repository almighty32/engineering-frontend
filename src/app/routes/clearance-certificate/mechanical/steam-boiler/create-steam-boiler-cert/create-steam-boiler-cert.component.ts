import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectMechanicalPermitComponent } from '@shared/components/select-mechanical-permit/select-mechanical-permit.component';
import { SignatoryEmitterInterface } from '@shared/components/signatory-component/signatory.component';
import { SteamBoilerModel } from '@shared/model/certificates/mechanical/steam-boiler-model';
import { ISteamBoilerModel } from '@shared/model/interface/certificates/mechanical/isteam-boiler-model';
import { SteamBoilerService } from '@shared/services/certificates-clearances/mechanical/steam-boiler.service';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-create-steam-boiler-cert',
  templateUrl: './create-steam-boiler-cert.component.html',
  styleUrls: ['./create-steam-boiler-cert.component.scss'],
})
export class CreateSteamBoilerCertComponent implements OnInit {
  steamBoiler: ISteamBoilerModel = new SteamBoilerModel();
  saveButtonSelector = `SAVE`;

  constructor(
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private mechanicalPermit: MechanicalPermitService,
    private sbService: SteamBoilerService
  ) {}

  ngOnInit(): void {
    this.mechanicalPermit.mechanicalPermit.subscribe(data => {
      this.steamBoiler.mechanicalPermit = data;
    });

    this.sbService.SBCertificate.subscribe(data => {
      this.steamBoiler = data;
    });
  }
  showSelectMechanicalPermitDialog() {
    const dialogRef = this.dialog.open(SelectMechanicalPermitComponent, {
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
    const { mechanicalPermit } = this.steamBoiler;

    // if (!checked) {
    //   this.steamBoiler.isOwner = false;
    //   this.steamBoiler.receivedByFirstName = '';
    //   this.steamBoiler.receivedByMiddleName = '';
    //   this.steamBoiler.receivedByLastName = '';
    //   this.steamBoiler.receivedByCompleteName = '';
    // }

    // if (checked) {
    //   this.steamBoiler.isOwner = true;
    //   this.steamBoiler.receivedByFirstName = mechanicalPermit.building.firstName;
    //   this.steamBoiler.receivedByMiddleName = mechanicalPermit.building.middleInitial;
    //   this.steamBoiler.receivedByLastName = mechanicalPermit.building.lastName;
    //   this.steamBoiler.receivedByCompleteName = `${this.steamBoiler.receivedByFirstName} ${this.steamBoiler.receivedByMiddleName} ${this.steamBoiler.receivedByLastName}`;
    // }
  }
  assignSignatory(signatory: SignatoryEmitterInterface) {
    const { data, selector } = signatory;
    switch (selector) {
      case 'VFR':
        this.steamBoiler.verifier = data;
        this.steamBoiler.verifierId = data.id;
        break;
      case 'MI':
        this.steamBoiler.mechanicalInspector = data;
        this.steamBoiler.mechanicalInspectorId = data.id;
        break;
      case 'CMS':
        this.steamBoiler.chiefMechanicalSection = data;
        this.steamBoiler.chiefMechanicalSectionId = data.id;

        break;
      case 'CIED':
        this.steamBoiler.chiefInspectionEnforcementDivision = data;
        this.steamBoiler.chiefInspectionEnforcementDivisionId = data.id;

        break;
      case 'CPED':
        this.steamBoiler.chiefProcessingAndEvaluationDivision = data;
        this.steamBoiler.chiefProcessingAndEvaluationDivisionId = data.id;
        break;
      case 'BO':
        this.steamBoiler.buildingOfficial = data;
        this.steamBoiler.buildingOfficialId = data.id;

        break;
      default:
        break;
    }
    console.log(this.steamBoiler);
  }

  save() {
    console.log(this.steamBoiler);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.sbService.create(this.steamBoiler).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.sbService.findAll();
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
    this.sbService.update(this.steamBoiler).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.sbService.findAll();
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
    this.steamBoiler = new SteamBoilerModel();
    this.sbService.setCertificate(new SteamBoilerModel());
  }
}
