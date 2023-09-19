import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SignaturyModel } from '@shared/model/signatury-model';
import { SignatoryService } from '@shared/services/signatory.service';

@Component({
  selector: 'app-select-ins-sup-dialog',
  templateUrl: './select-ins-sup-dialog.component.html',
  styleUrls: ['./select-ins-sup-dialog.component.scss'],
})
export class SelectInsSupDialogComponent implements OnInit {
  constructor(
    private dialog: MatDialogRef<SelectInsSupDialogComponent>,
    private signaturyService: SignatoryService
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close();
  }
  cancelSelection() {
    const signatury = new SignaturyModel();
    this.signaturyService.setInspectorSupervisor(signatury);
    this.dialog.close();
  }
}
