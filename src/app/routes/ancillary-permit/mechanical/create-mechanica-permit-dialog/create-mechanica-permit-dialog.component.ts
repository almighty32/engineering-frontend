import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-mechanica-permit-dialog',
  templateUrl: './create-mechanica-permit-dialog.component.html',
  styleUrls: ['./create-mechanica-permit-dialog.component.scss'],
})
export class CreateMechanicalPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateMechanicalPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
