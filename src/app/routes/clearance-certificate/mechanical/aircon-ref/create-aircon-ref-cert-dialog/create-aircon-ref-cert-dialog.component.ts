import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-aircon-ref-cert-dialog',
  templateUrl: './create-aircon-ref-cert-dialog.component.html',
  styleUrls: ['./create-aircon-ref-cert-dialog.component.scss'],
})
export class CreateAirconRefCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateAirconRefCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
