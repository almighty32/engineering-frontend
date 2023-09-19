import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-demolition-permit-dialog',
  templateUrl: './create-demolition-permit-dialog.component.html',
  styleUrls: ['./create-demolition-permit-dialog.component.scss'],
})
export class CreateDemolitionPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateDemolitionPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
