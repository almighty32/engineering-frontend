import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProjectRegistrationlModel } from '@shared/model/interface/Iproject-registration-model';
import { ISignatory } from '@shared/model/interface/I-signatory';
import { ProjectRegistrationModel } from '@shared/model/project-registration-model';
import { SignaturyModel } from '@shared/model/signatury-model';
import { SignatoryService } from '@shared/services/signatory.service';
import { SelectInsSupDialogComponent } from '../signatury/select-ins-sup-dialog/select-insp-sup-dialog.component';
import { BuildingPermitPrintService } from '@shared/services/print/permit/bp-permit-print.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-inspector-supervisor',
  templateUrl: './inspector-supervisor.component.html',
  styleUrls: ['./inspector-supervisor.component.scss'],
})
export class InspectorSupervisorComponent implements OnInit {
  @Input() label = '';
  @Input() title = 'Supervisor/In-charge of Architectural Works';
  signatury: ISignatory = new SignaturyModel();

  form = this.buildingPermitService.form;

  constructor(
    private signatoryService: SignatoryService,
    private dialog: MatDialog,
    private buildingPermitService: BuildingPermitService
  ) {}

  ngOnInit(): void {
    this.signatoryService.inspectorSupervisor.subscribe(msg => {
      this.signatury = msg;
    });
  }
  openSelectInspectorSupervisor() {
    const dialogRef = this.dialog.open(SelectInsSupDialogComponent, {
      hasBackdrop: true,
      width: '95vw',
      height: '90vh',
      // minHeight: '90vh',
      // maxHeight: '80vh',
      // disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
}
