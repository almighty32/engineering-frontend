import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sidewalk-permit-dialog',
  templateUrl: './create-sidewalk-permit-dialog.component.html',
  styleUrls: ['./create-sidewalk-permit-dialog.component.scss'],
})
export class CreateSidewalkPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateSidewalkPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
