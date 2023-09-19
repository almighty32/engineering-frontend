import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-gas-pipe-burner-cert-dialog',
  templateUrl: './create-gas-pipe-burner-cert-dialog.component.html',
  styleUrls: ['./create-gas-pipe-burner-cert-dialog.component.scss'],
})
export class CreateGasPipeBurnerCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateGasPipeBurnerCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
