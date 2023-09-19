import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-scaffolding-permit-dialog',
  templateUrl: './create-scaffolding-permit-dialog.component.html',
  styleUrls: ['./create-scaffolding-permit-dialog.component.scss'],
})
export class CreateScaffoldingPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateScaffoldingPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
