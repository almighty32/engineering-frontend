import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-create-building-permit-dialog',
  templateUrl: './create-building-permit-dialog.component.html',
  styleUrls: ['./create-building-permit-dialog.component.scss'],
})
export class CreateBuildingPermitDialogComponent implements OnInit {
  buildingPermitForm = this.buildingPermitService.form;

  constructor(
    public dialog: MatDialogRef<CreateBuildingPermitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private buildingPermitService: BuildingPermitService
  ) {}

  ngOnInit(): void {
    // this.buildingPermitForm.setValue(this.data);
  }

  closeDialog() {
    this.dialog.close();
  }
}
