import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-generator-or-ups-cert-dialog',
  templateUrl: './create-generator-or-ups-cert-dialog.component.html',
  styleUrls: ['./create-generator-or-ups-cert-dialog.component.scss'],
})
export class CreateGeneratorOrUpsDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateGeneratorOrUpsDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
