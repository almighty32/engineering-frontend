import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-civil-structural-dialog',
  templateUrl: './create-civil-structural-dialog.component.html',
  styleUrls: ['./create-civil-structural-dialog.component.scss'],
})
export class CreateCivilStructuralPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateCivilStructuralPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
