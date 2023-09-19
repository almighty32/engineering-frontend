import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-incoming-low-voltage-switchgear-cert-dialog',
  templateUrl: './create-incoming-low-voltage-switchgear-cert-dialog.component.html',
  styleUrls: ['./create-incoming-low-voltage-switchgear-cert-dialog.component.scss'],
})
export class CreateIncomingLVSwitchgearDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateIncomingLVSwitchgearDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
