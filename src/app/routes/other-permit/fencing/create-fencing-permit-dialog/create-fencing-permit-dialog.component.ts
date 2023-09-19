import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-fencing-permit-dialog',
  templateUrl: './create-fencing-permit-dialog.component.html',
  styleUrls: ['./create-fencing-permit-dialog.component.scss'],
})
export class CreateFencingPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateFencingPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
