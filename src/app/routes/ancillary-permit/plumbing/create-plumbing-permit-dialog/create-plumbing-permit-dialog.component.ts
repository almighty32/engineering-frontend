import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-plumbing-permit-dialog',
  templateUrl: './create-plumbing-permit-dialog.component.html',
  styleUrls: ['./create-plumbing-permit-dialog.component.scss'],
})
export class CreatePlumbingPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreatePlumbingPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
