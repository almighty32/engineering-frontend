import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-automatic-manual-transfer-switch-cert-dialog',
  templateUrl: './create-automatic-manual-transfer-switch-cert-dialog.component.html',
  styleUrls: ['./create-automatic-manual-transfer-switch-cert-dialog.component.scss'],
})
export class CreateAutomaticManualTransferSwitchCertDialogComponent implements OnInit {
  constructor(
    private dialog: MatDialogRef<CreateAutomaticManualTransferSwitchCertDialogComponent>
  ) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
