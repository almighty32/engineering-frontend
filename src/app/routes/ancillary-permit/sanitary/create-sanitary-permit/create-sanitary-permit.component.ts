import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
// import { NotificationService } from 'src/app/core/services/notification.service';

import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { FormService } from '@shared/services/form.service';
import { SanitaryPermitService } from '@shared/services/sanitary-permit.service';

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
  selector: 'app-create-sanitary-permit',
  templateUrl: './create-sanitary-permit.component.html',
  styleUrls: ['./create-sanitary-permit.component.scss'],
})
export class CreateSanitaryPermitComponent implements OnInit {
  saveButtonSelector = `SAVE`;
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  form = this.sanitaryPermitService.form;

  constructor(
    private sanitaryPermitService: SanitaryPermitService,
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

  showSelectBuildingPermitDialog() {
    const dialogRef = this.dialog.open(SelectBuildingPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((buildingPermit: IBuildingPermitModel) => {
      this.buildingPermit = buildingPermit;
      this.applicantService.form.patchValue(buildingPermit?.applicant);
      this.constructionLocationService.form.patchValue(buildingPermit?.constructionLocation);
    });
  }

  update() {
    this.sanitaryPermitService.update(this.form.value).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.sanitaryPermitService.findAll();
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
  create() {
    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocationService.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.sanitaryPermitService.scopeOfWorks;
    this.form.value.scopeOfWorks = scopeOfWorks;

    const waterSupplies = this.sanitaryPermitService.waterSupplies;
    this.form.value.waterSupplies = waterSupplies;

    const systemOfDisposals = this.sanitaryPermitService.systemOfDisposals;
    this.form.value.systemOfDisposals = systemOfDisposals;

    this.form.value.buildingPermit = this.buildingPermit;

    console.log(this.form.value);

    this.sanitaryPermitService.create(this.form.value).subscribe({
      next: res => {
        console.log(res);
        this.sanitaryPermitService.findAll();
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
    this.form.reset(this.sanitaryPermitService.formDefault);
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocationService.form.reset(this.constructionLocationService.formDefault);
    this.sanitaryPermitService.waterSupplies.forEach(item => (item.isSelected = false));
    this.sanitaryPermitService.systemOfDisposals.forEach(item => (item.isSelected = false));
    this.sanitaryPermitService.scopeOfWorks.forEach(item => (item.isSelected = false));
  }
}
