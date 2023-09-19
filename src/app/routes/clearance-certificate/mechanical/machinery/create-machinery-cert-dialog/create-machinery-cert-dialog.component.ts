import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-machinery-cert-dialog',
  templateUrl: './create-machinery-cert-dialog.component.html',
  styleUrls: ['./create-machinery-cert-dialog.component.scss'],
})
export class CreateMachineryCertDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateMachineryCertDialogComponent>) {}

  //
  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
