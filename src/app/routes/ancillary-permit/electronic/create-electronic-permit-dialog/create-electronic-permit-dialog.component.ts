import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-electronic-permit-dialog',
  templateUrl: './create-electronic-permit-dialog.component.html',
  styleUrls: ['./create-electronic-permit-dialog.component.scss'],
})
export class CreateElectronicPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateElectronicPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
