import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IScaffoldingPermitModel } from '@shared/model/interface/iscaffolding-permit-model';
import { ScaffoldingPermitModel } from '@shared/model/scaffolding-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { ScaffoldingPermitService } from '@shared/services/scaffolding-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { ScaffoldingScopeOfWorkComponent } from './scaffolding-scope-of-work/scaffolding-scope-of-work.component';

export interface Fruit {
  name: string;
}
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-create-scaffolding-permit',
  templateUrl: './create-scaffolding-permit.component.html',
  styleUrls: ['./create-scaffolding-permit.component.scss'],
})
export class CreateScaffoldingPermitComponent implements OnInit {
  @ViewChild(ScaffoldingScopeOfWorkComponent) _scaffoldingScopeOfWork =
    new ScaffoldingScopeOfWorkComponent(this.scaffoldingPermitService);

  saveButtonSelector = `SAVE`;

  scaffoldingPermit: IScaffoldingPermitModel = new ScaffoldingPermitModel();
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    fb: UntypedFormBuilder,
    // private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private buildingPermitService: BuildingPermitService,
    private scaffoldingPermitService: ScaffoldingPermitService,
    private signaturyService: SignatoryService,
    private formService: FormService,

    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formService.saveSelector.subscribe(msg => {
      this.saveButtonSelector = msg;
    });

    this.signaturyService.designProfessional.subscribe(msg => {
      const { id } = msg;
      this.scaffoldingPermit.designProfessional = msg;
      this.scaffoldingPermit.designProfessionalId = id;
    });
    this.signaturyService.inspectorSupervisor.subscribe(msg => {
      const { id } = msg;
      this.scaffoldingPermit.inspectorOrSupervisor = msg;
      this.scaffoldingPermit.inspectorOrSupervisorId = id;
    });

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });
    this.setApplicationNumber();
  }

  setApplicationNumber() {
    this.scaffoldingPermit.applicationNo = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
  }

  save() {
    const { scaffoldingScopeOfWork } = this._scaffoldingScopeOfWork;

    const {
      isAddition,
      isNewConstruction,
      isErection,
      isAlteration,
      isRenovation,
      isConversion,
      isRepair,
      isMoving,
      isRaising,
      isDemolition,
      isAccesoryBuildingOrStructure,
      otherScopeOfWork,
    } = scaffoldingScopeOfWork;

    this.scaffoldingPermit.isAddition = isAddition;
    this.scaffoldingPermit.isNewConstruction = isNewConstruction;
    this.scaffoldingPermit.isErection = isErection;
    this.scaffoldingPermit.isAlteration = isAlteration;
    this.scaffoldingPermit.isRenovation = isRenovation;
    this.scaffoldingPermit.isConversion = isConversion;
    this.scaffoldingPermit.isMoving = isMoving;
    this.scaffoldingPermit.isRepair = isRepair;
    this.scaffoldingPermit.isRaising = isRaising;
    this.scaffoldingPermit.isDemolition = isDemolition;
    this.scaffoldingPermit.isAccesoryBuildingOrStructure = isAccesoryBuildingOrStructure;
    this.scaffoldingPermit.otherScopeOfWork = otherScopeOfWork;

    // this.scaffoldingPermit.buildingId = this.buildingPermit.id??'';
    this.scaffoldingPermit.building = this.buildingPermit;

    console.log(this.scaffoldingPermit);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }
  update() {
    this.scaffoldingPermitService.update(this.scaffoldingPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.scaffoldingPermitService.findAll();
        this.resetInputs();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }
  create() {
    this.scaffoldingPermitService.create(this.scaffoldingPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.scaffoldingPermitService.findAll();
        this.resetInputs();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }
  resetInputs() {
    this.setApplicationNumber();
    this.scaffoldingPermitService.setData(new ScaffoldingPermitModel());
    this.buildingPermitService.setData({} as IBuildingPermitModel);
    this.signaturyService.setDesignProfessional(new SignaturyModel());
    this.signaturyService.setInspectorSupervisor(new SignaturyModel());
  }

  showSelectBuildingPermitDialog() {
    const dialogRef = this.dialog.open(SelectBuildingPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      // minHeight: '90vh',
      // maxHeight: '80vh',
      // disableClose: true,
      autoFocus: false,
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
