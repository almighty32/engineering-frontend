import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-architectural-permit-dialog',
  templateUrl: './create-architectural-permit-dialog.component.html',
  styleUrls: ['./create-architectural-permit-dialog.component.scss'],
})
export class CreateArchitecturalPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateArchitecturalPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
