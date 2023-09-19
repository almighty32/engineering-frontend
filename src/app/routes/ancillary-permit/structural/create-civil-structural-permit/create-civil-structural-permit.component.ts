import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { CivilStructuralPermitService } from '@shared/services/civil-structural-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';

@Component({
  selector: 'app-create-civil-structural-permit',
  templateUrl: './create-civil-structural-permit.component.html',
  styleUrls: ['./create-civil-structural-permit.component.scss'],
})
export class CreateCivilStructuralPermitComponent implements OnInit {
  saveButtonSelector = 'SAVE';
  title = 'Civil Structural';
  form = this.civilStructuralPermitService.form;

  constructor(
    private civilStructuralPermitService: CivilStructuralPermitService,
    private dialog: MatDialog,
    private applicantService: ApplicantService,
    private constructionLocationService: ConstructionLocationService
  ) {}

  ngOnInit(): void {}

  save() {
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }
  update() {
    this.civilStructuralPermitService.update(this.form).subscribe({
      next: res => {
        console.log(res);
        this.civilStructuralPermitService.findAll();
        this.resetInputs();
      },
      error: err => {
        console.log({
          error: err,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  create() {
    console.log('Create building permit');

    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocationService.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.civilStructuralPermitService.scopeOfWorks;
    this.form.value.scopeOfWorks = scopeOfWorks;

    const natureOfWorks = this.civilStructuralPermitService.natureOfWorks;
    this.form.value.natureOfWorks = natureOfWorks;

    console.log('the data', this.form.value);
    this.civilStructuralPermitService.create(this.form.value).subscribe({
      next: res => {
        console.log(res);
        this.civilStructuralPermitService.findAll();
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
    this.form.reset(this.civilStructuralPermitService.formDefault);
    this.civilStructuralPermitService.resetCheckboxes();
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
      this.form.value.buildingPermit = buildingPermit;
      this.applicantService.form.patchValue(buildingPermit?.applicant);
      this.constructionLocationService.form.patchValue(buildingPermit?.constructionLocation);
    });
  }
}
