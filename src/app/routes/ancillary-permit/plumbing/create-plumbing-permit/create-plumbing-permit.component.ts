import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { FormService } from '@shared/services/form.service';
import { PlumbingPermitService } from '@shared/services/plumbing-permit.service';

@Component({
  selector: 'app-create-plumbing-permit',
  templateUrl: './create-plumbing-permit.component.html',
  styleUrls: ['./create-plumbing-permit.component.scss'],
})
export class CreatePlumbingPermitComponent implements OnInit {
  saveButtonSelector = 'SAVE';
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  form = this.plumbingPermitService.form;

  constructor(
    private buildingPermitService: BuildingPermitService,
    private plumbingPermitService: PlumbingPermitService,
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

    this.buildingPermitService.buildingPermit.subscribe(msg => {
      this.buildingPermit = msg;
    });
  }
  save() {
    this.saveButtonSelector === 'SAVE' ? this.create() : this.update();
  }

  update() {
    this.plumbingPermitService.update(this.form).subscribe({
      next: res => {
        console.log(res);
        this.plumbingPermitService.findAll();
        this.resetInputs();
        this.dialog.closeAll();
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
    const applicant = this.applicantService.form.value;
    this.form.value.applicant = applicant;

    const constructionLocation = this.constructionLocationService.form.value;
    this.form.value.constructionLocation = constructionLocation;

    const scopeOfWorks = this.plumbingPermitService.scopeOfWorks;
    this.form.value.scopeOfWorks = scopeOfWorks;

    const fixtures = this.plumbingPermitService.fixtures;
    this.form.value.fixTures = fixtures;

    this.form.value.buildingPermit = this.buildingPermit;

    console.log(this.form.value);

    this.plumbingPermitService.create(this.form.value).subscribe({
      next: res => {
        console.log(res);
        this.plumbingPermitService.findAll();
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
    this.form.reset(this.plumbingPermitService.formDefault);
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocationService.form.reset(this.constructionLocationService.formDefault);
    this.plumbingPermitService.fixtures.forEach(item => (item.kindStatus = ''));
    this.plumbingPermitService.scopeOfWorks.forEach(item => (item.isSelected = false));
  }
}
