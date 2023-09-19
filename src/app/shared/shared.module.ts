import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { ToastrModule } from 'ngx-toastr';
import { MaterialExtensionsModule } from '../material-extensions.module';
import { MaterialModule } from '../material.module';

import { ErrorCodeComponent } from './components/error-code/error-code.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DisableControlDirective } from './directives/disable-control.directive';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ToObservablePipe } from './pipes/to-observable.pipe';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ForConstructionOwnedComponent } from './components/for-construction-owned/for-construction-owned.component';
import { BusinessComponent } from './components/project-registration/business/business.component';
import { BrokerComponent } from './components/project-registration/broker/broker.component';
import { BoardOfDirectorsComponent } from './components/project-registration/board-of-directors/board-of-directors.component';
import { PropertyFormComponent } from './components/project-registration/property-form/property-form.component';
import { PropertyListComponent } from './components/project-registration/property-list/property-list.component';
import { PropertyFormDialogComponent } from './components/project-registration/property-form-dialog/property-form-dialog.component';
import { ProjectComponent } from './components/project-registration/project/project.component';
import { ProjectRegistrationOwnerApplicationComponent } from './components/project-registration-owner-application/project-registration-owner-application.component';
import { OwnerApplicantComponent } from './components/owner-applicant/owner-applicant.component';
import { LocationOfConstructionComponent } from './components/location-of-construction/location-of-construction.component';
import { ScopeOfWorkComponent } from './components/scope-of-work/scope-of-work.component';
import { SelectBuildingPermitComponent } from './components/select-building-permit/select-building-permit.component';
import { SignaturyFormComponent } from './components/signatury/signatury-form/signatury-form.component';
import { SelectInsSupDialogComponent } from './components/signatury/select-ins-sup-dialog/select-insp-sup-dialog.component';
import { DesignProfessionalComponent } from './components/design-professional/design-professional.component';
import { InspectorSupervisorComponent } from './components/inspector-supervisor/inspector-supervisor.component';
import { SelectDesignProfComponent } from './components/signatury/select-design-prof-dialog/select-design-prof-dialog.component';
import { DesignProfListComponent } from './components/signatury/design-prof-list/design-prof-list.component';
import { InspectorSupervisorListComponent } from './components/signatury/inspector-supervisor-list/inspector-supervisor-list.component';
import { NgxPrintModule } from 'ngx-print';
import { SignatoryComponent } from './components/signatory-component/signatory.component';
import { SignatoryFieldsComponent } from './components/signatory-fields/signatory-fields.component';
import { SignatoryListComponent } from './components/signatory-list/signatory-list.component';
import { SelectElectricalPermitComponent } from './components/select-electrical-permit/select-electrical-permit.component';
import { SelectMechanicalPermitComponent } from './components/select-mechanical-permit/select-mechanical-permit.component';
import { ApplicantOwnerConsentComponent } from './components/applicant-owner-consent/applicant-owner-consent.component';

const NGXPRINT_MODULE: any[] = [NgxPrintModule];
const MODULES: any[] = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  DragDropModule,
  MaterialModule,
  MaterialExtensionsModule,
  FlexLayoutModule,
  // FormlyModule,
  FormlyMaterialModule,
  NgProgressModule,
  NgProgressRouterModule,
  NgProgressHttpModule,
  NgxPermissionsModule,
  ToastrModule,
  TranslateModule,
];
const PROJECT_REGISTRATION_COMPONENT: any[] = [
  ProjectRegistrationOwnerApplicationComponent,
  ForConstructionOwnedComponent,
  BusinessComponent,
  BrokerComponent,
  BoardOfDirectorsComponent,
  PropertyFormComponent,
  PropertyListComponent,
  PropertyFormDialogComponent,
  ProjectComponent,
];
const SIGNATORY_COMPONENT: any[] = [
  DesignProfListComponent,
  InspectorSupervisorListComponent,
  SignaturyFormComponent,
  SelectInsSupDialogComponent,
  SelectDesignProfComponent,
  DesignProfessionalComponent,
  InspectorSupervisorComponent,
  SignatoryComponent,
  SignatoryFieldsComponent,
  SignatoryListComponent,
];

const BUILDING_PERMIT_COMPONENT: any[] = [
  OwnerApplicantComponent,
  LocationOfConstructionComponent,
  ScopeOfWorkComponent,
  SelectBuildingPermitComponent,
  SelectElectricalPermitComponent,
  SelectMechanicalPermitComponent,
];

const BOX3_APPLICANT_OWNER_COMPONENT: any[] = [ApplicantOwnerConsentComponent];

const COMPONENTS: any[] = [
  BreadcrumbComponent,
  PageHeaderComponent,
  ErrorCodeComponent,
  ...PROJECT_REGISTRATION_COMPONENT,
  ...SIGNATORY_COMPONENT,
  ...BUILDING_PERMIT_COMPONENT,
  ...BOX3_APPLICANT_OWNER_COMPONENT,
];
const COMPONENTS_DYNAMIC: any[] = [];
const DIRECTIVES: any[] = [DisableControlDirective];
const PIPES: any[] = [SafeUrlPipe, ToObservablePipe];

@NgModule({
  imports: [...MODULES, ...NGXPRINT_MODULE],
  exports: [...MODULES, ...NGXPRINT_MODULE, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
})
export class SharedModule {}
