import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-building-permit-requirements-list-dlg',
  templateUrl: './building-permit-requirements-list-dlg.component.html',
  styleUrls: ['./building-permit-requirements-list-dlg.component.scss'],
})
export class BuildingPermitRequirementsListDlgComponent implements OnInit {
  requirements: any = {};
  constructor(
    public dialogRef: MatDialogRef<BuildingPermitRequirementsListDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public buildingPermit: any,
    private buildingPermitService: BuildingPermitService
  ) {}

  ngOnInit(): void {
    this.findRequirements();
  }

  findRequirements() {
    this.buildingPermitService.findRequirements(this.buildingPermit.id).subscribe({
      next: res => {
        this.requirements = res;
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  approveBuildingPermit() {
    this.buildingPermitService.approve(this.buildingPermit.id).subscribe({
      next: res => {
        const res_ = res;
        console.log({ res_ });
        this.buildingPermitService.findAll();
        this.dialogRef.close();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
