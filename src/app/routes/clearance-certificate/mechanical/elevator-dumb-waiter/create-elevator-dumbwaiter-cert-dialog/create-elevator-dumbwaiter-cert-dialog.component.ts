import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-elevator-dumbwaiter-cert-dialog',
  templateUrl: './create-elevator-dumbwaiter-cert-dialog.component.html',
  styleUrls: ['./create-elevator-dumbwaiter-cert-dialog.component.scss'],
})
export class CreateElevatorDumbwaiterCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateElevatorDumbwaiterCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
