import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
// import { NotificationService } from 'src/app/core/services/notification.service';

import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { DemolitionPermitModel } from '@shared/model/demolition-permit-model';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IDemolitionPermitModel } from '@shared/model/interface/idemolition-permit-model';
import { SignaturyModel } from '@shared/model/signatury-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { DemolitionPermitService } from '@shared/services/demolition-permit.service';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { DemolitionScopeOfWorkComponent } from './demolition-scope-of-work/demolition-scope-of-work.component';

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
  selector: 'app-create-demolition-permit',
  templateUrl: './create-demolition-permit.component.html',
  styleUrls: ['./create-demolition-permit.component.scss'],
})
export class CreateDemolitionPermitComponent implements OnInit {
  @ViewChild(DemolitionScopeOfWorkComponent) _demolitionScopeOfWork =
    new DemolitionScopeOfWorkComponent(this.demolitionPermitService);
  saveButtonSelector = `SAVE`;
  demolitionPermit: IDemolitionPermitModel = new DemolitionPermitModel();
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;

  constructor(
    private buildingPermitService: BuildingPermitService,
    private demolitionPermitService: DemolitionPermitService,
    private formService: FormService,
    private signaturyService: SignatoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formService.saveSelector.subscribe(msg => {
      this.saveButtonSelector = msg;
    });
    this.signaturyService.inspectorSupervisor.subscribe(msg => {
      const { id } = msg;
      this.demolitionPermit.inspectorOrSupervisor = msg;
      this.demolitionPermit.inspectorOrSupervisorId = id;
    });

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });
    this.setApplicationNumber();
  }

  setApplicationNumber() {
    this.demolitionPermit.applicationNo = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
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
    const { demolitionPermitScopeOfWork } = this._demolitionScopeOfWork;
    const { isDemolition, otherScopeOfWork } = demolitionPermitScopeOfWork;

    this.demolitionPermit.isDemolition = isDemolition;
    this.demolitionPermit.otherScopeOfWork = otherScopeOfWork;

    this.demolitionPermit.building = this.buildingPermit;
    // this.demolitionPermit.buildingId = this.buildingPermit.id??'';

    // this.demolitionPermit.applicationNo = applicationNo;
    // this.demolitionPermit.architect = architect;
    // this.demolitionPermit.buildingId = buildingId;
    // this.demolitionPermit.isErectionOrLifting = isErectionOrLifting;
    // this.demolitionPermit.isExcavation = isExcavation;
    // this.demolitionPermit.isFoundation = isFoundation;
    // this.demolitionPermit.isMaterialTesting = isMaterialTesting;
    // this.demolitionPermit.isPiling = isPiling;
    // this.demolitionPermit.isSlabs = isSlabs;
    // this.demolitionPermit.isStaking = isStaking;
    // this.demolitionPermit.isWalls = isWalls;
    console.log(this.demolitionPermit);

    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.demolitionPermitService.create(this.demolitionPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.demolitionPermitService.findAll();
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
    this.demolitionPermitService.update(this.demolitionPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.demolitionPermitService.findAll();
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
    this.demolitionPermitService.setData(new DemolitionPermitModel());
    this.buildingPermitService.setData({} as IBuildingPermitModel);
    this.signaturyService.setDesignProfessional(new SignaturyModel());
    this.signaturyService.setInspectorSupervisor(new SignaturyModel());
  }
}
