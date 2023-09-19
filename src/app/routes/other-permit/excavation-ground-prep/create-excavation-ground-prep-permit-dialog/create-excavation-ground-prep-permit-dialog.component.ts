import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-excavation-ground-prep-permit-dialog',
  templateUrl: './create-excavation-ground-prep-permit-dialog.component.html',
  styleUrls: ['./create-excavation-ground-prep-permit-dialog.component.scss'],
})
export class CreateExcavationGroundPrepPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateExcavationGroundPrepPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
