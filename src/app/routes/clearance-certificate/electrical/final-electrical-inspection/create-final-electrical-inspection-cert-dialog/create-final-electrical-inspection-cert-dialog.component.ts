import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-final-electrical-inspection-cert-dialog',
  templateUrl: './create-final-electrical-inspection-cert-dialog.component.html',
  styleUrls: ['./create-final-electrical-inspection-cert-dialog.component.scss'],
})
export class CreateFinalElectInspCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateFinalElectInspCertDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
