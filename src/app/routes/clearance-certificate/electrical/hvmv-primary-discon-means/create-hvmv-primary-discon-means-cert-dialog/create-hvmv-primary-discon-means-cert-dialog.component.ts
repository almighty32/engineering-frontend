import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-hvmv-primary-discon-means-cert-dialog',
  templateUrl: './create-hvmv-primary-discon-means-cert-dialog.component.html',
  styleUrls: ['./create-hvmv-primary-discon-means-cert-dialog.component.scss'],
})
export class CreateHvmvPrimaryDisconMeansCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateHvmvPrimaryDisconMeansCertDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
