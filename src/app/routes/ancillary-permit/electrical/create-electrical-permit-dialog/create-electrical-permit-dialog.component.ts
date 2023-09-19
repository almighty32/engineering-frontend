import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-electrical-permit-dialog',
  templateUrl: './create-electrical-permit-dialog.component.html',
  styleUrls: ['./create-electrical-permit-dialog.component.scss'],
})
export class CreateElectricalPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateElectricalPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
