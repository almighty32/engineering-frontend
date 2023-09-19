import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { ElectronicPermitService } from '@shared/services/electronic-permit.service';
import { FormService } from '@shared/services/form.service';

@Component({
  selector: 'app-create-electronic-permit',
  templateUrl: './create-electronic-permit.component.html',
  styleUrls: ['./create-electronic-permit.component.scss'],
})
export class CreateElectronicPermitComponent implements OnInit {
  saveButtonSelector = `SAVE`;
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  form = this.electronicPermitService.form;

  constructor(
    private buildingPermitService: BuildingPermitService,
    private electronicPermitService: ElectronicPermitService,
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
  save() {
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  update() {
    this.electronicPermitService.update(this.form.value).subscribe({
      next: res => {
        const ress = res;
        console.log(ress);
        this.electronicPermitService.findAll();

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
  create() {
    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocationService.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.electronicPermitService.scopeOfWorks;
    this.form.value.scopeOfWorks = scopeOfWorks;

    const natureOfSystemInstallation = this.electronicPermitService.natureOfSystemInstallation;
    this.form.value.natureOfSystemInstallation = natureOfSystemInstallation;

    this.form.value.buildingPermit = this.buildingPermit;

    console.log(this.form.value);

    this.electronicPermitService.create(this.form.value).subscribe({
      next: res => {
        console.log(res);
        this.electronicPermitService.findAll();
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
    this.form.reset(this.electronicPermitService.formDefault);
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocationService.form.reset(this.constructionLocationService.formDefault);
    this.electronicPermitService.natureOfSystemInstallation.forEach(
      item => (item.isSelected = false)
    );
    this.electronicPermitService.scopeOfWorks.forEach(item => (item.isSelected = false));
  }
}
