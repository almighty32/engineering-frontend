import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBuildingPermitCertificateModel } from '@shared/model/interface/building-permit/I-building-permit-certificate';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { OccupancyService } from '@shared/services/certificates-clearances/electrical/occupancy.service';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-occupancy-create-dlg',
  templateUrl: './occupancy-create-dlg.component.html',
  styleUrls: ['./occupancy-create-dlg.component.scss'],
})
export class OccupancyCreateDlgComponent implements OnInit {
  saveBtnSelector = 'SAVE';
  saveBtnLabel = 'Save';

  constructor(
    public dialogRef: MatDialogRef<OccupancyCreateDlgComponent>,
    private occupancyService: OccupancyService,
    private notificationService: NotificationService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.formService.saveSelector.subscribe(message => {
      this.saveBtnSelector = message;
      switch (message) {
        case 'SAVE':
          this.saveBtnLabel = 'Save';
          break;
        case 'UPDATE':
          this.saveBtnLabel = 'Update';
          break;
        default:
          break;
      }
    });
  }

  async saveOccupancyCertificate() {
    if (this.saveBtnSelector === 'SAVE') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.occupancyService.create().subscribe({
      next: res => {
        this.occupancyService.findAll();
        this.notificationService.openMessageDialog('Certificate Successfully Saved.');
        this.dialogRef.close();
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
    this.occupancyService.update().subscribe({
      next: res => {
        this.occupancyService.findAll();
        this.notificationService.openMessageDialog('Certificate Successfully Updated.');
        this.dialogRef.close();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {},
    });
  }
}
