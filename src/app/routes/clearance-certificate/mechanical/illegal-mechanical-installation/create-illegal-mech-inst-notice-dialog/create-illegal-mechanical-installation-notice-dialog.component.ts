import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-illegal-mechanical-installation-notice-dialog',
  templateUrl: './create-illegal-mechanical-installation-notice-dialog.component.html',
  styleUrls: ['./create-illegal-mechanical-installation-notice-dialog.component.scss'],
})
export class CreateIllegalMechanicalInstallationNoticeDialogComponent implements OnInit {
  constructor(
    private dialog: MatDialogRef<CreateIllegalMechanicalInstallationNoticeDialogComponent>
  ) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
