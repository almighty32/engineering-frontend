import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { OccupancyService } from '@shared/services/certificates-clearances/electrical/occupancy.service';

@Component({
  selector: 'app-create-occupancy-certificate',
  templateUrl: './create-occupancy-certificate.component.html',
  styleUrls: ['./create-occupancy-certificate.component.scss'],
})
export class CreateOccupancyCertificateComponent implements OnInit {
  form = this.occupancyCertService.form;
  occupancyBuildingPermit = this.occupancyCertService.occupancyBuildingPermit;
  applicationTypes: any[] = [
    {
      value: 'Full',
      description: 'Full',
    },
    {
      value: 'Partial',
      description: 'Partial',
    },
  ];

  constructor(
    private _formBuilder: UntypedFormBuilder,
    fb: UntypedFormBuilder,
    private occupancyCertService: OccupancyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  selectBuildingPermit() {
    const dialogRef = this.dialog.open(SelectBuildingPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((buildingPermit: IBuildingPermitModel) => {
      this.form.patchValue({ buildingPermit });
      const { buildingPermitNo, applicant } = buildingPermit;

      const applicant_ = `${applicant.firstName} ${applicant.middleInitial} ${applicant.lastName}`;
      this.occupancyBuildingPermit.buildingPermitNo = buildingPermitNo;
      this.occupancyBuildingPermit.applicant = applicant_;
    });
  }
}
