import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-steamboiler-cert-dialog',
  templateUrl: './create-steamboiler-cert-dialog.component.html',
  styleUrls: ['./create-steamboiler-cert-dialog.component.scss'],
})
export class CreateSteamboilerCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateSteamboilerCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
