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
import { FencingScopeOfWorkComponent } from './fencing-scope-of-work/fencing-scope-of-work.component';
import { FencingTypeComponent } from './fencing-type/fencing-type.component';
import { SignatoryService } from '@shared/services/signatory.service';
import { SignaturyModel } from '@shared/model/signatury-model';
import { FormService } from '@shared/services/form.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-create-fencing-permit',
  templateUrl: './create-fencing-permit.component.html',
  styleUrls: ['./create-fencing-permit.component.scss'],
})
export class CreateFencingPermitComponent implements OnInit {
  @ViewChild(FencingScopeOfWorkComponent) _fencingScopeOfWork = new FencingScopeOfWorkComponent(
    this.fencingPermitService
  );

  @ViewChild(FencingTypeComponent) _fencingType = new FencingTypeComponent(
    this.fencingPermitService
  );

  checked = false;
  saveButtonSelector = `SAVE`;

  fencingPermit: IFencingPermitModel = new FencingPermitModel();
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    fb: UntypedFormBuilder,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private buildingPermitService: BuildingPermitService,
    private fencingPermitService: FencingPermitService,
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
      this.fencingPermit.designProfessional = msg;
      this.fencingPermit.designProfessionalId = id;
    });
    this.signaturyService.inspectorSupervisor.subscribe(msg => {
      const { id } = msg;
      this.fencingPermit.inspectorOrSupervisor = msg;
      this.fencingPermit.inspectorOrSupervisorId = id;
    });

    this.fencingPermitService.fencingPermit.subscribe(msg => {
      this.fencingPermit = msg;
    });

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });

    this.saveButtonSelector === 'SAVE' ? this.setApplicationNumber() : '';
  }

  setApplicationNumber() {
    this.fencingPermit.applicationNo = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
  }
  save() {
    const { fencingScopeOfWork } = this._fencingScopeOfWork;
    const { fencingType } = this._fencingType;

    const { isAddition, isNewConstruction, isErection, isRepair, isDemolition, others } =
      fencingScopeOfWork;
    const {
      isIndigenousMaterials,
      isReinforceConcrete,
      isRCAndConcHollowBlocks,
      isRCAndBricks,
      isRCAndInterlinkOrCycloneWire,
      isRCSteelMatting,
      isRCBarbedWire,
      othersFencingType,
    } = fencingType;

    this.fencingPermit.isAddition = isAddition;
    this.fencingPermit.isNewConstruction = isNewConstruction;
    this.fencingPermit.isErection = isErection;
    this.fencingPermit.isRepair = isRepair;
    this.fencingPermit.isDemolition = isDemolition;
    this.fencingPermit.others = others;

    this.fencingPermit.isIndigenousMaterials = isIndigenousMaterials;
    this.fencingPermit.isReinforceConcrete = isReinforceConcrete;
    this.fencingPermit.isRCAndConcHollowBlocks = isRCAndConcHollowBlocks;
    this.fencingPermit.isRCAndBricks = isRCAndBricks;
    this.fencingPermit.isRCAndInterlinkOrCycloneWire = isRCAndInterlinkOrCycloneWire;
    this.fencingPermit.isRCSteelMatting = isRCSteelMatting;
    this.fencingPermit.isRCBarbedWire = isRCBarbedWire;
    this.fencingPermit.othersFencingType = othersFencingType;

    // this.fencingPermit.buildingId = this.buildingPermit.id??'';
    this.fencingPermit.building = this.buildingPermit;

    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  create() {
    this.fencingPermitService.create(this.fencingPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.fencingPermitService.findAll();
        this.resetInputs();
        this.notificationService.openSnackBar('Fencing Permit Successfully Created!');
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
  update() {
    console.log('update record');
    this.fencingPermitService.update(this.fencingPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.fencingPermitService.findAll();
        this.resetInputs();
        this.notificationService.openSnackBar('Create Fencing Permit Succesfull');
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
    this.fencingPermitService.setData(new FencingPermitModel());
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
