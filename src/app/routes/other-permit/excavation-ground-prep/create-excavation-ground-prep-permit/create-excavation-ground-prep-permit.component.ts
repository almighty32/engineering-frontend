import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
// import { NotificationService } from 'src/app/core/services/notification.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ExcavationGroundPrepModel } from '@shared/model/excavation-ground-prep-permit-model';
import { IExcavationGroundPrepModel } from '@shared/model/interface/iexcavation-ground-prep-permit-model';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { EgpScopeOfWorkComponent } from './egp-scope-of-work/egp-scope-of-work.component';
import { ExcavationGroundPrepPermitService } from '@shared/services/excavation-ground-prep-permit.service';
import { EgpCharOfOccupancyComponent } from './egp-char-of-occupancy/egp-char-of-occupancy.component';
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
  selector: 'app-create-excavation-ground-prep-permit',
  templateUrl: './create-excavation-ground-prep-permit.component.html',
  styleUrls: ['./create-excavation-ground-prep-permit.component.scss'],
})
export class CreateExcavationGroundPrepPermitComponent implements OnInit {
  @ViewChild(EgpScopeOfWorkComponent) _egpScopeOfWork = new EgpScopeOfWorkComponent(
    this.excavationGroundPrepPermitService
  );
  @ViewChild(EgpCharOfOccupancyComponent) _egpCharacterOfOccupancy =
    new EgpCharOfOccupancyComponent(this.excavationGroundPrepPermitService);

  saveButtonSelector = `SAVE`;

  egpPermit: IExcavationGroundPrepModel = new ExcavationGroundPrepModel();
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  constructor(
    private buildingPermitService: BuildingPermitService,
    private formService: FormService,
    private excavationGroundPrepPermitService: ExcavationGroundPrepPermitService,
    private signaturyService: SignatoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formService.saveSelector.subscribe(msg => {
      this.saveButtonSelector = msg;
    });

    this.signaturyService.designProfessional.subscribe(msg => {
      const { id } = msg;
      this.egpPermit.designProfessional = msg;
      this.egpPermit.designProfessionalId = id;
    });
    this.signaturyService.inspectorSupervisor.subscribe(msg => {
      const { id } = msg;
      this.egpPermit.inspectorOrSupervisor = msg;
      this.egpPermit.inspectorOrSupervisorId = id;
    });

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });
    this.setApplicationNumber();
  }

  setApplicationNumber() {
    this.egpPermit.applicationNo = Math.floor(1000000000 + Math.random() * 9000000000).toString();
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
  save() {
    const { egpScopeOfWork } = this._egpScopeOfWork;
    const { egpCharOfOccupancy } = this._egpCharacterOfOccupancy;

    const { isNewConstruction, isErection, isAddition, isRenovation, isRepair, otherScopeOfWork } =
      egpScopeOfWork;

    this.egpPermit.isNewConstruction = isNewConstruction;
    this.egpPermit.isErection = isErection;
    this.egpPermit.isAddition = isAddition;
    this.egpPermit.isRenovation = isRenovation;
    this.egpPermit.isRepair = isRepair;
    this.egpPermit.otherScopeOfWork = otherScopeOfWork;

    const {
      isCharOccupancygroupA,
      isCharOccupancygroupB,
      isCharOccupancygroupC,
      isCharOccupancygroupD,
      isCharOccupancygroupE,
      isCharOccupancygroupF,
      isCharOccupancygroupG,
      isCharOccupancygroupH,
      isCharOccupancygroupI,
      isCharOccupancygroupJ,
    } = egpCharOfOccupancy;

    this.egpPermit.isCharOccupancygroupA = isCharOccupancygroupA;
    this.egpPermit.isCharOccupancygroupB = isCharOccupancygroupB;
    this.egpPermit.isCharOccupancygroupC = isCharOccupancygroupC;
    this.egpPermit.isCharOccupancygroupD = isCharOccupancygroupD;
    this.egpPermit.isCharOccupancygroupE = isCharOccupancygroupE;
    this.egpPermit.isCharOccupancygroupF = isCharOccupancygroupF;
    this.egpPermit.isCharOccupancygroupG = isCharOccupancygroupG;
    this.egpPermit.isCharOccupancygroupH = isCharOccupancygroupH;
    this.egpPermit.isCharOccupancygroupI = isCharOccupancygroupI;
    this.egpPermit.isCharOccupancygroupJ = isCharOccupancygroupJ;

    this.egpPermit.building = this.buildingPermit;
    // this.egpPermit.buildingId = this.buildingPermit.id??'';
    console.log(this.egpPermit);
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.excavationGroundPrepPermitService.create(this.egpPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.excavationGroundPrepPermitService.findAll();
        this.resetInputs();
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
  update() {
    this.excavationGroundPrepPermitService.update(this.egpPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.excavationGroundPrepPermitService.findAll();
        this.resetInputs();
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
  resetInputs() {
    this.setApplicationNumber();
    this.excavationGroundPrepPermitService.setData(new ExcavationGroundPrepModel());
    this.buildingPermitService.setData({} as IBuildingPermitModel);
    this.signaturyService.setDesignProfessional(new SignaturyModel());
    this.signaturyService.setInspectorSupervisor(new SignaturyModel());
  }
}
