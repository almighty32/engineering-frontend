import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-unfired-pressure-vessel-cert-dialog',
  templateUrl: './create-unfired-pressure-vessel-cert-dialog.component.html',
  styleUrls: ['./create-unfired-pressure-vessel-cert-dialog.component.scss'],
})
export class CreateUnfiredPressureVesselCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateUnfiredPressureVesselCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
