import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-lighting-distribution-panels-cert-dialog',
  templateUrl: './create-lighting-distribution-panels-cert-dialog.component.html',
  styleUrls: ['./create-lighting-distribution-panels-cert-dialog.component.scss'],
})
export class CreateLightingDistributionPanelCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateLightingDistributionPanelCertDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
