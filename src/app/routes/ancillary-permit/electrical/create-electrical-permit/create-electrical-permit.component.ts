import { T } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { IApplicant } from '@shared/model/interface/i-applicant';
import { IConstructionLocation } from '@shared/model/interface/shared/I-construction-location';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { ElectricalPermitService } from '@shared/services/electrical-permit.service';
import { FormService } from '@shared/services/form.service';
import { SignatoryService } from '@shared/services/signatory.service';

@Component({
  selector: 'app-create-electrical-permit',
  templateUrl: './create-electrical-permit.component.html',
  styleUrls: ['./create-electrical-permit.component.scss'],
})
export class CreateElectricalPermitComponent implements OnInit {
  saveButtonSelector = `SAVE`;
  form = this.electricalPermitService.form;
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  constructor(
    private electricalPermitService: ElectricalPermitService,
    private formService: FormService,
    private dialog: MatDialog,
    private applicantService: ApplicantService,
    private constructionLocationService: ConstructionLocationService
  ) {}

  ngOnInit(): void {
    this.formService.saveSelector.subscribe(msg => {
      this.saveButtonSelector = msg;
    });
  }
  save() {
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  update() {
    // this.electricalPermitService.update(this.electricalPermit).subscribe({
    //   next: res => {
    //     this.electricalPermitService.findAll();
    //     this.resetInputs();
    //   },
    //   error: err => {
    //     console.log({
    //       error: err,
    //     });
    //   },
    //   complete: () => {},
    // });
  }
  create() {
    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocationService.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.electricalPermitService.scopeOfWorks;
    this.form.value.scopeOfWorks = scopeOfWorks;

    this.form.value.buildingPermit = this.buildingPermit;

    this.electricalPermitService.create(this.form.value).subscribe({
      next: res => {
        console.log(res);
        this.electricalPermitService.findAll();
        this.resetInputs();
        this.dialog.closeAll();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {},
    });
  }

  resetInputs() {
    this.electricalPermitService.scopeOfWorks.forEach(item => (item.isSelected = false));
    this.form.reset(this.electricalPermitService.formDefault);
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocationService.form.reset(this.constructionLocationService.formDefault);
  }

  showSelectBuildingPermitDialog() {
    const dialogRef = this.dialog.open(SelectBuildingPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((buildingPermit: IBuildingPermitModel) => {
      this.buildingPermit = buildingPermit;
      this.applicantService.form.patchValue(buildingPermit?.applicant ?? ({} as IApplicant));
      this.constructionLocationService.form.patchValue(
        buildingPermit?.constructionLocation ?? ({} as IConstructionLocation)
      );
    });
  }
}
