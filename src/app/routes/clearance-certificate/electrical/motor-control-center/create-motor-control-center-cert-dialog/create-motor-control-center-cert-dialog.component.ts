import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-motor-control-center-cert-dialog',
  templateUrl: './create-motor-control-center-cert-dialog.component.html',
  styleUrls: ['./create-motor-control-center-cert-dialog.component.scss'],
})
export class CreateMotorControlCenterCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateMotorControlCenterCertDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
