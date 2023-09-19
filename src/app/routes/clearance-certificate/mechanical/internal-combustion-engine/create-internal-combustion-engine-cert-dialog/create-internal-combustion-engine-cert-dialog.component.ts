import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-internal-combustion-engine-cert-dialog',
  templateUrl: './create-internal-combustion-engine-cert-dialog.component.html',
  styleUrls: ['./create-internal-combustion-engine-cert-dialog.component.scss'],
})
export class CreateInternalCombustionEngineCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateInternalCombustionEngineCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
