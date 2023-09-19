import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { ArchitecturalPermitService } from '@shared/services/architectural-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-architectural-permit',
  templateUrl: './create-architectural-permit.component.html',
  styleUrls: ['./create-architectural-permit.component.scss'],
})
export class CreateArchitecturalPermitComponent implements OnInit {
  saveButtonSelector = 'SAVE';
  form = this.architecturalPermitService.form;

  constructor(
    private architecturalPermitService: ArchitecturalPermitService,
    public dialog: MatDialog,
    private applicantService: ApplicantService,
    private constructionLocationService: ConstructionLocationService
  ) {}

  ngOnInit(): void {}

  save() {
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }
  update() {
    this.architecturalPermitService.update(this.form).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.architecturalPermitService.findAll();
        this.resetInputs();
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
    console.log('Create building permit');

    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocationService.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.architecturalPermitService.scopeOfWorks;
    this.form.value.scopeOfWork = scopeOfWorks;

    const facilities = this.architecturalPermitService.facilities;
    this.form.value.facilities = facilities;

    const fireCodes = this.architecturalPermitService.conformanceToFireCodes;
    this.form.value.conformanceToFireCode = fireCodes;

    const percentageOfOccupancy = this.architecturalPermitService.percentageOfOccupancyForm.value;
    this.form.value.siteOccupancyPercentage = percentageOfOccupancy;

    console.log('Data to be sent', this.form.value);

    this.architecturalPermitService.create(this.form.value).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.architecturalPermitService.findAll();
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
    this.form.reset(this.architecturalPermitService.formDefault);
    this.form.reset(this.architecturalPermitService.percentageOfOccupancyDefault);
    this.architecturalPermitService.resetCheckboxes();
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocationService.form.reset(this.constructionLocationService.formDefault);
  }

  editDialog() {
    const dialogRef = this.dialog.open(SelectBuildingPermitComponent, {
      hasBackdrop: true,
      width: '95vw',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((data: IBuildingPermitModel) => {
      this.form.value.buildingPermit = data;
      this.applicantService.form.patchValue(data?.applicant);
      this.constructionLocationService.form.patchValue(data?.constructionLocation);
    });
  }

  setDefaultData() {}
}
