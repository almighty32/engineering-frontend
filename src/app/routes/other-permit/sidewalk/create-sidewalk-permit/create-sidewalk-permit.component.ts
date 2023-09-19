import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IFencingPermitModel } from '@shared/model/interface/ifencing-permit-model';
import { FencingPermitModel } from '@shared/model/fencing-permit-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FencingPermitService } from '@shared/services/fencing-permit.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { NatureOfCivilStructureWorksComponent } from 'app/routes/ancillary-permit/structural/create-civil-structural-permit/nature-of-civil-structure-works/nature-of-civil-structure-works.component';
import { ScaffoldingScopeOfWorkComponent } from '../../scaffolding/create-scaffolding-permit/scaffolding-scope-of-work/scaffolding-scope-of-work.component';
import { SidewalkScopeOfWorkComponent } from './sidewalk-scope-of-work/sidewalk-scope-of-work.component';
import { SidewalkPermitService } from '@shared/services/sidewalk-permit.service';
import { ISidewalkConstructionPermitModel } from '@shared/model/interface/isidewalk-construction-permit-model';
import { SidewalkConsturctionPermitModel } from '@shared/model/sidewalk-construction-permit-model';
import { SignatoryService } from '@shared/services/signatory.service';
import { SignaturyModel } from '@shared/model/signatury-model';
import { FormService } from '@shared/services/form.service';

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
  selector: 'app-create-sidewalk-permit',
  templateUrl: './create-sidewalk-permit.component.html',
  styleUrls: ['./create-sidewalk-permit.component.scss'],
})
export class CreateSidewalkPermitComponent implements OnInit {
  @ViewChild(SidewalkScopeOfWorkComponent) _sidewalkScopeOfWork = new SidewalkScopeOfWorkComponent(
    this.sidewalkPermitService
  );

  saveButtonSelector = `SAVE`;

  sidewalkPermit: ISidewalkConstructionPermitModel = new SidewalkConsturctionPermitModel();
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    fb: UntypedFormBuilder,
    // private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private buildingPermitService: BuildingPermitService,
    private sidewalkPermitService: SidewalkPermitService,
    private formService: FormService,

    private signaturyService: SignatoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formService.saveSelector.subscribe(msg => {
      this.saveButtonSelector = msg;
    });

    this.signaturyService.designProfessional.subscribe(msg => {
      const { id } = msg;
      this.sidewalkPermit.designProfessional = msg;
      this.sidewalkPermit.designProfessionalId = id;
    });
    this.signaturyService.inspectorSupervisor.subscribe(msg => {
      const { id } = msg;
      this.sidewalkPermit.inspectorOrSupervisor = msg;
      this.sidewalkPermit.inspectorOrSupervisorId = id;
    });

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });
    this.setApplicationNumber();
  }

  setApplicationNumber() {
    this.sidewalkPermit.applicationNo = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
  }

  save() {
    const { sidewalkScopeOfWork } = this._sidewalkScopeOfWork;

    const { isAddition, isNewConstruction, isErection, isRepair, isRenovation, otherScopeOfWork } =
      sidewalkScopeOfWork;

    this.sidewalkPermit.isAddition = isAddition;
    this.sidewalkPermit.isNewConstruction = isNewConstruction;
    this.sidewalkPermit.isErection = isErection;
    this.sidewalkPermit.isRepair = isRepair;
    this.sidewalkPermit.isRenovation = isRenovation;
    this.sidewalkPermit.otherScopeOfWork = otherScopeOfWork;

    // this.sidewalkPermit.buildingId = this.buildingPermit.id??'';
    this.sidewalkPermit.building = this.buildingPermit;

    console.log(this.sidewalkPermit);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }
  update() {
    this.sidewalkPermitService.update(this.sidewalkPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.sidewalkPermitService.findAll();
        this.resetInputs();
      },
      error: err => {
        console.log({
          error: err,
        });
        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }

  create() {
    this.sidewalkPermitService.create(this.sidewalkPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.sidewalkPermitService.findAll();
        this.resetInputs();
      },
      error: err => {
        console.log({
          error: err,
        });
        // notify({ message: err.error.message, shading: false }, 'error', 1000);
      },
      complete: () => {
        // notify({ message: 'Successfully saved.', shading: false }, 'success', 1000);
      },
    });
  }
  resetInputs() {
    this.setApplicationNumber();
    this.sidewalkPermitService.setData(new SidewalkConsturctionPermitModel());
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
