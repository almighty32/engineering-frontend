import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-temp-power-con-cert-dialog',
  templateUrl: './create-temp-power-con-cert-dialog.component.html',
  styleUrls: ['./create-temp-power-con-cert-dialog.component.scss'],
})
export class CreateTemporaryPowerConDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateTemporaryPowerConDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
