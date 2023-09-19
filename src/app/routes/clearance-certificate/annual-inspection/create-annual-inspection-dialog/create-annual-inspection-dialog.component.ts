import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-annual-inspection-dialog',
  templateUrl: './create-annual-inspection-dialog.component.html',
  styleUrls: ['./create-annual-inspection-dialog.component.scss'],
})
export class CreateAnnualInspectionDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateAnnualInspectionDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
