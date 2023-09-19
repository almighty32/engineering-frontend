import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';
import { SignaturyModel } from '@shared/model/signatury-model';
import { SignatoryService } from '@shared/services/signatory.service';
import { SelectDesignProfComponent } from '../signatury/select-design-prof-dialog/select-design-prof-dialog.component';

export interface SignatoryEmitterInterface {
  selector: string;
  data: ISignatory;
}
@Component({
  selector: 'app-signatory',
  templateUrl: './signatory.component.html',
  styleUrls: ['./signatory.component.scss'],
})
export class SignatoryComponent implements OnInit {
  // signatury: ISignatory;
  @Input() label = '';
  @Input() selector = '';
  @Input() data: ISignatory = new SignaturyModel();
  @Input() sectionLabel = '';
  @Output() selectSignatoryCallback = new EventEmitter<SignatoryEmitterInterface>();

  constructor(private signatoryService: SignatoryService, private dialog: MatDialog) {}

  ngOnInit(): void {}
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
    dialogRef.afterClosed().subscribe((result: ISignatory) => {
      this.data = result;
      this.selectSignatoryCallback.emit({ data: result, selector: this.selector });
    });
  }
}
