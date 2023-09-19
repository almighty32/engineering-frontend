import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ITemporaryServiceConnectionModel } from '@shared/model/interface/itemporary-service-connection-model';
import { SignaturyModel } from '@shared/model/signatury-model';
import { TemporaryServiceConnectionModel } from '@shared/model/temporary-service-connection-model';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';
import { TemporaryServiceConnectionPermitService } from '@shared/services/temporary-service-permit.service';
import { TscElectricalLoadOrCapacitiesAppliedForComponent } from './tsc-electrical-load-or-capacities-applied-for/tsc-electrical-load-or-capacities-applied-for.component';
import { TscPurposeComponent } from './tsc-purpose/tsc-purpose.component';

@Component({
  selector: 'app-create-temporary-service-connection',
  templateUrl: './create-temporary-service-connection.component.html',
  styleUrls: ['./create-temporary-service-connection.component.scss'],
})
export class CreateTemporaryServiceConnectionComponent implements OnInit {
  @ViewChild(TscPurposeComponent) _tscPurpose = new TscPurposeComponent(this.tscPermitService);
  @ViewChild(TscElectricalLoadOrCapacitiesAppliedForComponent) _tscElectricalLoad =
    new TscElectricalLoadOrCapacitiesAppliedForComponent(this.tscPermitService);

  saveButtonSelector = `SAVE`;

  tscPermit: ITemporaryServiceConnectionModel = new TemporaryServiceConnectionModel();
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;

  constructor(
    private buildingPermitService: BuildingPermitService,
    private tscPermitService: TemporaryServiceConnectionPermitService,
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
      this.tscPermit.designProfessional = msg;
      this.tscPermit.designProfessionalId = id;
    });
    this.signaturyService.inspectorSupervisor.subscribe(msg => {
      const { id } = msg;
      this.tscPermit.inspectorOrSupervisor = msg;
      this.tscPermit.inspectorOrSupervisorId = id;
    });

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });
    this.setApplicationNumber();
  }

  setApplicationNumber() {
    this.tscPermit.applicationNo = Math.floor(1000000000 + Math.random() * 9000000000).toString();
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
    const { tscPurpose } = this._tscPurpose;
    const { electricalLoad } = this._tscElectricalLoad;

    const { isForConstruction, isForTesting, forOthers } = tscPurpose;
    const { totalConnectionLoad, totalTransformerCapacity, totalGeneratorOrUpsCapacity } =
      electricalLoad;

    this.tscPermit.totalConnectionLoad = totalConnectionLoad;
    this.tscPermit.totalTransformerCapacity = totalTransformerCapacity;
    this.tscPermit.totalGeneratorOrUpsCapacity = totalGeneratorOrUpsCapacity;

    this.tscPermit.building = this.buildingPermit;
    // this.tscPermit.buildingId = this.buildingPermit.id??'';

    this.tscPermit.isForConstruction = isForConstruction;
    this.tscPermit.isForTesting = isForTesting;
    this.tscPermit.forOthers = forOthers;

    console.log(this.tscPermit);

    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }
  update() {}
  create() {
    this.tscPermitService.create(this.tscPermit).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.tscPermitService.findAll();
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
    this.tscPermitService.setData(new TemporaryServiceConnectionModel());
    this.buildingPermitService.setData({} as IBuildingPermitModel);
    this.signaturyService.setDesignProfessional(new SignaturyModel());
    this.signaturyService.setInspectorSupervisor(new SignaturyModel());
  }
}
