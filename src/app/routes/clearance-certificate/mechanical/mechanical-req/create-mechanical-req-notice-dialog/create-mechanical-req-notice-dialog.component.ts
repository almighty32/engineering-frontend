import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-mechanical-req-notice-dialog',
  templateUrl: './create-mechanical-req-notice-dialog.component.html',
  styleUrls: ['./create-mechanical-req-notice-dialog.component.scss'],
})
export class CreateMechanicalReqNoticeDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateMechanicalReqNoticeDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
