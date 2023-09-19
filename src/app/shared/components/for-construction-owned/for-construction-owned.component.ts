import { Component, OnInit, Input } from '@angular/core';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';

@Component({
  selector: 'app-for-construction-owned',
  templateUrl: './for-construction-owned.component.html',
  styleUrls: ['./for-construction-owned.component.scss'],
})
export class ForConstructionOwnedComponent implements OnInit {
  @Input() hideCompanyName!: boolean;

  applicantForm = this.applicantService.form;
  buildingPermitForm = this.buildingPermitService.form;

  constructor(
    private applicantService: ApplicantService,
    private buildingPermitService: BuildingPermitService
  ) {}

  ngOnInit(): void {}
}
