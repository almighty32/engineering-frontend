import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-escalator-cert-dialog',
  templateUrl: './create-escalator-cert-dialog.component.html',
  styleUrls: ['./create-escalator-cert-dialog.component.scss'],
})
export class CreateEscalatorCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateEscalatorCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
