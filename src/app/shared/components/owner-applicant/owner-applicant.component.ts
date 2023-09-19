import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApplicantService } from '@shared/services/applicant.service';
import { BuildingPermitService } from '@shared/services/building-permit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-owner-applicant',
  templateUrl: './owner-applicant.component.html',
  styleUrls: ['./owner-applicant.component.scss'],
})
export class OwnerApplicantComponent implements OnInit, OnDestroy {
  @Input() hideCompanyName!: boolean;
  @Input() hideIndividualName!: boolean;
  @Input() companyOwnerInit!: string;
  @Input() applicantFullNameInit = {
    lastName: '',
    firstName: '',
    middleInitial: '',
  };

  form!: FormGroup;

  private subscriptions: Subscription[] = [];
  address = '';
  company = '';
radioValue: any;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit(): void {
    this.form = this.applicantService.form;

    this.updateAddress();

    this.subscriptions.push(
      this.form.valueChanges.subscribe(() => {
        this.updateAddress();
        this.updateCompanyName();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  updateAddress() {
    const no = this.form.get('addressNo')?.value;
    const street = this.form.get('addressStreet')?.value;
    const barangay = this.form.get('addressBarangay')?.value;
    const city_mun = this.form.get('addressCity')?.value;

    this.address = `${no ? no + ', ' : ''}${street ? street + ', ' : ''}${
      barangay ? barangay + ', ' : ''
    }${city_mun || ''}`.trim();

    this.applicantService.changeApplicantAddress(this.address);
  }

  updateCompanyName() {
    const companyName = this.form.get('companyName')?.value;

    this.applicantService.changeCompanyName(companyName);
  }

}
