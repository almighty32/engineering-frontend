import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tsc-permit-dialog',
  templateUrl: './create-tsc-permit-dialog.component.html',
  styleUrls: ['./create-tsc-permit-dialog.component.scss'],
})
export class CreateTscPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateTscPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
