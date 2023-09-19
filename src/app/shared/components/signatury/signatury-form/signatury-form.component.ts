import { Component, OnInit } from '@angular/core';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { SignaturyModel } from '@shared/model/signatury-model';
import { SignatoryService } from '@shared/services/signatory.service';

@Component({
  selector: 'app-signatury-form',
  templateUrl: './signatury-form.component.html',
  styleUrls: ['./signatury-form.component.scss'],
})
export class SignaturyFormComponent implements OnInit {
  signatury: ISignatory = new SignaturyModel();
  isNew = true;

  constructor(private signatoryService: SignatoryService) {}

  ngOnInit(): void {}

  save() {
    if (this.isNew) {
      this.create();
      return;
    }
    this.update();
  }
  closeDialog() {}
  create() {
    this.signatury.completeName = `${this.signatury.firstName} ${this.signatury.middle} ${this.signatury.lastName}`;

    this.signatoryService.create(this.signatury).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.fetchAllSignatury();
      },
      error: err => {
        console.log({
          error: err,
        });

        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        console.log('completed');
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }
  async fetchAllSignatury() {
    this.signatoryService.findAll().subscribe({
      next: res => {
        this.signatoryService.setSignatureListData(res);
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }
  update() {}
}
