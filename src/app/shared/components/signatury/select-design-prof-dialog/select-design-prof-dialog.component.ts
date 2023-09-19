import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignaturyModel } from '@shared/model/signatury-model';
import { SignatoryService } from '@shared/services/signatory.service';

@Component({
  selector: 'app-select-design-prof-dialog',
  templateUrl: './select-design-prof-dialog.component.html',
  styleUrls: ['./select-design-prof-dialog.component.scss'],
})
export class SelectDesignProfComponent implements OnInit {
  selectedProfessional: ISignatory = new SignaturyModel();

  constructor(
    private dialog: MatDialogRef<SelectDesignProfComponent>,
    private signaturyService: SignatoryService
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close(this.selectedProfessional);
  }
  assignProfessional(professional: ISignatory) {
    this.selectedProfessional = professional;
  }
  cancelSelection() {
    const signatury = new SignaturyModel();
    this.signaturyService.setDesignProfessional(signatury);
    this.dialog.close(new SignaturyModel());
  }
}
