import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sanitary-permit-dialog',
  templateUrl: './create-sanitary-permit-dialog.component.html',
  styleUrls: ['./create-sanitary-permit-dialog.component.scss'],
})
export class CreateSanitaryPermitDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<CreateSanitaryPermitDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
}
