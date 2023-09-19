import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ApplicantOwnerConsentService } from '@shared/services/applicant-owner-consent.service';
import { ApplicantService } from '@shared/services/applicant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applicant-owner-consent',
  templateUrl: './applicant-owner-consent.component.html',
  styleUrls: ['./applicant-owner-consent.component.scss'],
})
export class ApplicantOwnerConsentComponent implements OnInit, OnDestroy, OnChanges {
  @Input() currentForm!: string;
  @Input() ownership!: string;

  applicant?: string;
  consentForm = this.applicantOwnerConsentService.form;
  private subscriptions: Subscription[] = [];

  constructor(
    private applicantOwnerConsentService: ApplicantOwnerConsentService,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.updateFormSubscription();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentForm && !changes.currentForm.firstChange) {
      this.updateFormSubscription();
    }

    if (changes.ownership && !changes.ownership.firstChange) {
      this.updateFormSubscription();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private updateFormSubscription(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());

    if (this.currentForm === '1') {
      this.subscriptions.push(
        this.applicantService.currentApplicantData$.subscribe(data =>
          this.consentForm.get('fullName')?.setValue(data)
        )
      );
    } else if (this.currentForm === '2' && this.ownership === 'Sole Proprietorship') {
      this.subscriptions.push(
        this.applicantService.currentApplicantData$.subscribe(data =>
          this.consentForm.get('fullName')?.setValue(data)
        )
      );
    } else if (this.currentForm === '2' && this.ownership !== 'Sole Proprietorship') {
      this.subscriptions.push(
        this.applicantService.currentCompanyName$.subscribe(data =>
          this.consentForm.get('fullName')?.setValue(data)
        )
      );
    }
    this.subscriptions.push(
      this.applicantService.currentApplicantAddress$.subscribe(data =>
        this.consentForm.get('address')?.setValue(data)
      )
    );
  }

  checkIsOwner() {
    if (this.consentForm.get('isOwner')?.value) {
      this.applicantOwnerConsentService.formSetVal();
    } else {
      this.applicantOwnerConsentService.formRemoveVal();
    }
  }
}
