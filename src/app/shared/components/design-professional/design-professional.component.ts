import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';
import { SignaturyModel } from '@shared/model/signatury-model';
import { SignatoryService } from '@shared/services/signatory.service';
import { SelectDesignProfComponent } from '../signatury/select-design-prof-dialog/select-design-prof-dialog.component';

@Component({
  selector: 'app-design-professional',
  templateUrl: './design-professional.component.html',
  styleUrls: ['./design-professional.component.scss'],
})
export class DesignProfessionalComponent implements OnInit {
  signatury: ISignatory = new SignaturyModel();
  @Input() label = '';

  constructor(private signatoryService: SignatoryService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.signatoryService.designProfessional.subscribe(msg => {
      this.signatury = msg;
    });
  }

  openSelectDesignProf() {
    const dialogRef = this.dialog.open(SelectDesignProfComponent, {
      hasBackdrop: true,
      width: '95vw',
      height: '90vh',
      // minHeight: '90vh',
      // maxHeight: '80vh',
      // minHeight: '90vh',
      // maxHeight: '80vh',
      // disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
      console.log(result);
    });
  }
}
