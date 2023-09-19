import { Component, OnInit } from '@angular/core';
// import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectBuildingPermitComponent } from '@shared/components/select-building-permit/select-building-permit.component';
import { IBuildingPermitModel } from '@shared/model/interface/building-permit/I-building-permit';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { ConstructionLocationService } from '@shared/services/construction-location.service';
import { FormService } from '@shared/services/form.service';
import { MechanicalPermitService } from '@shared/services/mechanical-permit.service';
import { SignatoryService } from '@shared/services/signatory.service';

@Component({
  selector: 'app-create-mechanical-permit',
  templateUrl: './create-mechanical-permit.component.html',
  styleUrls: ['./create-mechanical-permit.component.scss'],
})
export class CreateMechanicalPermitComponent implements OnInit {
  saveButtonSelector = `SAVE`;
  buildingPermit: IBuildingPermitModel = {} as IBuildingPermitModel;
  form = this.mechanicalPermitService.form;
  constructor(
    private buildingPermitService: BuildingPermitService,
    private mechanicalPermitService: MechanicalPermitService,
    private signaturyService: SignatoryService,
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
    this.mechanicalPermitService.update(this.form.value).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.mechanicalPermitService.findAll();
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

    const scopeOfWorks = this.mechanicalPermitService.scopeOfWorks;
    this.form.value.scopeOfWorks = scopeOfWorks;

    const equipments = this.mechanicalPermitService.mechanicalEquipmentsInstalled;
    this.form.value.mechanicalEquipmentsInstalled = equipments;

    this.form.value.buildingPermit = this.buildingPermit;

    console.log(this.form.value);
    this.mechanicalPermitService.create(this.form.value).subscribe({
      next: res => {
        const ress = res;
        console.log({ ress });
        this.mechanicalPermitService.findAll();
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
    this.form.reset(this.mechanicalPermitService.formDefault);
    this.mechanicalPermitService.scopeOfWorks.forEach(item => (item.isSelected = false));
    this.mechanicalPermitService.mechanicalEquipmentsInstalled.forEach(
      item => (item.isSelected = false)
    );
    this.applicantService.form.reset(this.applicantService.formDefault);
    this.constructionLocationService.form.reset(this.constructionLocationService.formDefault);
  }
}
