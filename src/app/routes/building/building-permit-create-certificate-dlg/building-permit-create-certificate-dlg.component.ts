import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBuildingPermitCertificateModel } from '@shared/model/interface/building-permit/I-building-permit-certificate';
import { BuildingPermitCertificateService } from '@shared/services/building-permit-certificate.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-building-permit-create-certificate-dlg',
  templateUrl: './building-permit-create-certificate-dlg.component.html',
  styleUrls: ['./building-permit-create-certificate-dlg.component.scss'],
})
export class BuildingPermitCreateCertificateDlgComponent implements OnInit {
  buildingPermit: IBuildingPermitCertificateModel = {} as IBuildingPermitCertificateModel;
  constructor(
    public dialogRef: MatDialogRef<BuildingPermitCreateCertificateDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBuildingPermitCertificateModel,
    private bpCertificateService: BuildingPermitCertificateService,
    private bpService: BuildingPermitService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.buildingPermit = this.data;
  }

  async saveBPCertificate() {
    const form = this.bpCertificateService.form;
    console.log(form.value);

    this.bpCertificateService.create().subscribe({
      next: res => {
        console.log(res);
        this.bpService.findAll();

        this.notificationService.openMessageDialog('Certificate Succesfully Saved.');
        this.dialogRef.close();
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
}
